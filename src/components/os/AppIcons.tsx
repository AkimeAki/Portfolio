"use client";

import { css } from "@kuma-ui/core";
import AppIcon from "@/components/os/AppIcon";
import { isTwitterWidgetValid, osLoading } from "@/atom";
import { useStore } from "@nanostores/react";

export default function () {
	const $osLoading = useStore(osLoading);
	const $isTwitterWidgetValid = useStore(isTwitterWidgetValid);

	return (
		<div
			style={{ animationName: $osLoading ? "" : "appicon-signal" }}
			className={css`
				position: absolute;
				top: 0;
				left: 0;
				height: calc(100% - 70px);
				display: flex;
				flex-direction: column;
				gap: 30px;
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
					display: grid;
					grid-template-columns: 1fr 1fr 1fr 1fr;
					gap: 0;
					width: 100%;
					height: auto;
					row-gap: 10px;
					padding: 30px 0;
				}
			`}
		>
			<AppIcon id="profile" imgSrc="/app/aki.png">
				プロフィール
			</AppIcon>
			<AppIcon id="portfolio" imgSrc="/app/picaxe.png" isPixel>
				作ったもの
			</AppIcon>
			<AppIcon href="https://coffee.aki.wtf/" imgSrc="/app/aki-coffee.png" isPixel>
				日常ブログ
			</AppIcon>
			<AppIcon href="https://blog.aki.wtf/" imgSrc="/app/blog.png" isPixel>
				技術ブログ
			</AppIcon>
			<AppIcon href="https://allergy-navi.com/" imgSrc="/app/allergy-navi.png">
				アレルギーナビ
			</AppIcon>
			<AppIcon href="https://pixel.gives/" imgSrc="/app/dotya.png" isPixel>
				どっとや
			</AppIcon>
			<AppIcon href="https://simple-v.aki.wtf/" imgSrc="/app/simplev.png" isPixel>
				SimpleV
			</AppIcon>
			{/* <AppIcon href="https://kagari.aki.wtf/" imgSrc="/app/kagarinosu.png" isPixel>
				篝之鼠
			</AppIcon> */}
			<AppIcon id="faq" imgSrc="/app/ghost.png" isPixel>
				FAQ
			</AppIcon>
			{$isTwitterWidgetValid && (
				<AppIcon id="twitter" imgSrc="/app/twitter.png">
					Twitter
				</AppIcon>
			)}
			<AppIcon id="terminal" imgSrc="/app/terminal.png" isPixel>
				ターミナル
			</AppIcon>
			{/* <AppIcon id="misskeyio" imgSrc="/app/misskey.png">
				Misskey.io
			</AppIcon> */}
			{/* <AppIcon id="bluesky" imgSrc="/app/bluesky.png">
				Bluesky
			</AppIcon> */}
		</div>
	);
}
