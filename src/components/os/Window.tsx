"use client";

import { pinWindowList, isTouch, openAppSortList, minimizeWindowList } from "@/atom";
import { AppData } from "@/libs/app-select";
import { cx } from "@/libs/merge-kuma";
import useWindow from "@/libs/useWindow";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { useEffect, useRef, useState } from "react";

interface Props {
	children: React.ReactNode;
	id: string;
	appData: AppData;
	ready?: boolean;
}

const windowHeaderHeight = 45;

export default function ({ children, id, appData, ready: _ready = true }: Props) {
	const $openAppSortList = useStore(openAppSortList);
	const windowElement = useRef<HTMLDivElement | null>(null);
	const $isTouch = useStore(isTouch);
	const [isMaxWindow, setIsMaxWindow] = useState<boolean>(false);
	const { openWindow, closeWindow, pinWindow, unpinWindow, minimizeWindow } = useWindow();
	const $pinWindowList = useStore(pinWindowList);
	const [windowList, setWindowList] = useState<string[]>([]);
	const $minimizeWindowList = useStore(minimizeWindowList);
	const [previousTouch, setPreviousTouch] = useState<React.Touch | null>(null);
	const [ready, setReady] = useState<boolean>(false);

	useEffect(() => {
		if (_ready) {
			setReady(true);
		}
	}, [_ready]);

	useEffect(() => {
		if ($isTouch && !appData.touchWindow) {
			setIsMaxWindow(true);
		} else {
			setIsMaxWindow(false);
		}
	}, [$isTouch]);

	useEffect(() => {
		const nonpinWindowList = $openAppSortList.filter((id) => {
			return !$pinWindowList.includes(id);
		});

		const pinWindowList = $openAppSortList.filter((id) => {
			return $pinWindowList.includes(id);
		});

		setWindowList([...nonpinWindowList, ...pinWindowList]);
	}, [$openAppSortList, $pinWindowList]);

	useEffect(() => {
		if (appData.defaultPin) {
			pinWindow(id);
		}
	}, []);

	useEffect(() => {
		if (windowElement.current !== null && ready) {
			let width = 0;
			let height = 0;

			if (appData.size !== undefined) {
				width = appData.size.width;
				height = appData.size.height + windowHeaderHeight;

				if (appData.spSize !== undefined && window.matchMedia("(max-width: 720px)").matches) {
					width = appData.spSize.width;
					height = appData.spSize.height + windowHeaderHeight;
				}
			} else {
				width = Math.min(window.innerWidth * 0.9, 1000);
				height = Math.min(window.innerHeight * 0.9 - 70, 700);
			}

			let top: number | undefined = (window.innerHeight - 70 - height) / 2;
			let left: number | undefined = (window.innerWidth - width) / 2;
			let bottom: number | undefined = undefined;
			let right: number | undefined = undefined;

			if (appData.defaultPosition !== undefined) {
				top = appData.defaultPosition.top;
				left = appData.defaultPosition.left;
				bottom = appData.defaultPosition.bottom;
				right = appData.defaultPosition.right;
			} else {
				const appWindows = document.querySelectorAll<HTMLDivElement>("[data-app-id]");
				let i = 0;
				for (;;) {
					const appWindow = Array.from(appWindows)[i];
					if (appWindow.dataset.appId !== id) {
						const otherWindowTop = Number(appWindow.style.top.replace("px", ""));
						const otherWindowLeft = Number(appWindow.style.left.replace("px", ""));
						if (Math.abs(otherWindowTop - (top ?? 0)) < 30) {
							top += 32;
							i = 0;
							continue;
						}

						if (Math.abs(otherWindowLeft - (left ?? 0)) < 30) {
							left += 32;
							i = 0;
							continue;
						}
					}

					i++;

					if (i >= Array.from(appWindows).length) {
						break;
					}
				}
			}

			windowElement.current.style.width = `${width}px`;
			windowElement.current.style.height = `${height}px`;
			windowElement.current.style.top = top === undefined ? "auto" : `${top}px`;
			windowElement.current.style.left = left === undefined ? "auto" : `${left}px`;
			windowElement.current.style.bottom = bottom === undefined ? "auto" : `${bottom}px`;
			windowElement.current.style.right = right === undefined ? "auto" : `${right}px`;
		}
	}, [ready]);

	return (
		<div
			ref={windowElement}
			onMouseDown={() => {
				const list = openAppSortList.get();
				if (list[list.length - 1] !== id) {
					openWindow(id);
				}
			}}
			data-app-id={id}
			style={{ zIndex: windowList.indexOf(id) }}
			className={cx(
				css`
					position: absolute;
					top: 0;
					left: 0;
					transform: scale(0);
					animation-iteration-count: 1;
					animation-duration: 200ms;
					animation-fill-mode: forwards;
					transition-duration: 400ms;
					transition-property: translate, scale, opacity;
					animation-timing-function: steps(5, start);
					transition-timing-function: steps(10, start);

					@keyframes view-window {
						0% {
							transform: scale(0);
						}

						100% {
							transform: scale(1);
						}
					}
				`,
				ready &&
					css`
						animation-name: view-window;
					`,
				isMaxWindow &&
					css`
						top: 0 !important;
						left: 0 !important;
						width: 100% !important;
						height: calc(100% - 70px) !important;

						@media (max-width: 720px) {
							top: 26px !important;
							height: calc(100% - 96px) !important;
						}
					`,
				$minimizeWindowList.includes(id) &&
					css`
						translate: 0 100vh;
						scale: 0;
						user-select: none !important;
						pointer-events: none !important;
						opacity: 0;

						* {
							user-select: none !important;
							pointer-events: none !important;
						}
					`
			)}
		>
			<div
				className={cx(
					css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;

						border: 5px solid #75182c;

						animation-duration: 0s;
						animation-fill-mode: forwards;
						animation-iteration-count: 1;
						animation-delay: 400ms;

						@keyframes hide-window-frame {
							100% {
								display: none;
							}
						}
					`,
					ready &&
						css`
							animation-name: hide-window-frame;
						`
				)}
			>
				<div
					className={cx(
						css`
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;

							background-color: #ad2b46;
							opacity: 0;

							animation-duration: 150ms;
							animation-fill-mode: forwards;
							animation-iteration-count: 8;
							animation-delay: 50ms;

							@keyframes view-window-frame-bg {
								100% {
									opacity: 0.1;
								}
							}
						`,
						ready &&
							css`
								animation-name: view-window-frame-bg;
							`
					)}
				/>
			</div>
			{/*
				MARK: ↓↓↓ リサイズエリア ↓↓↓
			*/}
			<div
				className={cx(
					css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;

						& > div {
							position: absolute;
							z-index: 1;
							pointer-events: all;
						}
					`,
					(isMaxWindow || !appData.resize) &&
						css`
							display: none;
						`
				)}
			>
				<div
					onPointerMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							(document.body.dataset.browserType !== "firefox" ||
								(document.body.dataset.browserType === "firefox" && !$isTouch)) &&
							e.isPrimary
						) {
							const target = e.target as HTMLDivElement;

							if (e.buttons === 1 && windowElement.current !== null && !isMaxWindow) {
								windowElement.current.style.top = windowElement.current.offsetTop + e.movementY + "px";
								windowElement.current.style.height =
									windowElement.current.offsetHeight - e.movementY + "px";
								target.draggable = false;
								target.setPointerCapture(e.pointerId);
							}
						}
					}}
					onTouchMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							document.body.dataset.browserType === "firefox" &&
							$isTouch
						) {
							const touch = e.touches[0];

							if (windowElement.current !== null && !isMaxWindow && previousTouch !== null) {
								windowElement.current.style.top =
									windowElement.current.offsetTop + (touch.pageY - previousTouch.pageY) + "px";
								windowElement.current.style.height =
									windowElement.current.offsetHeight - (touch.pageY - previousTouch.pageY) + "px";
								windowElement.current.draggable = false;
							}

							setPreviousTouch(touch);
						}
					}}
					onPointerDown={(e) => {
						document.body.dataset.dragging = "true";
						const target = e.target as HTMLDivElement;
						target.setPointerCapture(e.pointerId);
					}}
					onPointerUp={() => {
						document.body.dataset.dragging = "";
						setPreviousTouch(null);
					}}
					className={css`
						top: -5px;
						left: 0;
						width: 100%;
						height: 15px;
						cursor: ns-resize;
					`}
				/>
				<div
					onPointerMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							(document.body.dataset.browserType !== "firefox" ||
								(document.body.dataset.browserType === "firefox" && !$isTouch)) &&
							e.isPrimary
						) {
							const target = e.target as HTMLDivElement;

							if (e.buttons === 1 && windowElement.current !== null && !isMaxWindow) {
								windowElement.current.style.height =
									windowElement.current.offsetHeight + e.movementY + "px";
								target.draggable = false;
								target.setPointerCapture(e.pointerId);
							}
						}
					}}
					onTouchMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							document.body.dataset.browserType === "firefox" &&
							$isTouch
						) {
							const touch = e.touches[0];

							if (windowElement.current !== null && !isMaxWindow && previousTouch !== null) {
								windowElement.current.style.height =
									windowElement.current.offsetHeight + (touch.pageY - previousTouch.pageY) + "px";
								windowElement.current.draggable = false;
							}

							setPreviousTouch(touch);
						}
					}}
					onPointerDown={(e) => {
						document.body.dataset.dragging = "true";
						const target = e.target as HTMLDivElement;
						target.setPointerCapture(e.pointerId);
					}}
					onPointerUp={() => {
						document.body.dataset.dragging = "";
						setPreviousTouch(null);
					}}
					className={css`
						bottom: -5px;
						left: 0;
						width: 100%;
						height: 15px;
						cursor: ns-resize;
					`}
				/>
				<div
					onPointerMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							(document.body.dataset.browserType !== "firefox" ||
								(document.body.dataset.browserType === "firefox" && !$isTouch)) &&
							e.isPrimary
						) {
							const target = e.target as HTMLDivElement;

							if (e.buttons === 1 && windowElement.current !== null && !isMaxWindow) {
								windowElement.current.style.left =
									windowElement.current.offsetLeft + e.movementX + "px";
								windowElement.current.style.width =
									windowElement.current.offsetWidth - e.movementX + "px";
								target.draggable = false;
								target.setPointerCapture(e.pointerId);
							}
						}
					}}
					onTouchMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							document.body.dataset.browserType === "firefox" &&
							$isTouch
						) {
							const touch = e.touches[0];

							if (windowElement.current !== null && !isMaxWindow && previousTouch !== null) {
								windowElement.current.style.left =
									windowElement.current.offsetLeft + (touch.pageX - previousTouch.pageX) + "px";
								windowElement.current.style.width =
									windowElement.current.offsetWidth - (touch.pageX - previousTouch.pageX) + "px";
								windowElement.current.draggable = false;
							}

							setPreviousTouch(touch);
						}
					}}
					onPointerDown={(e) => {
						document.body.dataset.dragging = "true";
						const target = e.target as HTMLDivElement;
						target.setPointerCapture(e.pointerId);
					}}
					onPointerUp={() => {
						document.body.dataset.dragging = "";
						setPreviousTouch(null);
					}}
					className={css`
						top: 0;
						left: -5px;
						width: 15px;
						height: 100%;
						cursor: ew-resize;
					`}
				/>
				<div
					onPointerMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							(document.body.dataset.browserType !== "firefox" ||
								(document.body.dataset.browserType === "firefox" && !$isTouch)) &&
							e.isPrimary
						) {
							const target = e.target as HTMLDivElement;

							if (e.buttons === 1 && windowElement.current !== null && !isMaxWindow) {
								windowElement.current.style.width =
									windowElement.current.offsetWidth + e.movementX + "px";
								target.draggable = false;
								target.setPointerCapture(e.pointerId);
							}
						}
					}}
					onTouchMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							document.body.dataset.browserType === "firefox" &&
							$isTouch
						) {
							const touch = e.touches[0];

							if (windowElement.current !== null && !isMaxWindow && previousTouch !== null) {
								windowElement.current.style.width =
									windowElement.current.offsetWidth + (touch.pageX - previousTouch.pageX) + "px";
								windowElement.current.draggable = false;
							}

							setPreviousTouch(touch);
						}
					}}
					onPointerDown={(e) => {
						document.body.dataset.dragging = "true";
						const target = e.target as HTMLDivElement;
						target.setPointerCapture(e.pointerId);
					}}
					onPointerUp={() => {
						document.body.dataset.dragging = "";
						setPreviousTouch(null);
					}}
					className={css`
						top: 0;
						right: -5px;
						width: 15px;
						height: 100%;
						cursor: ew-resize;
					`}
				/>
				<div
					onPointerMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							(document.body.dataset.browserType !== "firefox" ||
								(document.body.dataset.browserType === "firefox" && !$isTouch)) &&
							e.isPrimary
						) {
							const target = e.target as HTMLDivElement;

							if (e.buttons === 1 && windowElement.current !== null && !isMaxWindow) {
								windowElement.current.style.top = windowElement.current.offsetTop + e.movementY + "px";
								windowElement.current.style.width =
									windowElement.current.offsetWidth + e.movementX + "px";
								windowElement.current.style.height =
									windowElement.current.offsetHeight - e.movementY + "px";
								target.draggable = false;
								target.setPointerCapture(e.pointerId);
							}
						}
					}}
					onTouchMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							document.body.dataset.browserType === "firefox" &&
							$isTouch
						) {
							const touch = e.touches[0];

							if (windowElement.current !== null && !isMaxWindow && previousTouch !== null) {
								windowElement.current.style.top =
									windowElement.current.offsetTop + (touch.pageY - previousTouch.pageY) + "px";
								windowElement.current.style.width =
									windowElement.current.offsetWidth + (touch.pageX - previousTouch.pageX) + "px";
								windowElement.current.style.height =
									windowElement.current.offsetHeight - (touch.pageY - previousTouch.pageY) + "px";
								windowElement.current.draggable = false;
							}

							setPreviousTouch(touch);
						}
					}}
					onPointerDown={(e) => {
						document.body.dataset.dragging = "true";
						const target = e.target as HTMLDivElement;
						target.setPointerCapture(e.pointerId);
					}}
					onPointerUp={() => {
						document.body.dataset.dragging = "";
						setPreviousTouch(null);
					}}
					className={css`
						top: -5px;
						right: -5px;
						width: 20px;
						height: 20px;
						cursor: nesw-resize;
					`}
				/>
				<div
					onPointerMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							(document.body.dataset.browserType !== "firefox" ||
								(document.body.dataset.browserType === "firefox" && !$isTouch)) &&
							e.isPrimary
						) {
							const target = e.target as HTMLDivElement;

							if (e.buttons === 1 && windowElement.current !== null && !isMaxWindow) {
								windowElement.current.style.top = windowElement.current.offsetTop + e.movementY + "px";
								windowElement.current.style.height =
									windowElement.current.offsetHeight - e.movementY + "px";
								windowElement.current.style.left =
									windowElement.current.offsetLeft + e.movementX + "px";
								windowElement.current.style.width =
									windowElement.current.offsetWidth - e.movementX + "px";
								target.draggable = false;
								target.setPointerCapture(e.pointerId);
							}
						}
					}}
					onTouchMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							document.body.dataset.browserType === "firefox" &&
							$isTouch
						) {
							const touch = e.touches[0];

							if (windowElement.current !== null && !isMaxWindow && previousTouch !== null) {
								windowElement.current.style.top =
									windowElement.current.offsetTop + (touch.pageY - previousTouch.pageY) + "px";
								windowElement.current.style.height =
									windowElement.current.offsetHeight - (touch.pageY - previousTouch.pageY) + "px";
								windowElement.current.style.left =
									windowElement.current.offsetLeft + (touch.pageX - previousTouch.pageX) + "px";
								windowElement.current.style.width =
									windowElement.current.offsetWidth - (touch.pageX - previousTouch.pageX) + "px";
								windowElement.current.draggable = false;
							}

							setPreviousTouch(touch);
						}
					}}
					onPointerDown={(e) => {
						document.body.dataset.dragging = "true";
						const target = e.target as HTMLDivElement;
						target.setPointerCapture(e.pointerId);
					}}
					onPointerUp={() => {
						document.body.dataset.dragging = "";
						setPreviousTouch(null);
					}}
					className={css`
						top: -5px;
						left: -5px;
						width: 20px;
						height: 20px;
						cursor: nwse-resize;
					`}
				/>
				<div
					onPointerMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							(document.body.dataset.browserType !== "firefox" ||
								(document.body.dataset.browserType === "firefox" && !$isTouch)) &&
							e.isPrimary
						) {
							const target = e.target as HTMLDivElement;

							if (e.buttons === 1 && windowElement.current !== null && !isMaxWindow) {
								windowElement.current.style.height =
									windowElement.current.offsetHeight + e.movementY + "px";
								windowElement.current.style.width =
									windowElement.current.offsetWidth + e.movementX + "px";
								target.draggable = false;
								target.setPointerCapture(e.pointerId);
							}
						}
					}}
					onTouchMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							document.body.dataset.browserType === "firefox" &&
							$isTouch
						) {
							const touch = e.touches[0];

							if (windowElement.current !== null && !isMaxWindow && previousTouch !== null) {
								windowElement.current.style.height =
									windowElement.current.offsetHeight + (touch.pageY - previousTouch.pageY) + "px";
								windowElement.current.style.width =
									windowElement.current.offsetWidth + (touch.pageX - previousTouch.pageX) + "px";
								windowElement.current.draggable = false;
							}

							setPreviousTouch(touch);
						}
					}}
					onPointerDown={(e) => {
						document.body.dataset.dragging = "true";
						const target = e.target as HTMLDivElement;
						target.setPointerCapture(e.pointerId);
					}}
					onPointerUp={() => {
						document.body.dataset.dragging = "";
						setPreviousTouch(null);
					}}
					className={css`
						bottom: -5px;
						right: -5px;
						width: 20px;
						height: 20px;
						cursor: nwse-resize;
					`}
				/>
				<div
					onPointerMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							(document.body.dataset.browserType !== "firefox" ||
								(document.body.dataset.browserType === "firefox" && !$isTouch)) &&
							e.isPrimary
						) {
							const target = e.target as HTMLDivElement;

							if (e.buttons === 1 && windowElement.current !== null && !isMaxWindow) {
								windowElement.current.style.height =
									windowElement.current.offsetHeight + e.movementY + "px";
								windowElement.current.style.left =
									windowElement.current.offsetLeft + e.movementX + "px";
								windowElement.current.style.width =
									windowElement.current.offsetWidth - e.movementX + "px";
								target.draggable = false;
								target.setPointerCapture(e.pointerId);
							}
						}
					}}
					onTouchMove={(e) => {
						if (
							document.body.dataset.dragging === "true" &&
							document.body.dataset.browserType === "firefox" &&
							$isTouch
						) {
							const touch = e.touches[0];

							if (windowElement.current !== null && !isMaxWindow && previousTouch !== null) {
								windowElement.current.style.height =
									windowElement.current.offsetHeight + (touch.pageY - previousTouch.pageY) + "px";
								windowElement.current.style.left =
									windowElement.current.offsetLeft + (touch.pageX - previousTouch.pageX) + "px";
								windowElement.current.style.width =
									windowElement.current.offsetWidth - (touch.pageX - previousTouch.pageX) + "px";
								windowElement.current.draggable = false;
							}

							setPreviousTouch(touch);
						}
					}}
					onPointerDown={(e) => {
						document.body.dataset.dragging = "true";
						const target = e.target as HTMLDivElement;
						target.setPointerCapture(e.pointerId);
					}}
					onPointerUp={() => {
						document.body.dataset.dragging = "";
						setPreviousTouch(null);
					}}
					className={css`
						bottom: -5px;
						left: -5px;
						width: 20px;
						height: 20px;
						cursor: nesw-resize;
					`}
				/>
			</div>
			{/*
				MARK: ↑↑↑ リサイズエリア ↑↑↑
			*/}
			<div
				className={cx(
					css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						border-left: 4px solid #060303;
						border-right: 4px solid #060303;
						border-bottom: 4px solid #060303;
						user-select: text;
						pointer-events: auto;
						box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.36);
						overflow: hidden;

						animation-duration: 0s;
						animation-fill-mode: forwards;
						animation-iteration-count: 1;
						animation-delay: 250ms;
						opacity: 0;

						@keyframes view-window-content {
							100% {
								opacity: 1;
							}
						}
					`,
					ready &&
						css`
							animation-name: view-window-content;
						`
				)}
			>
				<div
					className={css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background-color: #363636;
						opacity: 0.95;
					`}
				/>
				<div
					className={css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: column;
					`}
				>
					<div
						onPointerMove={(e) => {
							if (
								document.body.dataset.dragging === "true" &&
								(document.body.dataset.browserType !== "firefox" ||
									(document.body.dataset.browserType === "firefox" && !$isTouch)) &&
								e.isPrimary
							) {
								const target = e.target as HTMLDivElement;

								if (e.buttons === 1 && windowElement.current !== null && !isMaxWindow) {
									windowElement.current.style.top =
										windowElement.current.offsetTop + e.movementY + "px";
									windowElement.current.style.left =
										windowElement.current.offsetLeft + e.movementX + "px";
									windowElement.current.draggable = false;
									target.setPointerCapture(e.pointerId);
								}
							}
						}}
						onTouchMove={(e) => {
							if (
								document.body.dataset.dragging === "true" &&
								document.body.dataset.browserType === "firefox" &&
								$isTouch
							) {
								const touch = e.touches[0];

								if (windowElement.current !== null && !isMaxWindow && previousTouch !== null) {
									windowElement.current.style.top =
										windowElement.current.offsetTop + (touch.pageY - previousTouch.pageY) + "px";
									windowElement.current.style.left =
										windowElement.current.offsetLeft + (touch.pageX - previousTouch.pageX) + "px";
									windowElement.current.draggable = false;
								}

								setPreviousTouch(touch);
							}
						}}
						onPointerDown={() => {
							document.body.dataset.dragging = "true";
						}}
						onPointerUp={() => {
							document.body.dataset.dragging = "";
							setPreviousTouch(null);
						}}
						style={{ height: windowHeaderHeight + "px" }}
						className={css`
							position: relative;
							background-color: #060303;
							display: flex;
							justify-content: space-between;
							user-select: none;
						`}
					>
						<div
							className={css`
								display: flex;
								height: 100%;
								align-items: center;
								margin-left: 10px;
							`}
						>
							<img
								src={appData.image.path}
								className={cx(
									css`
										height: 100%;
										aspect-ratio: 1/1;
										padding: 7px;
									`,
									appData.image.isPixel &&
										css`
											image-rendering: pixelated;
										`
								)}
								alt={appData.title}
							/>
							<h2
								className={css`
									line-height: 1;
									font-size: 18px;
									color: #e73e6b;
									margin-bottom: 5px;
									white-space: nowrap;

									body[data-os="android"] & {
										margin-bottom: 0;
									}
								`}
							>
								{appData.title}
							</h2>
						</div>
						<div
							className={css`
								display: flex;
								height: 100%;
								gap: 10px;
								align-items: center;
								margin-right: 10px;
							`}
						>
							<div
								onClick={() => {
									minimizeWindow(id);
								}}
								style={{ display: $isTouch ? "none" : "flex" }}
								className={css`
									align-items: center;
									justify-content: center;
									position: relative;
									width: 27px;
									height: 27px;
									border-radius: 50%;

									&:before {
										display: block;
										content: "";
										width: 13px;
										height: 13px;
										border-bottom-color: #91797d;
										border-bottom-style: solid;
										border-bottom-width: 2px;
									}

									&:hover {
										background-color: #91797d;

										&:before {
											border-color: white;
										}
									}
								`}
							/>
							{appData.viewPinButton && (
								<div
									onClick={() => {
										if (!$isTouch) {
											if (!$pinWindowList.includes(id)) {
												pinWindow(id);
											} else {
												unpinWindow(id);
											}
										}
									}}
									style={{ display: $isTouch ? "none" : "flex" }}
									className={css`
										position: relative;
										width: 27px;
										height: 27px;
										border-radius: 50%;

										&:before {
											position: absolute;
											top: 6px;
											left: 50%;
											transform: translateX(-50%);
											display: block;
											content: "";
											width: 8px;
											height: 8px;
											background-color: #91797d;
										}

										&:after {
											position: absolute;
											top: 13px;
											left: 50%;
											transform: translateX(-50%);
											display: block;
											content: "";
											width: 16px;
											height: 5px;
											background-color: #91797d;
										}

										&:hover {
											background-color: #91797d;

											&:before,
											&:after,
											& > div {
												background-color: white;
											}

											.slash-pin {
												width: 3px;
												border: none;
											}
										}
									`}
								>
									<div
										className={css`
											position: absolute;
											top: 14px;
											left: 50%;
											transform: translateX(-50%);
											display: block;
											width: 3px;
											height: 9px;
											background-color: #91797d;
										`}
									/>
									{!$pinWindowList.includes(id) && (
										<div
											className={[
												css`
													position: absolute;
													top: calc(50% + 1px);
													left: 50%;
													transform: translate(-50%, -50%) rotate(-45deg);
													display: block;
													width: 6px;
													height: 24px;
													border: 2px solid #060303;
													z-index: 1;
												`,
												"slash-pin"
											].join(" ")}
										/>
									)}
								</div>
							)}
							{appData.resize && (
								<div
									onClick={() => {
										if (!$isTouch) {
											setIsMaxWindow(!isMaxWindow);
										}
									}}
									style={{ display: $isTouch ? "none" : "flex" }}
									className={[
										css`
											align-items: center;
											justify-content: center;
											position: relative;
											width: 27px;
											height: 27px;
											border-radius: 50%;

											&:hover {
												background-color: #91797d;

												&:before,
												&:after {
													border-color: white;
												}
											}
										`,
										isMaxWindow
											? css`
													&:before,
													&:after {
														display: block;
														content: "";
														border-color: #91797d;
														border-style: solid;
														border-width: 2px;
													}

													&:before {
														transform: translate(2px, 2px);
														width: 8px;
														height: 8px;
													}

													&:after {
														transform: translate(-3px, -3px);
														width: 5px;
														height: 5px;
													}
												`
											: css`
													&:before {
														display: block;
														content: "";
														width: 11px;
														height: 11px;
														border-color: #91797d;
														border-style: solid;
														border-width: 2px;
													}
												`
									].join(" ")}
								/>
							)}
							<div
								onClick={() => {
									// 閉じるボタンを押したときの処理
									closeWindow(id);
								}}
								className={css`
									position: relative;
									width: 27px;
									height: 27px;
									border-radius: 50%;

									&:hover {
										background-color: #c82746;

										&:before,
										&:after {
											background-color: white;
										}
									}

									&:before,
									&:after {
										position: absolute;
										left: 5px;
										display: block;
										content: "";
										width: 17px;
										height: 3px;
										background-color: #91797d;
									}

									&:before {
										top: 12px;
										transform: rotate(45deg);
									}

									&:after {
										bottom: 12px;
										transform: rotate(-45deg);
									}
								`}
							/>
						</div>
					</div>
					<div
						className={css`
							flex: 1;
							overflow: auto;
							container-type: inline-size;

							@layer base {
								body & {
									* {
										color: #cbcbcb;
									}
								}
							}
						`}
					>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
