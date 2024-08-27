"use client";

import { osLoading } from "@/atom";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";

export default function () {
	const $osLoading = useStore(osLoading);

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
				alt="でっかい彩季"
				style={{ animationName: $osLoading ? "" : "aki-signal" }}
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
					filter: brightness(110%) blur(3px);
				`}
			/>
			<img
				src="/aki-signal.png"
				alt="でっかい彩季"
				style={{ animationName: $osLoading ? "" : "aki-signal" }}
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
