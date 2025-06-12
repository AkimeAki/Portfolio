"use client";

import { css, cx } from "@kuma-ui/core";
import { isOSReady } from "@/atom";
import { useStore } from "@nanostores/react";
import { type PropsWithChildren, useEffect, useState } from "react";
import { useWindowManager } from "@/context/WindowManagerContext";
import { APPS_DATA } from "@/data/app";
import { AppIcon } from "@/components/desktop/AppIcon";

interface DesktopIconProps {
	id: string;
	imgSrc?: string;
	isPixel?: boolean;
	onClick?: () => void;
}

export function DesktopIcon({ children, id, imgSrc, isPixel }: PropsWithChildren<DesktopIconProps>) {
	const $isOSReady = useStore(isOSReady);
	const { dispatch } = useWindowManager();

	function appClick(id: string) {
		// const list = openedAppSortList.get();

		// // クリックしたアプリが最前面じゃなかったら最善面にする
		// if (list[list.length - 1] !== id) {
		// 	openWindow(id);
		// }

		// // クリックしたアプリが最小化されてたら最小化解除する
		// const minimizedList = minimizeWindowList.get();
		// if (minimizedList.includes(id)) {
		// 	releaseMinimizedWindow(id);
		// }

		const app = APPS_DATA.find((app) => app.id === id);
		if (app !== undefined) {
			dispatch({ type: "OPEN", payload: { app } });
		}

		if (process.env.NODE_ENV === "production") {
			window.dataLayer.push({ event: "app-click", appId: id, url: null });
		}
	}

	return (
		<AppIcon
			imgSrc={imgSrc}
			onClick={() => {
				appClick(id);
			}}
			isPixel={isPixel}
			className={cx(
				css`
					pointer-events: none;
				`,
				$isOSReady &&
					css`
						animation-duration: 70ms;
						animation-delay: 1200ms;
						animation-fill-mode: forwards;
						animation-iteration-count: 1;
						animation-timing-function: linear;
						animation-name: viewed-app-icon;

						@keyframes viewed-app-icon {
							100% {
								pointer-events: all;
							}
						}
					`
			)}
		>
			{children}
		</AppIcon>
	);
}

export function AppArea() {
	const $isOSReady = useStore(isOSReady);
	const [ready, setReady] = useState<boolean>(false);
	const { state } = useWindowManager();

	useEffect(() => {
		if ($isOSReady) {
			setReady(true);
		}
	}, [$isOSReady]);

	return (
		<div
			className={cx(
				css`
					position: absolute;
					top: 0;
					left: 0;
					height: calc(100% - 70px);
					display: flex;
					flex-direction: column;
					column-gap: 15px;
					row-gap: 20px;
					flex-wrap: wrap;
					padding: 10px;
					user-select: none;
					pointer-events: none;
					opacity: 0;

					animation-duration: 70ms;
					animation-delay: 1200ms;
					animation-fill-mode: forwards;
					animation-iteration-count: 5;
					animation-timing-function: linear;

					@keyframes appicon-signal {
						100% {
							opacity: 1;
						}
					}

					body[data-touch="true"] & {
						padding: 20px 10px;
					}

					@media (max-width: 720px) {
						top: 26px;
						display: grid;
						grid-template-columns: 1fr 1fr 1fr 1fr;
						gap: 0;
						width: 100%;
						height: auto;
						row-gap: 10px;
						padding: 10px 0;
					}
				`,
				ready &&
					css`
						animation-name: appicon-signal;
					`
			)}
		>
			<DesktopIcon id="profile" imgSrc="/app/aki.webp">
				プロフィール
			</DesktopIcon>
			<DesktopIcon
				id="welcome"
				imgSrc={(() => {
					if (state.apps.get("welcome")?.status === "opened") {
						return "/app/letter-open.png";
					}

					return "/app/letter.png";
				})()}
				isPixel
			>
				Welcome.txt
			</DesktopIcon>
			<DesktopIcon
				id="portfolio"
				imgSrc={(() => {
					if (state.apps.get("portfolio")?.status === "opened") {
						return "/app/folder-open.png";
					}

					return "/app/folder.png";
				})()}
				isPixel
			>
				作ったもの
			</DesktopIcon>
			<DesktopIcon id="illust" imgSrc="/app/illust.png" isPixel>
				イラスト
			</DesktopIcon>
			<DesktopIcon id="model" imgSrc="/app/cube.png" isPixel>
				3Dモデル
			</DesktopIcon>
			<DesktopIcon id="movie" imgSrc="/app/tv.png" isPixel>
				映像
			</DesktopIcon>
			{/* <AppIcon id="aiblog" imgSrc="/app/aki-coffee.png" isPixel>
				日常ブログ
			</AppIcon> */}
			<DesktopIcon id="blog" imgSrc="/app/hourglass.png" isPixel>
				技術ブログ
			</DesktopIcon>
			{/* <AppIcon id="allergynavi" imgSrc="/app/allergy-navi.webp">
				アレルギーナビ
			</AppIcon> */}
			<DesktopIcon id="dotya" imgSrc="/app/dotya.png" isPixel>
				どっと屋
			</DesktopIcon>
			{/* <AppIcon href="https://simple-v.shikiiro.net/" imgSrc="/app/simplev.webp" target="_blank">
				SimpleV
			</AppIcon> */}
			{/* <AppIcon id="faq" imgSrc="/app/ghost.png" isPixel>
				FAQ
			</AppIcon> */}
			<DesktopIcon id="terminal" imgSrc="/app/terminal.png" isPixel>
				ターミナル
			</DesktopIcon>
		</div>
	);
}
