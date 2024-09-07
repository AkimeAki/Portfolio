"use client";

import { useEffect, useRef } from "react";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { isTouch } from "@/atom";

export default function () {
	const element = useRef<HTMLDivElement | null>(null);
	const $isTouch = useStore(isTouch);

	useEffect(() => {
		if (element.current !== null) {
			if ($isTouch) {
				element.current.style.display = "none";
			}

			if (!$isTouch) {
				element.current.style.display = "block";
			}
		}
	}, [$isTouch]);

	useEffect(() => {
		let x = 0;
		let y = 0;

		const mousemove = (e: MouseEvent) => {
			x = e.clientX;
			y = e.clientY;

			if (element.current !== null) {
				element.current.style.animationName = "cursor-signal-view";
			}
		};

		const mouseout = () => {
			if (element.current !== null) {
				element.current.style.animationName = "cursor-signal-delete";
			}
		};

		window.addEventListener("mousemove", mousemove);
		document.body.addEventListener("mouseleave", mouseout);

		const move = () => {
			if (element.current !== null) {
				element.current.style.transitionDuration = "";
				element.current.style.transitionProperty = "";
				element.current.style.transitionTimingFunction = "";

				if (document.body.dataset.tickTockClock === "true") {
					if (document.body.dataset.tick === "12345") {
						element.current.style.top = `${y}px`;
						element.current.style.left = `${x}px`;
						element.current.style.transitionDuration = "200ms";
						element.current.style.transitionProperty = "top, left";
						element.current.style.transitionTimingFunction = "ease-out";
					}

					if (document.body.dataset.tick === "7891011") {
						element.current.style.top = `${y}px`;
						element.current.style.left = `${x}px`;
						element.current.style.transitionDuration = "100ms";
						element.current.style.transitionProperty = "top, left";
						element.current.style.transitionTimingFunction = "ease-in-out";
					}

					if (document.body.dataset.tick === "12") {
						element.current.style.top = `${y}px`;
						element.current.style.left = `${x}px`;
						element.current.style.transitionDuration = "200ms";
						element.current.style.transitionProperty = "top, left";
						element.current.style.transitionTimingFunction = "steps(2, end)";
					}
				} else {
					element.current.style.top = `${y}px`;
					element.current.style.left = `${x}px`;
				}
			}

			requestAnimationFrame(move);
		};

		move();

		return () => {
			window.removeEventListener("mousemove", mousemove);
			document.body.removeEventListener("mouseleave", mouseout);
		};
	}, []);

	return (
		<div
			ref={element}
			className={css`
				display: none;
				position: fixed;
				z-index: calc(infinity);
				width: 44px;
				user-select: none;
				pointer-events: none;
				opacity: 0;

				animation-duration: 70ms;
				animation-fill-mode: forwards;
				animation-iteration-count: 5;
				animation-timing-function: linear;

				@keyframes cursor-signal-view {
					100% {
						opacity: 1;
					}
				}

				@keyframes cursor-signal-delete {
					0% {
						opacity: 1;
					}

					100% {
						opacity: 0;
					}
				}
			`}
		>
			<img
				src="/cursor.png"
				className={css`
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					image-rendering: pixelated;
					filter: brightness(110%) blur(3px);
				`}
			/>
			<img
				src="/cursor.png"
				className={css`
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					image-rendering: pixelated;
				`}
			/>
		</div>
	);
}
