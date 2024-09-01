"use client";

import { openAppSortList } from "@/atom";
import { appList, sortList } from "@/lib/app-select";
import { pageTitle } from "@/lib/seo";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { useEffect, useRef } from "react";

interface Props {
	title: string;
	children: React.ReactNode;
	id: string;
}

export default function ({ title, children, id }: Props) {
	const $openAppSortList = useStore(openAppSortList);
	const windowBarElement = useRef<HTMLDivElement | null>(null);
	const windowElement = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const move = (e: PointerEvent) => {
			if (e.buttons === 1 && windowElement.current !== null && windowBarElement.current !== null) {
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
	}, [$openAppSortList]);

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
			className={css`
				position: absolute;
				top: 0;
				left: 0;
				border-left: 4px solid #d0e79a;
				border-right: 4px solid #d0e79a;
				border-bottom: 4px solid #d0e79a;
				user-select: text;
				pointer-events: auto;
				box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.36);

				@media (max-width: 720px) {
					top: 0 !important;
					left: 0 !important;
					width: 100% !important;
					height: calc(100% - 70px) !important;
				}
			`}
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
						background-color: #d0e79a;
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
								font-weight: bold;
								font-size: 18px;
								color: #e73e6b;
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
								width: 25px;
								height: 25px;
								cursor: pointer;

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
									left: 4px;
									display: block;
									content: "";
									width: 17px;
									height: 3px;
									background-color: #eeb5be;
								}

								&:before {
									top: 11px;
									transform: rotate(45deg);
								}

								&:after {
									bottom: 11px;
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
	);
}
