"use client";

import { osLoading } from "@/atom";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Planet } from "@/components/os/background/galaxy/Planet";
import { Orbit } from "@/components/os/background/galaxy/Orbit";
import GlitchWrapper from "@/components/os/GlitchWrapper";

export default function () {
	const $osLoading = useStore(osLoading);
	const canvasElement = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (!$osLoading) {
			if (canvasElement.current !== null) {
				const canvas = canvasElement.current;

				const renderer = new THREE.WebGLRenderer({
					canvas,
					// alpha: true, // 透明度を有効化
					antialias: false // 表面を滑らかにする
				});
				renderer.autoClear = false;

				// 影 OFF
				renderer.shadowMap.enabled = true;
				renderer.shadowMap.type = THREE.VSMShadowMap;
				THREE.ColorManagement.enabled = false;
				renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
				renderer.toneMapping = THREE.ACESFilmicToneMapping;

				// ゲーム用シーン作成
				const scene = new THREE.Scene();

				// 全方面を照らすライト
				const ambientLight = new THREE.AmbientLight(undefined, 0.5);
				scene.add(ambientLight);

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
				const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
				camera.rotation.order = "ZYX"; // なぜか縦を動かすと斜めに傾くのでそれ防止
				camera.position.z = 10;
				camera.position.y = 10;

				const orbit1 = new Orbit(scene);
				const orbit2 = new Orbit(scene);
				const orbit3 = new Orbit(scene);
				const orbit4 = new Orbit(scene);
				const orbit5 = new Orbit(scene);
				orbit1.changePoints(0, 0, 2);
				orbit2.changePoints(0, 0, 4);
				orbit3.changePoints(0, 0, 6);
				orbit4.changePoints(0, 0, 8);
				orbit5.changePoints(0, 0, 10);
				orbit5.changeRotation(10, 10, 0);

				// ひよこ惑星
				const hiyokoPlanet = new Planet(scene);
				hiyokoPlanet.load("models/hiyoko.glb", -20, 20);

				// ピグリン惑星
				const piglinPlanet = new Planet(scene);
				piglinPlanet.load("models/piglin.glb", -20, 5);

				const tick = (): void => {
					renderer.clear();

					hiyokoPlanet.tracking(orbit1, 0.0005, -3, -2);
					piglinPlanet.tracking(orbit2, 0.001, 4, -2);

					// カメラ
					camera.position.copy(new THREE.Vector3(0, 30, 50));
					camera.lookAt(new THREE.Vector3(0, -5, 0));

					// カメラを指定
					renderer.render(scene, camera);

					requestAnimationFrame(tick);
				};

				tick();

				const onResize = (): void => {
					// サイズを取得
					const width = 280;
					const height = 150 + 80;

					// レンダラーのサイズ調整
					renderer.setPixelRatio(window.devicePixelRatio);
					// galaxy.renderer.setSize(width / 10, height / 10);
					renderer.setSize(width, height);

					// カメラのアスペクト比を正す
					camera.aspect = width / height;
					camera.updateProjectionMatrix();
				};

				// リサイズ
				onResize();
			}
		}
	}, [$osLoading]);

	return (
		<GlitchWrapper
			style={{
				animationName: $osLoading ? "" : "galaxy-signal"
			}}
			className={css`
				position: absolute;
				bottom: 20vh;
				right: 570px;
				width: 280px;
				height: 150px;

				user-select: none;
				pointer-events: none;

				@media (min-width: 1600px) {
					transform: scale(1.3);
					bottom: 25vh;
					right: 700px;
				}

				@media (max-width: 720px) {
					bottom: 300px;
					right: -80px;
					filter: opacity(0.8);
				}

				animation-duration: 70ms;
				animation-fill-mode: forwards;
				animation-delay: 1700ms;
				animation-iteration-count: 5;
				animation-timing-function: linear;
				opacity: 0;

				@keyframes galaxy-signal {
					100% {
						opacity: 1;
					}
				}
			`}
		>
			<div
				className={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: black;
					filter: brightness(110%) blur(2px);
					transform: scale(1.02);
				`}
			/>
			<canvas
				ref={canvasElement}
				className={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100% !important;
					height: 100% !important;
				`}
			/>
		</GlitchWrapper>
	);
}
