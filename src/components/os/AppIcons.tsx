"use client";

import { css } from "@kuma-ui/core";
import AppIcon from "@/components/os/AppIcon";
import { osReady } from "@/atom";
import { useStore } from "@nanostores/react";
import { cx } from "@/libs/merge-kuma";
import { useEffect, useState } from "react";

export default function () {
	const $osReady = useStore(osReady);
	const [ready, setReady] = useState<boolean>(false);

	useEffect(() => {
		if ($osReady) {
			setReady(true);
		}
	}, [$osReady]);

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
			<AppIcon id="profile" imgSrc="/app/aki.webp">
				プロフィール
			</AppIcon>
			<AppIcon id="intro" imgSrc="/app/letter.png" isPixel>
				Welcome.txt
			</AppIcon>
			<AppIcon id="portfolio" imgSrc="/app/picaxe.png" isPixel>
				作ったもの
			</AppIcon>
			<AppIcon id="pictures" imgSrc="/app/pictures.png" isPixel>
				イラスト
			</AppIcon>
			<AppIcon href="https://coffee.shikiiro.net/" imgSrc="/app/aki-coffee.png" isPixel target="_blank">
				日常ブログ
			</AppIcon>
			<AppIcon href="https://blog.shikiiro.net/" imgSrc="/app/blog.png" isPixel target="_blank">
				技術ブログ
			</AppIcon>
			<AppIcon href="https://allergy-navi.com/" imgSrc="/app/allergy-navi.webp" target="_blank">
				アレルギーナビ
			</AppIcon>
			<AppIcon href="https://pixel.gives/" imgSrc="/app/dotya.png" isPixel target="_blank">
				どっとや
			</AppIcon>
			<AppIcon href="https://simple-v.shikiiro.net/" imgSrc="/app/simplev.webp" target="_blank">
				SimpleV
			</AppIcon>
			<AppIcon id="faq" imgSrc="/app/ghost.png" isPixel>
				FAQ
			</AppIcon>
			<AppIcon id="terminal" imgSrc="/app/terminal.png" isPixel>
				ターミナル
			</AppIcon>
		</div>
	);
}
