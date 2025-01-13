"use client";

import { osLoading } from "@/atom";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";

interface Props {
	opacity: number;
	top?: number;
	left?: number;
	right?: number;
	bottom?: number;
	width: number;
	height: number;
}

export default function ({ opacity, top, left, right, bottom, width, height }: Props) {
	const $osLoading = useStore(osLoading);
	const [animationDelay, setAnimationDelay] = useState<number>(1200);

	useEffect(() => {
		const random = Math.floor(Math.random() * (1800 - 1200) + 1200);
		setAnimationDelay(random);
	}, [$osLoading]);

	return (
		<div
			style={{
				filter: `opacity(${opacity})`,
				top,
				left,
				right,
				bottom,
				width,
				height,
				animationName: $osLoading ? "" : "pixelblock-signal",
				animationDelay: `${animationDelay}ms`
			}}
			className={css`
				position: absolute;
				background-color: #ad2b46;
				border: 2px solid #75182c;
				user-select: none;
				pointer-events: auto;
				animation-duration: 70ms;
				animation-fill-mode: forwards;
				animation-iteration-count: 5;
				animation-timing-function: linear;
				opacity: 0;

				@keyframes pixelblock-signal {
					100% {
						opacity: 1;
					}
				}
			`}
			onPointerMove={(e) => {
				const target = e.target as HTMLDivElement;

				if (e.buttons === 1) {
					target.style.top = target.offsetTop + e.movementY + "px";
					target.style.left = target.offsetLeft + e.movementX + "px";
					target.draggable = false;
					target.setPointerCapture(e.pointerId);
				}
			}}
			onPointerDown={(e) => {
				const target = e.target as HTMLDivElement;
				target.style.filter = "opacity(1)";
			}}
			onPointerUp={(e) => {
				const target = e.target as HTMLDivElement;
				target.style.filter = `opacity(${opacity})`;
			}}
		/>
	);
}
