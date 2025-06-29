"use client";

import { css, cx } from "@kuma-ui/core";
import { useEffect, useRef, useState } from "react";

export function TaskbarVolume() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const buttonElement = useRef<HTMLButtonElement>(null);
	const areaElement = useRef<HTMLDivElement>(null);
	const [volume, setVolume] = useState<number>(5);

	useEffect(() => {
		const click = (e: MouseEvent) => {
			if (buttonElement.current !== null && e.target !== null && areaElement.current !== null) {
				const target = e.target as HTMLElement;
				if (!(areaElement.current.contains(target) || buttonElement.current.contains(target))) {
					setIsOpen(false);
				}
			}
		};

		if (isOpen) {
			document.addEventListener("click", click);
		}

		return () => {
			document.removeEventListener("click", click);
		};
	}, [isOpen]);

	useEffect(() => {
		if (buttonElement.current !== null) {
			const image = buttonElement.current.querySelector("img");
			if (image !== null) {
				if (volume === 0) {
					image.src = "/taskbar/speaker-0.png";
				}

				if (volume >= 1) {
					image.src = "/taskbar/speaker-30.png";
				}

				if (volume >= 30) {
					image.src = "/taskbar/speaker-60.png";
				}

				if (volume >= 60) {
					image.src = "/taskbar/speaker-100.png";
				}
			}
		}
	}, [volume]);

	return (
		<div
			className={css`
				position: relative;
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 40px;
				aspect-ratio: 1/1;
			`}
		>
			<div
				ref={areaElement}
				className={cx(
					css`
						position: absolute;
						width: 70px;
						height: 600px;
						bottom: 50px;
						aspect-ratio: 1/1;
						background-color: var(--theme-red);
						border: 2px solid #75182c;
						opacity: 0;
						user-select: none;
						pointer-events: none;
						transform: translateY(calc(100% + 100px));
						transition-duration: 200ms;
						transition-property: transform, opacity;
						transition-timing-function: steps(5, start);
					`,
					isOpen &&
						css`
							opacity: 1;
							user-select: auto;
							pointer-events: all;
							transform: translateY(0);
						`
				)}
			>
				<img
					src="/desktop/barcode.png"
					alt=""
					className={css`
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						width: calc(100% - 30px);
						height: calc(100% - 60px);
						user-select: none;
						pointer-events: none;
						mask-image: url(/desktop/barcode-mask.png);
						mask-position: center;
						mask-size: cover;
						mask-repeat: no-repeat;
						vertical-align: bottom;
					`}
				/>
				<div
					style={{ height: `${100 - volume}%` }}
					className={css`
						position: absolute;
						top: 0;
						left: 50%;
						transform: translateX(-50%);
						width: calc(100% - 20px);
						background-color: var(--theme-red);
						opacity: 0.9;
					`}
				/>
				<button
					type="button"
					style={{ top: `${100 - volume}%` }}
					className={css`
						position: absolute;
						left: 50%;
						transform: translateX(-50%);
						background-color: white;
						border: 2px solid #75182c;
						width: 20px;
						height: 7px;
						cursor: grab;
					`}
					onPointerDown={() => {
						if (areaElement.current !== null) {
							const areaRect = areaElement.current.getBoundingClientRect();
							document.body.dataset.grabbing = "true";
							const onPointerMove = (e: PointerEvent) => {
								const y = e.clientY - areaRect.top;
								let newVolume = 100 - (y / areaRect.height) * 100;
								newVolume = Math.max(0, Math.min(100, newVolume));
								setVolume(newVolume);
							};
							const onPointerUp = () => {
								document.body.dataset.grabbing = "false";
								document.removeEventListener("pointermove", onPointerMove);
								document.removeEventListener("pointerup", onPointerUp);
							};
							document.addEventListener("pointermove", onPointerMove);
							document.addEventListener("pointerup", onPointerUp);
						}
					}}
				/>
			</div>
			<button
				type="button"
				ref={buttonElement}
				onClick={() => {
					setIsOpen((prev) => !prev);
				}}
				className={cx(
					css`
						width: 100%;
						height: 100%;
						cursor: pointer;
						background-color: var(--theme-red);
						background-color: transparent;
						border: 2px solid transparent;

						&:hover {
							border-color: #75182c;
						}
					`,
					isOpen &&
						css`
							border-color: #75182c;
						`
				)}
			>
				<img
					src="/taskbar/speaker-0.png"
					alt="ボリュームアイコン"
					className={css`
						width: 100%;
						height: 100%;
						user-select: none;
						pointer-events: none;
						image-rendering: pixelated;
					`}
					loading="eager"
					data-loading-image
				/>
			</button>
		</div>
	);
}
