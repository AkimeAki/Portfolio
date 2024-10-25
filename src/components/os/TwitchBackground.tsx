"use client";

import { osLoading } from "@/atom";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";

const resize = () => {
	const twitchElement = document.querySelector<HTMLDivElement>("#twitch-embed");
	if (twitchElement !== null) {
		const iframeElement = twitchElement.querySelector("iframe");
		if (iframeElement !== null) {
			if (window.innerWidth / window.innerHeight > 16 / 9) {
				iframeElement.style.width = "100%";
				iframeElement.style.height = "";
			} else {
				iframeElement.style.height = "100%";
				iframeElement.style.width = "";
			}
		}
	}
};

export default function () {
	const $osLoading = useStore(osLoading);
	const [isPaused, setIsPaused] = useState<boolean>(true);

	useEffect(() => {
		if (!$osLoading) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			const player = new Twitch.Embed("twitch-embed", {
				channel: "akime_aki",
				muted: true,
				autoplay: true,
				layout: "video",
				parent: ["localhost", "aki.wtf"]
			});

			const checkStatus = async () => {
				await new Promise((resolve) => setTimeout(resolve, 1000));
				const isPaused = player.isPaused() === true ? true : false;
				if (!isPaused) {
					await new Promise((resolve) => setTimeout(resolve, 10000));
				}
				setIsPaused(isPaused);
				resize();
				checkStatus();
			};
			void checkStatus();
		}
	}, [$osLoading]);

	useEffect(() => {
		window.addEventListener("resize", resize);
		resize();

		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<>
			<div
				style={{ animationName: isPaused ? "none" : "view-twitch-popup" }}
				className={css`
					position: fixed;
					bottom: 90px;
					left: 124px;
					opacity: 0;
					user-select: none;
					pointer-events: none;
					background-color: #9143f9;
					padding: 3px 15px 5px;
					z-index: 999999;

					@media (max-width: 720px) {
						left: calc(50% + 43px);
						transform: translateX(-50%);
					}

					animation-duration: 70ms;
					animation-fill-mode: forwards;
					animation-iteration-count: 5;
					animation-timing-function: linear;

					&:before {
						display: block;
						content: "";
						position: absolute;
						bottom: -10px;
						left: 20px;
						background-color: #9143f9;
						width: 30px;
						height: 30px;
						transform: rotate(45deg);
					}

					@keyframes view-twitch-popup {
						100% {
							opacity: 1;
						}
					}
				`}
			>
				<span
					className={css`
						position: relative;
						z-index: 1;
						color: white;
						white-space: nowrap;
						font-size: 17px;
					`}
				>
					Twitchで配信中!
				</span>
			</div>
			<div
				id="twitch-embed"
				style={{ animationName: isPaused ? "none" : "view-twitch" }}
				className={css`
					position: absolute;
					opacity: 0;
					user-select: none;
					pointer-events: none;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;

					animation-duration: 70ms;
					animation-fill-mode: forwards;
					animation-iteration-count: 5;
					animation-timing-function: linear;

					@keyframes view-twitch {
						100% {
							opacity: 0.1;
						}
					}

					iframe {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						aspect-ratio: 16/9;
					}
				`}
			/>
			<script src="https://player.twitch.tv/js/embed/v1.js" />
		</>
	);
}
