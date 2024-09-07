"use client";

import { useEffect, useRef } from "react";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { isTouch } from "@/atom";

export default function () {
	const targetAreaElement = useRef<HTMLDivElement | null>(null);
	const selectAreaElement = useRef<HTMLDivElement | null>(null);
	const $isTouch = useStore(isTouch);

	useEffect(() => {
		if (targetAreaElement.current !== null) {
			if ($isTouch) {
				targetAreaElement.current.style.display = "none";
			}

			if (!$isTouch) {
				targetAreaElement.current.style.display = "block";
			}
		}
	}, [$isTouch]);

	const setSelectArea = (top: string, left: string, bottom: string, right: string, width: number, height: number) => {
		if (selectAreaElement.current !== null) {
			selectAreaElement.current.style.top = top;
			selectAreaElement.current.style.left = left;
			selectAreaElement.current.style.bottom = bottom;
			selectAreaElement.current.style.right = right;

			selectAreaElement.current.style.width = width + "px";
			selectAreaElement.current.style.height = height + "px";
		}
	};

	useEffect(() => {
		let startX = -10;
		let startY = -10;

		const move = (e: PointerEvent) => {
			if (
				e.buttons === 1 &&
				selectAreaElement.current !== null &&
				targetAreaElement.current !== null &&
				!$isTouch
			) {
				if (e.offsetX - startX > 0 && e.offsetY - startY > 0) {
					setSelectArea(
						startY + "px",
						startX + "px",
						"auto",
						"auto",
						Math.abs(e.offsetX - startX),
						Math.abs(e.offsetY - startY)
					);
				}

				if (e.offsetX - startX <= 0 && e.offsetY - startY > 0) {
					setSelectArea(
						startY + "px",
						"auto",
						"auto",
						targetAreaElement.current.offsetWidth - startX + "px",
						Math.abs(e.offsetX - startX),
						Math.abs(e.offsetY - startY)
					);
				}

				if (e.offsetX - startX <= 0 && e.offsetY - startY <= 0) {
					setSelectArea(
						"auto",
						"auto",
						targetAreaElement.current.offsetHeight - startY + "px",
						targetAreaElement.current.offsetWidth - startX + "px",
						Math.abs(e.offsetX - startX),
						Math.abs(e.offsetY - startY)
					);
				}

				if (e.offsetX - startX > 0 && e.offsetY - startY <= 0) {
					setSelectArea(
						"auto",
						startX + "px",
						targetAreaElement.current.offsetHeight - startY + "px",
						"auto",
						Math.abs(e.offsetX - startX),
						Math.abs(e.offsetY - startY)
					);
				}
				selectAreaElement.current.draggable = false;
				targetAreaElement.current.setPointerCapture(e.pointerId);
			}
		};

		const mousedown = (e: MouseEvent) => {
			startX = e.offsetX;
			startY = e.offsetY;
			if (selectAreaElement.current !== null && !$isTouch) {
				selectAreaElement.current.style.display = "block";
			}
		};

		const mouseup = () => {
			if (selectAreaElement.current !== null && !$isTouch) {
				startX = -10;
				startY = -10;
				setSelectArea(startY + "px", startX + "px", "auto", "auto", 0, 0);
				selectAreaElement.current.style.display = "none";
			}
		};

		if (targetAreaElement.current !== null) {
			targetAreaElement.current.addEventListener("pointermove", move);
			targetAreaElement.current.addEventListener("mousedown", mousedown);
			targetAreaElement.current.addEventListener("mouseup", mouseup);
		}

		return () => {
			if (targetAreaElement.current !== null) {
				targetAreaElement.current.removeEventListener("pointermove", move);
				targetAreaElement.current.removeEventListener("mousedown", mousedown);
				targetAreaElement.current.removeEventListener("mouseup", mouseup);
			}
		};
	}, [$isTouch]);

	return (
		<div
			ref={targetAreaElement}
			className={css`
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			`}
		>
			<div
				ref={selectAreaElement}
				className={css`
					top: -10px;
					left: -10px;
					position: absolute;
					border-style: solid;
					border-width: 2px;
					border-color: #ec405b;
					user-select: none;
					pointer-events: none;
					background-color: rgba(237, 248, 175, 0.144);
				`}
			/>
		</div>
	);
}
