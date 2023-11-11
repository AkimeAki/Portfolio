/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { SerializedStyles } from "@emotion/react";

export const BackImageStyle = (url: string, x: number, y: number, rotate: number): SerializedStyles => {
	return css`
		position: relative;

		&:after {
			position: absolute;
			content: "";
			background-color: #f99677;
			width: 100px;
			height: 100px;
			display: block;
			top: 50%;
			left: 50%;
			z-index: -1;
			mask-image: url(${url});
			mask-size: contain;
			mask-repeat: no-repeat;
			mask-position: center;
			transform: translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotate}deg);
			user-select: none;
			pointer-events: none;

			@media (prefers-color-scheme: dark) {
				background-color: #2c472b;
			}
		}
	`;
};
