/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export default function () {
	return (
		<div
			css={css`
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
				css={css`
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
				css={css`
					position: absolute;
					bottom: 0;
					right: 0;
					width: 80vmin;
					opacity: 0;
					image-rendering: pixelated;
					animation-name: aki-signal;
					animation-duration: 70ms;
					animation-fill-mode: forwards;
					animation-delay: 500ms;
					animation-iteration-count: 5;
					animation-timing-function: linear;
					filter: brightness(110%) blur(3px);
				`}
			/>
			<img
				src="/aki-signal.png"
				alt="でっかい彩季"
				css={css`
					position: absolute;
					bottom: 0;
					right: 0;
					width: 80vmin;
					opacity: 0;
					image-rendering: pixelated;
					animation-delay: 500ms;
					animation-name: aki-signal;
					animation-duration: 70ms;
					animation-fill-mode: forwards;
					animation-iteration-count: 8;
					animation-timing-function: linear;
				`}
			/>
		</div>
	);
}
