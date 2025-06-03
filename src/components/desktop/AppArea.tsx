"use client";

import { css } from "@kuma-ui/core";
import AppIcon from "@/components/desktop/AppIcon";
import { minimizeWindowList, openedAppSortList, osReady } from "@/atom";
import { useStore } from "@nanostores/react";
import { cx } from "@/libs/merge-kuma";
import { type PropsWithChildren, useEffect, useState } from "react";
import useWindow from "@/libs/useWindow";

interface DesktopIconProps {
	id: string;
	imgSrc?: string;
	isPixel?: boolean;
	onClick?: () => void;
}

export function DesktopIcon({ children, id, imgSrc, isPixel }: PropsWithChildren<DesktopIconProps>) {
	const { openWindow, releaseMinimizedWindow } = useWindow();
	const $osReady = useStore(osReady);

	function appClick(id: string) {
		const list = openedAppSortList.get();

		// クリックしたアプリが最前面じゃなかったら最善面にする
		if (list[list.length - 1] !== id) {
			openWindow(id);
		}

		// クリックしたアプリが最小化されてたら最小化解除する
		const minimizedList = minimizeWindowList.get();
		if (minimizedList.includes(id)) {
			releaseMinimizedWindow(id);
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
				$osReady &&
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
	const $osReady = useStore(osReady);
	const [ready, setReady] = useState<boolean>(false);

	useEffect(() => {
		if ($osReady) {
			setReady(true);
		}
	}, [$osReady]);

	const $openedAppSortList = useStore(openedAppSortList);
	const [introImgSrc, setIntroImgSrc] = useState<string>("/app/letter.png");
	const [portfolioImgSrc, setPortfolioImgSrc] = useState<string>("/app/folder.png");

	useEffect(() => {
		if ($openedAppSortList.includes("intro")) {
			setIntroImgSrc("/app/letter-open.png");
		} else {
			setIntroImgSrc("/app/letter.png");
		}

		if ($openedAppSortList.includes("portfolio")) {
			setPortfolioImgSrc("/app/folder-open.png");
		} else {
			setPortfolioImgSrc("/app/folder.png");
		}
	}, [$openedAppSortList]);

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

					@media (max-width: 720px) {
						top: 26px;
						display: grid;
						grid-template-columns: 1fr 1fr 1fr 1fr;
						gap: 0;
						width: 100%;
						height: auto;
						row-gap: 10px;
						padding: 30px 0;
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
			<DesktopIcon id="intro" imgSrc={introImgSrc} isPixel>
				Welcome.txt
			</DesktopIcon>
			<DesktopIcon id="portfolio" imgSrc={portfolioImgSrc} isPixel>
				作ったもの
			</DesktopIcon>
			<DesktopIcon id="pictures" imgSrc="/app/pictures.png" isPixel>
				イラスト
			</DesktopIcon>
			<DesktopIcon id="models" imgSrc="/app/models.png" isPixel>
				3Dモデル
			</DesktopIcon>
			<DesktopIcon id="movies" imgSrc="/app/movies.png" isPixel>
				ムービー
			</DesktopIcon>
			{/* <AppIcon id="aiblog" imgSrc="/app/aki-coffee.png" isPixel>
				日常ブログ
			</AppIcon> */}
			<DesktopIcon id="techblog" imgSrc="/app/blog.png" isPixel>
				技術ブログ
			</DesktopIcon>
			{/* <AppIcon id="allergynavi" imgSrc="/app/allergy-navi.webp">
				アレルギーナビ
			</AppIcon> */}
			<DesktopIcon id="pixelgives" imgSrc="/app/dotya.png" isPixel>
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
