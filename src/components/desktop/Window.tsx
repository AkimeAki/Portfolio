"use client";

import { isTouch } from "@/atom";
import { useWindowManager } from "@/context/WindowManagerContext";
import type { App } from "@/data/app";
import { css, cx } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { type PropsWithChildren, useEffect, useRef, useState } from "react";
import { PinButton } from "@/components/window/PinButton";
import { FullScreenButton } from "@/components/window/FullScreenButton";
import { CloseButton } from "@/components/window/CloseButton";
import { MinimizeButton } from "@/components/window/MinimizeButon";

interface Props {
	id: string;
	appData: App;
	ready?: boolean;
}

const windowHeaderHeightData = 45;
const windowSpHeaderHeightData = 35;

export function Window({ children, id, appData, ready: _ready = true }: PropsWithChildren<Props>) {
	const windowElement = useRef<HTMLDivElement | null>(null);
	const $isTouch = useStore(isTouch);
	const [isMaxWindow, setIsMaxWindow] = useState<boolean>(false);
	const [previousTouch, setPreviousTouch] = useState<React.Touch | null>(null);
	const [ready, setReady] = useState<boolean>(false);
	const [windowHeaderHeight, setWindowHeaderHeight] = useState<number>(windowHeaderHeightData);
	const { state, dispatch } = useWindowManager();

	useEffect(() => {
		if (_ready) {
			setReady(true);
		}
	}, [_ready]);

	useEffect(() => {
		if (
			$isTouch &&
			((appData.window.fullScreen?.isMobile !== undefined && appData.window.fullScreen.isMobile) ||
				appData.window.fullScreen?.isMobile === undefined)
		) {
			setIsMaxWindow(true);
		} else {
			setIsMaxWindow(false);
		}
	}, [$isTouch]);

	useEffect(() => {
		const resize = () => {
			if (window.matchMedia("(max-width: 720px)").matches) {
				setWindowHeaderHeight(windowSpHeaderHeightData);
			} else {
				setWindowHeaderHeight(windowHeaderHeightData);
			}
		};

		resize();
		window.addEventListener("resize", resize);

		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	useEffect(() => {
		if (appData.window.pin?.isPinned) {
			dispatch({ type: "TOGGLE_PIN", payload: { id } });
		}
	}, []);

	useEffect(() => {
		if (windowElement.current !== null && ready) {
			let width = Math.min(window.innerWidth * 0.9, 1000);
			let height = Math.min(window.innerHeight * 0.9 - 70, 700);

			if (appData.window.size !== undefined) {
				if (appData.window.size.width !== undefined) {
					width = appData.window.size.width;
				}

				if (appData.window.size.height !== undefined) {
					height = appData.window.size.height + 4;
				}

				if (appData.window.size.responsive !== undefined) {
					for (const mediaQuery in appData.window.size.responsive) {
						if (window.matchMedia(mediaQuery).matches) {
							if (appData.window.size.responsive[mediaQuery].width !== undefined) {
								width = appData.window.size.responsive[mediaQuery].width;
							}

							if (appData.window.size.responsive[mediaQuery].height !== undefined) {
								height = appData.window.size.responsive[mediaQuery].height + 4;
							}

							break;
						}
					}
				}

				if (window.matchMedia("(max-width: 720px)").matches) {
					height = height + windowSpHeaderHeightData;
				} else {
					height = height + windowHeaderHeightData;
				}
			}

			let top: number | undefined = (window.innerHeight - 70 - height) / 2;
			let left: number | undefined = (window.innerWidth - width) / 2;
			let bottom: number | undefined = undefined;
			let right: number | undefined = undefined;

			if (appData.window.fullScreen?.isFullScreen) {
				setIsMaxWindow(true);
			}

			if (appData.window.position !== undefined) {
				top = appData.window.position.top;
				left = appData.window.position.left;
				bottom = appData.window.position.bottom;
				right = appData.window.position.right;
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

			// topとleftを元にリサイズ時するため、rightとbottomを消してtopとleftを再設定する
			requestAnimationFrame(() => {
				if (windowElement.current !== null) {
					windowElement.current.style.top = `${windowElement.current.offsetTop}px`;
					windowElement.current.style.left = `${windowElement.current.offsetLeft}px`;
					windowElement.current.style.right = "auto";
					windowElement.current.style.bottom = "auto";
				}
			});
		}
	}, [ready]);

	// iframe内のクリックを受け取って処理
	// useEffect(() => {
	// 	const click = (response: MessageEvent) => {
	// 		if (response.data.name === "AkiOSIframeClick" && response.data.value !== undefined) {
	// 			const id = String(response.data.value);
	// 			const list = openedAppSortList.get();
	// 			if (list[list.length - 1] !== id) {
	// 				openWindow(id);
	// 			}
	// 		}
	// 	};

	// 	window.addEventListener("message", click);

	// 	return () => {
	// 		window.removeEventListener("message", click);
	// 	};
	// }, []);

	return (
		<div
			ref={windowElement}
			onMouseDown={() => {
				dispatch({ type: "SELECT", payload: { id } });
			}}
			data-app-id={id}
			style={{ "--z-index": state.sortOrder.indexOf(id) } as React.CSSProperties}
			className={cx(
				css`
					position: absolute;
					top: 0;
					left: 0;
					transform: scale(0);
					animation-iteration-count: 1;
					animation-duration: 200ms;
					animation-fill-mode: forwards;
					transition-duration: 150ms;
					transition-property: translate, scale, opacity;
					animation-timing-function: steps(5, start);
					transition-timing-function: steps(5, start);
					z-index: var(--z-index);

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
				state.apps.get(id)?.status === "minimized" &&
					css`
						translate: 0 50vh;
						scale: 0.5;
						user-select: none !important;
						pointer-events: none !important;
						opacity: 0;
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
					(isMaxWindow ||
						(appData.window.size?.enabledResize !== undefined && !appData.window.size.enabledResize)) &&
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
								windowElement.current.style.top = `${windowElement.current.offsetTop + e.movementY}px`;
								windowElement.current.style.height = `${windowElement.current.offsetHeight - e.movementY}px`;
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
								windowElement.current.style.top = `${windowElement.current.offsetTop + (touch.pageY - previousTouch.pageY)}px`;
								windowElement.current.style.height = `${windowElement.current.offsetHeight - (touch.pageY - previousTouch.pageY)}px`;
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
								windowElement.current.style.height = `${windowElement.current.offsetHeight + e.movementY}px`;
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
								windowElement.current.style.height = `${windowElement.current.offsetHeight + (touch.pageY - previousTouch.pageY)}px`;
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
								windowElement.current.style.left = `${windowElement.current.offsetLeft + e.movementX}px`;
								windowElement.current.style.width = `${windowElement.current.offsetWidth - e.movementX}px`;
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
								windowElement.current.style.left = `${windowElement.current.offsetLeft + (touch.pageX - previousTouch.pageX)}px`;
								windowElement.current.style.width = `${windowElement.current.offsetWidth - (touch.pageX - previousTouch.pageX)}px`;
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
								windowElement.current.style.width = `${windowElement.current.offsetWidth + e.movementX}px`;
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
								windowElement.current.style.width = `${windowElement.current.offsetWidth + (touch.pageX - previousTouch.pageX)}px`;
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
								windowElement.current.style.top = `${windowElement.current.offsetTop + e.movementY}px`;
								windowElement.current.style.width = `${windowElement.current.offsetWidth + e.movementX}px`;
								windowElement.current.style.height = `${windowElement.current.offsetHeight - e.movementY}px`;
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
								windowElement.current.style.top = `${windowElement.current.offsetTop + (touch.pageY - previousTouch.pageY)}px`;
								windowElement.current.style.width = `${windowElement.current.offsetWidth + (touch.pageX - previousTouch.pageX)}px`;
								windowElement.current.style.height = `${windowElement.current.offsetHeight - (touch.pageY - previousTouch.pageY)}px`;
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
								windowElement.current.style.top = `${windowElement.current.offsetTop + e.movementY}px`;
								windowElement.current.style.height = `${windowElement.current.offsetHeight - e.movementY}px`;
								windowElement.current.style.left = `${windowElement.current.offsetLeft + e.movementX}px`;
								windowElement.current.style.width = `${windowElement.current.offsetWidth - e.movementX}px`;
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
								windowElement.current.style.top = `${windowElement.current.offsetTop + (touch.pageY - previousTouch.pageY)}px`;
								windowElement.current.style.height = `${windowElement.current.offsetHeight - (touch.pageY - previousTouch.pageY)}px`;
								windowElement.current.style.left = `${windowElement.current.offsetLeft + (touch.pageX - previousTouch.pageX)}px`;
								windowElement.current.style.width = `${windowElement.current.offsetWidth - (touch.pageX - previousTouch.pageX)}px`;
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
								windowElement.current.style.height = `${windowElement.current.offsetHeight + e.movementY}px`;
								windowElement.current.style.width = `${windowElement.current.offsetWidth + e.movementX}px`;
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
								windowElement.current.style.height = `${windowElement.current.offsetHeight + (touch.pageY - previousTouch.pageY)}px`;
								windowElement.current.style.width = `${windowElement.current.offsetWidth + (touch.pageX - previousTouch.pageX)}px`;
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
								windowElement.current.style.height = `${windowElement.current.offsetHeight + e.movementY}px`;
								windowElement.current.style.left = `${windowElement.current.offsetLeft + e.movementX}px`;
								windowElement.current.style.width = `${windowElement.current.offsetWidth - e.movementX}px`;
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
								windowElement.current.style.height = `${windowElement.current.offsetHeight + (touch.pageY - previousTouch.pageY)}px`;
								windowElement.current.style.left = `${windowElement.current.offsetLeft + (touch.pageX - previousTouch.pageX)}px`;
								windowElement.current.style.width = `${windowElement.current.offsetWidth - (touch.pageX - previousTouch.pageX)}px`;
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
									windowElement.current.style.top = `${windowElement.current.offsetTop + e.movementY}px`;
									windowElement.current.style.left = `${windowElement.current.offsetLeft + e.movementX}px`;
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
									windowElement.current.style.top = `${windowElement.current.offsetTop + (touch.pageY - previousTouch.pageY)}px`;
									windowElement.current.style.left = `${windowElement.current.offsetLeft + (touch.pageX - previousTouch.pageX)}px`;
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
						style={{ height: `${windowHeaderHeight}px` }}
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
							{appData.icon !== undefined && appData.icon}
							<h2
								className={css`
									line-height: 1;
									font-size: 18px;
									color: #e73e6b;
									margin-bottom: 5px;
									white-space: nowrap;
									font-family: "BestTenCRT";

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
							<MinimizeButton id={id} />
							{appData.window.pin?.isViewButton && <PinButton id={id} />}
							{!(
								appData.window.size?.enabledResize !== undefined && !appData.window.size.enabledResize
							) && <FullScreenButton isMaxWindow={isMaxWindow} setIsMaxWindow={setIsMaxWindow} />}
							<CloseButton id={id} />
						</div>
					</div>
					<div
						style={{ height: `calc(100% - ${windowHeaderHeight}px)` }}
						className={css`
							flex: 1;
							container-type: inline-size;

							color: #cbcbcb;
						`}
					>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
