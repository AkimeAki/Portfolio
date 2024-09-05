"use client";

import { useEffect, useRef, useState } from "react";
import { css } from "@kuma-ui/core";

const isTouchDevice = (): boolean => {
	if (typeof window !== "undefined") {
		return (
			"ontouchstart" in window || navigator.maxTouchPoints > 0 || window.matchMedia("(pointer:coarse)").matches
		);
	} else {
		return false;
	}
};

export default function () {
	const element = useRef<HTMLDivElement | null>(null);
	const [isTouch, setIsTouch] = useState<boolean>(isTouchDevice());

	useEffect(() => {
		const touched = (): void => {
			setIsTouch(true);
		};

		const move = (e: PointerEvent): void => {
			if (e.pointerType === "mouse") {
				setIsTouch(false);
			}

			if (e.pointerType === "touch" || e.pointerType === "pen") {
				setIsTouch(true);
			}
		};

		window.addEventListener("touchstart", touched, false);
		window.addEventListener("pointermove", move, false);

		return () => {
			window.removeEventListener("touchstart", touched);
			window.removeEventListener("pointermove", move);
		};
	}, []);

	useEffect(() => {
		let x = 0;
		let y = 0;
		let oldX = 0;
		let oldY = 0;
		let xDiff: "+" | "-" = "+";
		let yDiff: "+" | "-" = "+";

		const mousemove = (e: MouseEvent) => {
			oldX = x;
			oldY = y;
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
						element.current.style.transitionTimingFunction = "linear";
					}

					if (document.body.dataset.tick === "7891011") {
						element.current.style.transitionDuration = "200ms";
						element.current.style.transitionProperty = "top, left";
						element.current.style.transitionTimingFunction = "linear";

						if (x > oldX) {
							element.current.style.left = `${x + 100}px`;
							xDiff = "+";
						} else if (x < oldX) {
							element.current.style.left = `${x - 144}px`;
							xDiff = "-";
						} else {
							if (xDiff === "+") {
								element.current.style.left = `${x + 100}px`;
							}

							if (xDiff === "-") {
								element.current.style.left = `${x - 144}px`;
							}
						}

						if (y > oldY) {
							element.current.style.top = `${y + 100}px`;
							yDiff = "+";
						} else if (y < oldY) {
							element.current.style.top = `${y - 144}px`;
							yDiff = "-";
						} else {
							if (yDiff === "+") {
								element.current.style.top = `${y + 100}px`;
							}

							if (yDiff === "-") {
								element.current.style.top = `${y - 144}px`;
							}
						}
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
			style={{ display: isTouch ? "none" : "block" }}
			className={css`
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
