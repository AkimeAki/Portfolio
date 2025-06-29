"use client";

import { isOSReady } from "@/atom";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import GlitchWrapper from "@/components/desktop/GlitchWrapper";
import { useEffect, useState } from "react";
import checkBrowser from "@akimeaki/check-browser";

export default function () {
	const $isOSReady = useStore(isOSReady);
	const [ready, setReady] = useState<boolean>(false);
	const [browserCheck, setBrowserCheck] = useState<boolean>(false);

	useEffect(() => {
		if ($isOSReady) {
			setReady(true);
		}
	}, [$isOSReady]);

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
						filter: brightness(80%) drop-shadow(-3px 0 0 #363636) drop-shadow(0 -3px 0 #363636)
							drop-shadow(3px 0 0 #363636) drop-shadow(0 3px 0 #363636);

						image-rendering: pixelated;

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
							tabIndex={-1}
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
