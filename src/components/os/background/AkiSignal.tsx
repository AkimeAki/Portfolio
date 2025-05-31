"use client";

import { isTouch, openAppSortList, osReady } from "@/atom";
import { cx } from "@/libs/merge-kuma";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { useEffect, useRef, useState } from "react";

export default function () {
	const $osReady = useStore(osReady);
	const [animation, setAnimation] = useState<boolean>(true);
	const signalElement = useRef<HTMLImageElement | null>(null);
	const $isTouch = useStore(isTouch);
	const $openAppSortList = useStore(openAppSortList);

	useEffect(() => {
		const click = (e: MouseEvent) => {
			if (
				e.target !== null &&
				(e.target as HTMLElement).id === "select-area" &&
				animation &&
				signalElement.current !== null &&
				!$isTouch
			) {
				const canvas = document.createElement("canvas");
				const ctx = canvas.getContext("2d");
				const image = signalElement.current;

				if (ctx === null) {
					return;
				}

				canvas.width = image.naturalWidth;
				canvas.height = image.naturalHeight;
				ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

				const rect = image.getBoundingClientRect();

				const clickPixelX = (e.offsetX - rect.left) / (image.width / image.naturalWidth);
				const clickPixelY = (e.offsetY - rect.top) / (image.width / image.naturalHeight);

				const pixelData = ctx.getImageData(clickPixelX, clickPixelY, 1, 1).data;
				const alpha = pixelData[3];
				if (alpha === 255) {
					canvas.remove();
					setAnimation(false);
					setTimeout(() => {
						setAnimation(true);
					}, 100);
				}
			}
		};

		window.addEventListener("click", click);

		return () => {
			window.removeEventListener("click", click);
		};
	}, [animation, $isTouch, $openAppSortList]);

	return (
		<div
			className={css`
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				user-select: none;
				pointer-events: none;

				@keyframes aki-signal {
					100% {
						opacity: 1;
					}
				}
			`}
		>
			<img
				src="/aki.png"
				alt={"でっかい彩季"}
				className={css`
					position: absolute;
					bottom: 0;
					right: 0;
					width: 80vmin;
					image-rendering: pixelated;
					opacity: 0.9;
				`}
				data-loading-image
				loading="eager"
			/>
			<img
				src="/aki-signal.png"
				ref={signalElement}
				alt={"でっかい彩季"}
				className={cx(
					css`
						position: absolute;
						bottom: 0;
						right: 0;
						width: 80vmin;
						opacity: 0;
						image-rendering: pixelated;
						animation-duration: 70ms;
						animation-fill-mode: forwards;
						animation-iteration-count: 5;
						animation-timing-function: linear;
						filter: brightness(110%) blur(3px);
					`,
					$osReady &&
						animation &&
						css`
							animation-name: aki-signal;
						`
				)}
				data-loading-image
				loading="eager"
			/>
			<img
				src="/aki-signal.png"
				alt={"でっかい彩季"}
				className={cx(
					css`
						position: absolute;
						bottom: 0;
						right: 0;
						width: 80vmin;
						opacity: 0;
						image-rendering: pixelated;
						animation-duration: 70ms;
						animation-fill-mode: forwards;
						animation-iteration-count: 8;
						animation-timing-function: linear;
					`,
					$osReady &&
						animation &&
						css`
							animation-name: aki-signal;
						`
				)}
				data-loading-image
				loading="eager"
			/>
		</div>
	);
}
