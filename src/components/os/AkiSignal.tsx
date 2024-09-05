"use client";

import { osLoading } from "@/atom";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { useState } from "react";

export default function () {
	const $osLoading = useStore(osLoading);
	const [animation, setAnimation] = useState<boolean>(true);

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
				alt="でっかい彩季"
				className={css`
					position: absolute;
					bottom: 0;
					right: 0;
					width: 80vmin;
					image-rendering: pixelated;
					opacity: 0.9;
				`}
			/>
			<img
				src="/aki-signal.png"
				alt={"でっかい彩季"}
				style={{ animationName: $osLoading ? "" : animation ? "aki-signal" : "" }}
				onClick={(e) => {
					if (animation) {
						const canvas = document.createElement("canvas");
						const ctx = canvas.getContext("2d");
						const image = e.target as HTMLImageElement;

						canvas.width = image.naturalWidth;
						canvas.height = image.naturalHeight;
						ctx!.drawImage(image, 0, 0, canvas.width, canvas.height);

						const clickPixelX = e.nativeEvent.offsetX / (image.width / image.naturalWidth);
						const clickPixelY = e.nativeEvent.offsetY / (image.width / image.naturalHeight);

						const pixelData = ctx!.getImageData(clickPixelX, clickPixelY, 1, 1).data;
						const alpha = pixelData[3];
						if (alpha === 255) {
							canvas.remove();
							setAnimation(false);
							setTimeout(() => {
								setAnimation(true);
							}, 100);
						}
					}
				}}
				className={css`
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
					pointer-events: auto;
					user-drag: none;
					-webkit-user-drag: none;
					-moz-user-select: none;
					filter: brightness(110%) blur(3px);
				`}
			/>
			<img
				src="/aki-signal.png"
				alt={"でっかい彩季"}
				style={{ animationName: $osLoading ? "" : animation ? "aki-signal" : "" }}
				className={css`
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
				`}
			/>
		</div>
	);
}
