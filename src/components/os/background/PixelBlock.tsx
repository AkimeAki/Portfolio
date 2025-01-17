"use client";

import { isTouch, osLoading } from "@/atom";
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
	const $isTouch = useStore(isTouch);
	const [previousTouch, setPreviousTouch] = useState<React.Touch | null>(null);

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

				if (
					document.body.dataset.browser !== "firefox" ||
					(document.body.dataset.browser === "firefox" && !$isTouch)
				) {
					if (e.buttons === 1) {
						target.style.top = target.offsetTop + e.movementY + "px";
						target.style.left = target.offsetLeft + e.movementX + "px";
						target.draggable = false;
						target.setPointerCapture(e.pointerId);
					}
				}
			}}
			onTouchMove={(e) => {
				if (document.body.dataset.browser === "firefox" && $isTouch) {
					const touch = e.touches[0];
					if (previousTouch !== null) {
						const target = touch.target as HTMLDivElement;
						target.style.top = target.offsetTop + (touch.pageY - previousTouch.pageY) + "px";
						target.style.left = target.offsetLeft + (touch.pageX - previousTouch.pageX) + "px";
						target.draggable = false;
					}

					setPreviousTouch(touch);
				}
			}}
			onPointerDown={(e) => {
				const target = e.target as HTMLDivElement;
				target.style.filter = "opacity(1)";
			}}
			onPointerUp={(e) => {
				const target = e.target as HTMLDivElement;
				target.style.filter = `opacity(${opacity})`;
				setPreviousTouch(null);
			}}
		/>
	);
}
