"use client";

import { isTouch, openAppSortList } from "@/atom";
import { appList, sortList } from "@/lib/app-select";
import { pageTitle } from "@/lib/seo";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { useEffect, useRef, useState } from "react";

interface Props {
	title: string;
	children: React.ReactNode;
	id: string;
}

export default function ({ title, children, id }: Props) {
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

		const mousedown = () => {
			const sortResult = sortList(id, $openAppSortList);
			if (JSON.stringify(sortResult) !== JSON.stringify($openAppSortList)) {
				openAppSortList.set(sortList(id, $openAppSortList));
				history.pushState({}, "", `/${id}`);
				document.title = appList[id].pageTitle;
			}
		};

		if (windowBarElement.current !== null && windowElement.current !== null) {
			windowBarElement.current.addEventListener("pointermove", move);
			windowElement.current.addEventListener("mousedown", mousedown);
		}

		return () => {
			if (windowBarElement.current !== null && windowElement.current !== null) {
				windowBarElement.current.removeEventListener("pointermove", move);
				windowElement.current.removeEventListener("mousedown", mousedown);
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
			}
		};
	}, []);

	useEffect(() => {
		if (windowElement.current !== null) {
			const width = Math.min(window.innerWidth * 0.9, 1300);
			const height = Math.min(window.innerHeight * 0.9 - 70, 700);
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
			style={{ zIndex: $openAppSortList.indexOf(id), display: $openAppSortList.includes(id) ? "block" : "none" }}
			className={[
				css`
					position: absolute;
					top: 0;
					left: 0;
				`,
				isMaxWindow
					? css`
							top: 0 !important;
							left: 0 !important;
							width: 100% !important;
							height: calc(100% - 70px) !important;
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
					isMaxWindow
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
				className={[
					css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						border-left: 4px solid #e5d3cc;
						border-right: 4px solid #e5d3cc;
						border-bottom: 4px solid #e5d3cc;
						user-select: text;
						pointer-events: auto;
						box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.36);
						border-radius: 10px;
						overflow: hidden;
					`,
					isMaxWindow
						? css`
								border-radius: 0;
							`
						: ""
				].join(" ")}
			>
				<div
					className={css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background-color: #ffffff;
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
							background-color: #e5d3cc;
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
							<div
								onClick={() => {
									const closeAppList = $openAppSortList.filter((item) => {
										return item !== id;
									});

									if (closeAppList.length === 0) {
										history.pushState({}, "", "/");
										document.title = pageTitle;
									} else {
										history.pushState({}, "", `/${closeAppList[0]}`);
										document.title = appList[closeAppList[0]].pageTitle;
									}

									if (windowElement.current !== null) {
										windowElement.current.style.top = "";
										windowElement.current.style.left = "";
										windowElement.current.style.width = "";
										windowElement.current.style.height = "";
									}

									openAppSortList.set(closeAppList);
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
						`}
					>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
