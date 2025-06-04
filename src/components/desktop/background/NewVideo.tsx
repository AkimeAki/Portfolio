"use client";

import { osReady } from "@/atom";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import GlitchWrapper from "@/components/desktop/GlitchWrapper";
import { useEffect, useState } from "react";
import checkBrowser from "@akimeaki/check-browser";
import Image from "next/image";
import NewVideoFrame from "@/assets/desktop/new_video_frame.png";

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
		// AndroidのOperaは自動再生ができない
		if (!(data.browser === "opera" && data.os === "android")) {
			setBrowserCheck(true);
		}
	}, []);

	return (
		<>
			{browserCheck && (
				<div
					style={{
						animationName: ready ? "new-video-signal" : ""
					}}
					className={css`
						position: absolute;
						top: 10%;
						right: 25%;
						width: 28%;
						min-width: 320px;
						aspect-ratio: 16/9;

						animation-duration: 70ms;
						animation-fill-mode: forwards;
						animation-delay: 1500ms;
						animation-iteration-count: 5;
						animation-timing-function: linear;
						opacity: 0;
						filter: brightness(80%);

						&:after {
							position: absolute;
							content: "";
							display: block;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
							width: 100%;
							height: 100%;
							border: 4px solid #060303;
						}

						@media (max-width: 720px) {
							filter: brightness(50%) opacity(0.4);
							right: -70px;
							top: auto;
							bottom: 280px;
						}

						@media (max-width: 530px) {
							transform: scale(0.8);
						}

						@keyframes new-video-signal {
							100% {
								opacity: 1;
							}
						}
					`}
				>
					<GlitchWrapper
						className={css`
							position: relative;
							width: 100%;
							height: 100%;
							user-select: none;
							pointer-events: none;
						`}
					>
						<Image
							src={NewVideoFrame}
							alt=""
							width={470}
							className={css`
								position: absolute;
								top: 50%;
								left: 50%;
								transform: translate(-50%, -50%);
								width: calc(2600 / 1920 * 100%);
								height: calc(1700 / 1080 * 100%);
								z-index: 1;
							`}
						/>
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
						<iframe
							title="新着動画"
							src="https://www.youtube.com/embed/?list=UUHV3Taosn76pn9_ip1u7Zkg&loop=1&autoplay=1&mute=1&rel=0&controls=0&playsinline=1"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className={css`
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
								border: none;
							`}
						/>
					</GlitchWrapper>
				</div>
			)}
		</>
	);
}
