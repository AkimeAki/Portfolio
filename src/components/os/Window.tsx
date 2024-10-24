"use client";

import { pinWindowList, isTouch, openAppSortList, minimizeWindowList } from "@/atom";
import useWindow from "@/lib/useWindow";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { useEffect, useRef, useState } from "react";

interface Props {
	title: string;
	children: React.ReactNode;
	id: string;
	resize: boolean;
	size?: {
		width: number;
		height: number;
	};
	viewPinButton: boolean;
	defaultPin: boolean;
}

export default function ({ title, children, id, resize, size, viewPinButton, defaultPin }: Props) {
	const $openAppSortList = useStore(openAppSortList);
	const windowBarElement = useRef<HTMLDivElement | null>(null);
	const windowElement = useRef<HTMLDivElement | null>(null);
	const topResizeElement = useRef<HTMLDivElement | null>(null);
	const bottomResizeElement = useRef<HTMLDivElement | null>(null);
	const leftResizeElement = useRef<HTMLDivElement | null>(null);
	const rightResizeElement = useRef<HTMLDivElement | null>(null);
	const topRightResizeElement = useRef<HTMLDivElement | null>(null);
	const topLeftResizeElement = useRef<HTMLDivElement | null>(null);
	const bottomRightResizeElement = useRef<HTMLDivElement | null>(null);
	const bottomLeftResizeElement = useRef<HTMLDivElement | null>(null);
	const $isTouch = useStore(isTouch);
	const [isMaxWindow, setIsMaxWindow] = useState<boolean>(false);
	const { openWindow, closeWindow, pinWindow, unpinWindow, minimizeWindow } = useWindow();
	const $pinWindowList = useStore(pinWindowList);
	const [windowList, setWindowList] = useState<string[]>([]);
	const $minimizeWindowList = useStore(minimizeWindowList);

	useEffect(() => {
		if ($isTouch) {
			setIsMaxWindow(true);
		} else {
			setIsMaxWindow(false);
		}
	}, [$isTouch]);

	useEffect(() => {
		const move = (e: PointerEvent) => {
			if (
				e.buttons === 1 &&
				windowElement.current !== null &&
				windowBarElement.current !== null &&
				!isMaxWindow
			) {
				windowElement.current.style.top = windowElement.current.offsetTop + e.movementY + "px";
				windowElement.current.style.left = windowElement.current.offsetLeft + e.movementX + "px";
				windowElement.current.draggable = false;
				windowBarElement.current.setPointerCapture(e.pointerId);
			}
		};

		const windowMousedown = () => {
			openWindow(id);
		};

		const barMousedown = () => {
			document.body.dataset.userSelect = "none";
		};

		const barMouseup = () => {
			document.body.dataset.userSelect = "";
		};

		if (windowBarElement.current !== null && windowElement.current !== null) {
			windowBarElement.current.addEventListener("pointermove", move);
			windowBarElement.current.addEventListener("mousedown", barMousedown);
			windowBarElement.current.addEventListener("mouseup", barMouseup);
			windowElement.current.addEventListener("mousedown", windowMousedown);
		}

		return () => {
			if (windowBarElement.current !== null && windowElement.current !== null) {
				windowBarElement.current.removeEventListener("pointermove", move);
				windowElement.current.removeEventListener("mousedown", windowMousedown);
				windowBarElement.current.removeEventListener("mousedown", barMousedown);
				windowBarElement.current.removeEventListener("mouseup", barMouseup);
			}
		};
	}, [$openAppSortList, isMaxWindow]);

	useEffect(() => {
		const rightResize = (e: PointerEvent) => {
			if (e.buttons === 1 && rightResizeElement.current !== null && windowElement.current !== null) {
				windowElement.current.style.width = windowElement.current.offsetWidth + e.movementX + "px";
				rightResizeElement.current.draggable = false;
				rightResizeElement.current.setPointerCapture(e.pointerId);
			}
		};

		const leftResize = (e: PointerEvent) => {
			if (e.buttons === 1 && leftResizeElement.current !== null && windowElement.current !== null) {
				windowElement.current.style.left = windowElement.current.offsetLeft + e.movementX + "px";
				windowElement.current.style.width = windowElement.current.offsetWidth - e.movementX + "px";
				leftResizeElement.current.draggable = false;
				leftResizeElement.current.setPointerCapture(e.pointerId);
			}
		};

		const topResize = (e: PointerEvent) => {
			if (e.buttons === 1 && topResizeElement.current !== null && windowElement.current !== null) {
				windowElement.current.style.top = windowElement.current.offsetTop + e.movementY + "px";
				windowElement.current.style.height = windowElement.current.offsetHeight - e.movementY + "px";
				topResizeElement.current.draggable = false;
				topResizeElement.current.setPointerCapture(e.pointerId);
			}
		};

		const bottomResize = (e: PointerEvent) => {
			if (e.buttons === 1 && bottomResizeElement.current !== null && windowElement.current !== null) {
				windowElement.current.style.height = windowElement.current.offsetHeight + e.movementY + "px";
				bottomResizeElement.current.draggable = false;
				bottomResizeElement.current.setPointerCapture(e.pointerId);
			}
		};

		const bottomRightResize = (e: PointerEvent) => {
			if (e.buttons === 1 && bottomRightResizeElement.current !== null && windowElement.current !== null) {
				windowElement.current.style.height = windowElement.current.offsetHeight + e.movementY + "px";
				windowElement.current.style.width = windowElement.current.offsetWidth + e.movementX + "px";
				bottomRightResizeElement.current.draggable = false;
				bottomRightResizeElement.current.setPointerCapture(e.pointerId);
			}
		};

		const bottomLeftResize = (e: PointerEvent) => {
			if (e.buttons === 1 && bottomLeftResizeElement.current !== null && windowElement.current !== null) {
				windowElement.current.style.height = windowElement.current.offsetHeight + e.movementY + "px";
				windowElement.current.style.left = windowElement.current.offsetLeft + e.movementX + "px";
				windowElement.current.style.width = windowElement.current.offsetWidth - e.movementX + "px";
				bottomLeftResizeElement.current.draggable = false;
				bottomLeftResizeElement.current.setPointerCapture(e.pointerId);
			}
		};

		const topRightResize = (e: PointerEvent) => {
			if (e.buttons === 1 && topRightResizeElement.current !== null && windowElement.current !== null) {
				windowElement.current.style.top = windowElement.current.offsetTop + e.movementY + "px";
				windowElement.current.style.width = windowElement.current.offsetWidth + e.movementX + "px";
				windowElement.current.style.height = windowElement.current.offsetHeight - e.movementY + "px";
				topRightResizeElement.current.draggable = false;
				topRightResizeElement.current.setPointerCapture(e.pointerId);
			}
		};

		const topLeftResize = (e: PointerEvent) => {
			if (e.buttons === 1 && topLeftResizeElement.current !== null && windowElement.current !== null) {
				windowElement.current.style.top = windowElement.current.offsetTop + e.movementY + "px";
				windowElement.current.style.height = windowElement.current.offsetHeight - e.movementY + "px";
				windowElement.current.style.left = windowElement.current.offsetLeft + e.movementX + "px";
				windowElement.current.style.width = windowElement.current.offsetWidth - e.movementX + "px";
				topLeftResizeElement.current.draggable = false;
				topLeftResizeElement.current.setPointerCapture(e.pointerId);
			}
		};

		const resizebarMousedown = () => {
			document.body.dataset.userSelect = "none";
		};

		const resizebarMouseup = () => {
			document.body.dataset.userSelect = "";
		};

		if (
			topResizeElement.current !== null &&
			bottomResizeElement.current !== null &&
			leftResizeElement.current !== null &&
			rightResizeElement.current !== null &&
			topRightResizeElement.current !== null &&
			topLeftResizeElement.current !== null &&
			bottomRightResizeElement.current !== null &&
			bottomLeftResizeElement.current !== null
		) {
			rightResizeElement.current.addEventListener("pointermove", rightResize);
			leftResizeElement.current.addEventListener("pointermove", leftResize);
			topResizeElement.current.addEventListener("pointermove", topResize);
			bottomResizeElement.current.addEventListener("pointermove", bottomResize);
			bottomRightResizeElement.current.addEventListener("pointermove", bottomRightResize);
			bottomLeftResizeElement.current.addEventListener("pointermove", bottomLeftResize);
			topRightResizeElement.current.addEventListener("pointermove", topRightResize);
			topLeftResizeElement.current.addEventListener("pointermove", topLeftResize);

			rightResizeElement.current.addEventListener("mousedown", resizebarMousedown);
			leftResizeElement.current.addEventListener("mousedown", resizebarMousedown);
			topResizeElement.current.addEventListener("mousedown", resizebarMousedown);
			bottomResizeElement.current.addEventListener("mousedown", resizebarMousedown);
			bottomRightResizeElement.current.addEventListener("mousedown", resizebarMousedown);
			bottomLeftResizeElement.current.addEventListener("mousedown", resizebarMousedown);
			topRightResizeElement.current.addEventListener("mousedown", resizebarMousedown);
			topLeftResizeElement.current.addEventListener("mousedown", resizebarMousedown);

			rightResizeElement.current.addEventListener("mouseup", resizebarMouseup);
			leftResizeElement.current.addEventListener("mouseup", resizebarMouseup);
			topResizeElement.current.addEventListener("mouseup", resizebarMouseup);
			bottomResizeElement.current.addEventListener("mouseup", resizebarMouseup);
			bottomRightResizeElement.current.addEventListener("mouseup", resizebarMouseup);
			bottomLeftResizeElement.current.addEventListener("mouseup", resizebarMouseup);
			topRightResizeElement.current.addEventListener("mouseup", resizebarMouseup);
			topLeftResizeElement.current.addEventListener("mouseup", resizebarMouseup);
		}

		return () => {
			if (
				topResizeElement.current !== null &&
				bottomResizeElement.current !== null &&
				leftResizeElement.current !== null &&
				rightResizeElement.current !== null &&
				topRightResizeElement.current !== null &&
				topLeftResizeElement.current !== null &&
				bottomRightResizeElement.current !== null &&
				bottomLeftResizeElement.current !== null
			) {
				rightResizeElement.current.removeEventListener("pointermove", rightResize);
				leftResizeElement.current.removeEventListener("pointermove", leftResize);
				topResizeElement.current.removeEventListener("pointermove", topResize);
				bottomResizeElement.current.removeEventListener("pointermove", bottomResize);
				bottomRightResizeElement.current.removeEventListener("pointermove", bottomRightResize);
				bottomLeftResizeElement.current.removeEventListener("pointermove", bottomLeftResize);
				topRightResizeElement.current.removeEventListener("pointermove", topRightResize);
				topLeftResizeElement.current.removeEventListener("pointermove", topLeftResize);

				rightResizeElement.current.removeEventListener("mousedown", resizebarMousedown);
				leftResizeElement.current.removeEventListener("mousedown", resizebarMousedown);
				topResizeElement.current.removeEventListener("mousedown", resizebarMousedown);
				bottomResizeElement.current.removeEventListener("mousedown", resizebarMousedown);
				bottomRightResizeElement.current.removeEventListener("mousedown", resizebarMousedown);
				bottomLeftResizeElement.current.removeEventListener("mousedown", resizebarMousedown);
				topRightResizeElement.current.removeEventListener("mousedown", resizebarMousedown);
				topLeftResizeElement.current.removeEventListener("mousedown", resizebarMousedown);

				rightResizeElement.current.removeEventListener("mouseup", resizebarMouseup);
				leftResizeElement.current.removeEventListener("mouseup", resizebarMouseup);
				topResizeElement.current.removeEventListener("mouseup", resizebarMouseup);
				bottomResizeElement.current.removeEventListener("mouseup", resizebarMouseup);
				bottomRightResizeElement.current.removeEventListener("mouseup", resizebarMouseup);
				bottomLeftResizeElement.current.removeEventListener("mouseup", resizebarMouseup);
				topRightResizeElement.current.removeEventListener("mouseup", resizebarMouseup);
				topLeftResizeElement.current.removeEventListener("mouseup", resizebarMouseup);
			}
		};
	}, []);

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
		if (defaultPin) {
			pinWindow(id);
		}
	}, [defaultPin]);

	useEffect(() => {
		if (windowElement.current !== null) {
			let width = 0;
			let height = 0;

			if (size !== undefined) {
				width = size.width;
				height = size.height;
			} else {
				width = Math.min(window.innerWidth * 0.9, 1300);
				height = Math.min(window.innerHeight * 0.9 - 70, 700);
			}

			let top = (window.innerHeight - 70 - height) / 2;
			let left = (window.innerWidth - width) / 2;

			const appWindows = document.querySelectorAll<HTMLDivElement>("[data-app-id]");
			appWindows.forEach((appWindow) => {
				if (appWindow.dataset.appId !== id) {
					const otherWindowTop = Number(appWindow.style.top.replace("px", ""));
					const otherWindowLeft = Number(appWindow.style.left.replace("px", ""));
					if (Math.abs(otherWindowTop - top) < 30) {
						top = otherWindowTop + 30;
					}

					if (Math.abs(otherWindowLeft - left) < 30) {
						left = otherWindowLeft + 30;
					}
				}
			});

			windowElement.current.style.width = `${width}px`;
			windowElement.current.style.height = `${height}px`;
			windowElement.current.style.top = `${top}px`;
			windowElement.current.style.left = `${left}px`;
		}
	}, []);

	return (
		<div
			ref={windowElement}
			data-app-id={id}
			style={{ zIndex: windowList.indexOf(id), display: $openAppSortList.includes(id) ? "block" : "none" }}
			className={[
				css`
					position: absolute;
					top: 0;
					left: 0;
					transform: scale(0);
					animation-name: view-window;
					animation-iteration-count: 1;
					animation-duration: 200ms;
					animation-fill-mode: forwards;
					transition-duration: 400ms;
					transition-property: translate, scale;

					@keyframes view-window {
						0% {
							transform: scale(0);
						}

						100% {
							transform: scale(1);
						}
					}
				`,
				isMaxWindow
					? css`
							top: 0 !important;
							left: 0 !important;
							width: 100% !important;
							height: calc(100% - 70px) !important;
						`
					: "",
				$minimizeWindowList.includes(id)
					? css`
							translate: 0 100vh;
							scale: 0;
						`
					: ""
			].join(" ")}
		>
			<div
				className={[
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
					isMaxWindow || !resize
						? css`
								display: none;
							`
						: ""
				].join(" ")}
			>
				<div
					ref={topResizeElement}
					className={css`
						top: 0;
						left: 0;
						width: 100%;
						height: 10px;
						cursor: ns-resize;
					`}
				/>
				<div
					ref={bottomResizeElement}
					className={css`
						bottom: 0;
						left: 0;
						width: 100%;
						height: 10px;
						cursor: ns-resize;
					`}
				/>
				<div
					ref={leftResizeElement}
					className={css`
						top: 0;
						left: 0;
						width: 10px;
						height: 100%;
						cursor: ew-resize;
					`}
				/>
				<div
					ref={rightResizeElement}
					className={css`
						top: 0;
						right: 0;
						width: 10px;
						height: 100%;
						cursor: ew-resize;
					`}
				/>
				<div
					ref={topRightResizeElement}
					className={css`
						top: 0;
						right: 0;
						width: 15px;
						height: 15px;
						cursor: nesw-resize;
					`}
				/>
				<div
					ref={topLeftResizeElement}
					className={css`
						top: 0;
						left: 0;
						width: 15px;
						height: 15px;
						cursor: nwse-resize;
					`}
				/>
				<div
					ref={bottomRightResizeElement}
					className={css`
						bottom: 0;
						right: 0;
						width: 15px;
						height: 15px;
						cursor: nwse-resize;
					`}
				/>
				<div
					ref={bottomLeftResizeElement}
					className={css`
						bottom: 0;
						left: 0;
						width: 15px;
						height: 15px;
						cursor: nesw-resize;
					`}
				/>
			</div>
			<div
				className={css`
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
				`}
			>
				<div
					className={css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background-color: #220000;
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
						ref={windowBarElement}
						className={css`
							position: relative;
							height: 50px;
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
								{title}
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
							{viewPinButton && (
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
							{resize && (
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

									if (windowElement.current !== null) {
										windowElement.current.style.top = "";
										windowElement.current.style.left = "";
										windowElement.current.style.width = "";
										windowElement.current.style.height = "";
									}
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
								* {
									color: #f3f3f3;
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
