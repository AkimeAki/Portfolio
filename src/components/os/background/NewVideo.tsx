"use client";

import { osReady } from "@/atom";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import GlitchWrapper from "@/components/os/GlitchWrapper";
import { useEffect, useState } from "react";
import checkBrowser from "@akimeaki/check-browser";

export default function () {
	const $osReady = useStore(osReady);
	const [ready, setReady] = useState<boolean>(false);
	const [browserCheck, setBrowserCheck] = useState<boolean>(false);

	useEffect(() => {
		if ($osReady) {
			setReady(true);
		}
	}, [$osReady]);

	useEffect(() => {
		const data = checkBrowser();
		// AndroidのOperaはYouTubeの自動再生ができない
		if (!(data.browser === "opera" && data.os === "android")) {
			setBrowserCheck(true);
		}
	}, []);

	return (
		<GlitchWrapper
			style={{
				animationName: ready ? "new-video-signal" : ""
			}}
			className={css`
				position: absolute;
				top: 40px;
				right: 300px;
				width: 320px;
				height: 180px;

				user-select: none;
				pointer-events: none;

				@media (max-width: 720px) {
					right: -70px;
					top: auto;
					bottom: 280px;
					filter: brightness(50%) opacity(0.5);
				}

				@media (max-width: 530px) {
					transform: scale(0.8);
				}

				animation-duration: 70ms;
				animation-fill-mode: forwards;
				animation-delay: 1500ms;
				animation-iteration-count: 5;
				animation-timing-function: linear;
				opacity: 0;

				@keyframes new-video-signal {
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
					aspect-ratio: 16 / 9;
					filter: brightness(110%) blur(5px);
					transform: scale(1.02);
					background-color: rgb(255, 255, 255, 0.13);
				`}
			/>
			{browserCheck && (
				<iframe
					src="https://www.youtube.com/embed/?list=UUHV3Taosn76pn9_ip1u7Zkg&loop=1&autoplay=1&mute=1&rel=0&controls=0&playsinline=1"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
					className={css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						aspect-ratio: 16/9;
						border: none;
					`}
				/>
			)}
		</GlitchWrapper>
	);
}
