"use client";

import { isOSReady } from "@/atom";
import { css, cx } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Planet } from "@/components/background/galaxy/Planet";
import { Orbit } from "@/components/background/galaxy/Orbit";

export default function () {
	const $isOSReady = useStore(isOSReady);
	const canvasElement = useRef<HTMLCanvasElement>(null);
	const [isReady, setisReady] = useState<boolean>(false);

	useEffect(() => {
		if ($isOSReady) {
			setTimeout(() => {
				setisReady(true);
			}, 1000);
		}
	}, [$isOSReady]);

	useEffect(() => {
		let unmounted = false;

		if (isReady) {
			if (canvasElement.current !== null) {
				const canvas = canvasElement.current;

				const renderer = new THREE.WebGLRenderer({
					canvas,
					alpha: true, // 透明度を有効化
					antialias: false // 表面を滑らかにする
				});
				renderer.autoClear = false;
				renderer.setClearColor(0x000000, 0);

				// 影 OFF
				renderer.shadowMap.enabled = true;
				renderer.shadowMap.type = THREE.VSMShadowMap;
				THREE.ColorManagement.enabled = false;
				renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
				renderer.toneMapping = THREE.ACESFilmicToneMapping;

				// ゲーム用シーン作成
				const scene = new THREE.Scene();

				// 全方面を照らすライト
				const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
				scene.add(hemisphereLight);

				// 太陽光
				const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
				directionalLight.position.set(-50, 100, 50);

				// 太陽光の可視化
				// scene.add(new THREE.DirectionalLightHelper(directionalLight, 10));

				// 影
				directionalLight.castShadow = true; // 影 ON
				directionalLight.shadow.camera.near = 0;
				directionalLight.shadow.camera.top = 100;
				directionalLight.shadow.camera.bottom = -100;
				directionalLight.shadow.camera.right = 100;
				directionalLight.shadow.camera.left = -100;
				directionalLight.shadow.mapSize.width = directionalLight.shadow.mapSize.height = 512;
				// directionalLight.shadow.mapSize.set(4096, 4096);
				scene.add(directionalLight);

				// 影の可視化
				// scene.add(new THREE.CameraHelper(directionalLight.shadow.camera));

				// カメラ
				const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
				camera.rotation.order = "ZYX"; // なぜか縦を動かすと斜めに傾くのでそれ防止
				camera.lookAt(new THREE.Vector3(0, 0, 0));

				const orbit1 = new Orbit(scene);
				const orbit2 = new Orbit(scene);
				// const orbit3 = new Orbit(scene);
				// const orbit4 = new Orbit(scene);
				// const orbit5 = new Orbit(scene);
				orbit1.changePoints(0, 0, 2);
				orbit2.changePoints(0, 0, 4);
				// orbit3.changePoints(0, 0, 6);
				// orbit4.changePoints(0, 0, 8);
				// orbit5.changePoints(0, 0, 10);
				// orbit5.changeRotation(10, 10, 0);

				// ひよこ惑星
				const hiyokoPlanet = new Planet(scene);
				hiyokoPlanet.load("/hiyoko.glb");

				// ピグリン惑星
				const piglinPlanet = new Planet(scene);
				// piglinPlanet.load("models/piglin.glb", -20, 5);
				piglinPlanet.load("/piglin.glb");

				const maxFPS = 30;
				let lastUpdateTime = performance.now();

				// 3秒かけてspeedを徐々に1倍にする
				const startSpeed = 50;
				const endSpeed = 1;
				const duration = 1000;
				const startTime = performance.now();
				let speed = startSpeed;

				// イージング関数
				const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

				const tick = (): void => {
					if (unmounted) {
						return;
					}

					requestAnimationFrame(tick);
					const now = performance.now();
					const deltaTime = now - lastUpdateTime;

					// 初回のスピード調整処理
					const elapsed = now - startTime;
					if (elapsed < duration) {
						const t = Math.min(elapsed / duration, 1);
						const easedT = easeOutQuad(t);
						speed = startSpeed + (endSpeed - startSpeed) * easedT;
					} else {
						speed = endSpeed;
					}

					if (deltaTime < 1000 / maxFPS) {
						return;
					}

					lastUpdateTime = now - (deltaTime % (1000 / maxFPS));

					renderer.clear();

					hiyokoPlanet.tracking(orbit1, 0.001 * speed, -3, -2);
					hiyokoPlanet.rotate(0.14, 1, -1, -1);

					piglinPlanet.tracking(orbit2, 0.002 * speed, 0, 0);
					piglinPlanet.rotate(0.2, 1, 1, 1);

					// カメラ
					camera.position.copy(new THREE.Vector3((window.innerWidth / 3) * 0.1, 10, 50));

					// カメラを指定
					renderer.render(scene, camera);
				};

				tick();

				const onResize = (): void => {
					// サイズを取得
					const width = window.innerWidth;
					const height = window.innerHeight;

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
		}

		return () => {
			unmounted = true;
		};
	}, [isReady]);

	return (
		<canvas
			ref={canvasElement}
			className={cx(
				css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;

					user-select: none;
					pointer-events: none;

					animation-duration: 70ms;
					animation-fill-mode: forwards;
					animation-delay: 1000ms;
					animation-iteration-count: 5;
					animation-timing-function: linear;
					opacity: 0;

					@keyframes galaxy-signal {
						100% {
							opacity: 1;
						}
					}
				`,
				$isOSReady &&
					css`
						animation-name: galaxy-signal;
					`
			)}
		/>
	);
}
