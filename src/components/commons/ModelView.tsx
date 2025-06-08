"use client";

import { css } from "@kuma-ui/core";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

interface Props {
	modelPath: string;
}

export function ModelView({ modelPath }: Props) {
	const canvasElement = useRef<HTMLCanvasElement>(null);
	const canvasWrapper = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let unmounted = false;

		if (canvasElement.current !== null && canvasWrapper.current !== null) {
			const canvas = canvasElement.current;
			const wrapper = canvasWrapper.current;

			const renderer = new THREE.WebGLRenderer({
				canvas,
				alpha: true, // 透明度を有効化
				antialias: true // 表面を滑らかにする
			});
			renderer.autoClear = false;
			renderer.setClearColor(0x000000, 0);

			// 影 OFF
			renderer.shadowMap.enabled = true;
			renderer.shadowMap.type = THREE.VSMShadowMap;
			THREE.ColorManagement.enabled = false;
			renderer.outputColorSpace = THREE.SRGBColorSpace;
			renderer.toneMapping = THREE.NoToneMapping;

			// ゲーム用シーン作成
			const scene = new THREE.Scene();

			// 全方面を照らすライト
			const ambientLight = new THREE.HemisphereLight(0xffffff, 0x444444, 3);
			scene.add(ambientLight);

			// 太陽光
			// const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
			// directionalLight.position.set(-50, 100, 50);

			// 太陽光の可視化
			// scene.add(new THREE.DirectionalLightHelper(directionalLight, 10));

			// 影
			// directionalLight.castShadow = true; // 影 ON
			// directionalLight.shadow.camera.near = 0;
			// directionalLight.shadow.camera.top = 100;
			// directionalLight.shadow.camera.bottom = -100;
			// directionalLight.shadow.camera.right = 100;
			// directionalLight.shadow.camera.left = -100;
			// directionalLight.shadow.mapSize.width = directionalLight.shadow.mapSize.height = 512;
			// // directionalLight.shadow.mapSize.set(4096, 4096);
			// scene.add(directionalLight);

			// 影の可視化
			// scene.add(new THREE.CameraHelper(directionalLight.shadow.camera));

			// カメラ
			const camera = new THREE.PerspectiveCamera(60, wrapper.offsetWidth / wrapper.offsetHeight, 0.1, 100);
			camera.position.set(0, 1, 3);

			const controls = new OrbitControls(camera, renderer.domElement);
			controls.enableDamping = true;

			// モデル読み込み
			(async () => {
				if (modelPath === undefined) {
					return;
				}
				const loader = new GLTFLoader();
				const model = await loader.loadAsync(modelPath);
				model.scene.scale.set(1, 1, 1);
				model.scene.rotation.x = THREE.MathUtils.degToRad(0);
				model.scene.rotation.z = THREE.MathUtils.degToRad(0);
				model.scene.rotation.y = THREE.MathUtils.degToRad(0);
				scene.add(model.scene);
			})();

			const maxFPS = 60;
			let lastUpdateTime = performance.now();

			const tick = (): void => {
				if (unmounted) {
					return;
				}

				requestAnimationFrame(tick);
				const now = performance.now();
				const deltaTime = now - lastUpdateTime;

				if (deltaTime < 1000 / maxFPS) {
					return;
				}

				lastUpdateTime = now - (deltaTime % (1000 / maxFPS));

				controls.update();

				renderer.clear();

				// カメラ
				// camera.position.copy(new THREE.Vector3((window.innerWidth / 3) * 0.1, 10, 50));

				// カメラを指定
				renderer.render(scene, camera);
			};

			tick();

			const onResize = (): void => {
				// サイズを取得
				const width = wrapper.offsetWidth;
				const height = wrapper.offsetHeight;

				// レンダラーのサイズ調整
				// renderer.setPixelRatio(window.devicePixelRatio);
				renderer.setPixelRatio(1);
				renderer.setSize(width, height);

				// カメラのアスペクト比を正す
				camera.aspect = width / height;
				camera.updateProjectionMatrix();
			};

			// リサイズ
			onResize();
			window.addEventListener("resize", onResize);
		}

		return () => {
			unmounted = true;
		};
	}, []);

	return (
		<div
			ref={canvasWrapper}
			className={css`
				aspect-ratio: 16/9;
				max-width: 1000px;
				width: 100%;
				height: 100%;
				background-image: radial-gradient(#fafaf1, #e7e7dd);
			`}
		>
			<canvas
				ref={canvasElement}
				className={css`
					border: none;
					width: 100%;
					height: 100%;
				`}
			/>
		</div>
	);
}
