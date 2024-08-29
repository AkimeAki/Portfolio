"use client";

import { css } from "@kuma-ui/core";
import AppIcon from "@/components/os/AppIcon";
import { osLoading } from "@/atom";
import { useStore } from "@nanostores/react";

export default function () {
	const $osLoading = useStore(osLoading);

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
						pointer-events: all;
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
			<AppIcon id="portfolio" imgSrc="/app/picaxe.png">
				作ったもの
			</AppIcon>
			<AppIcon href="https://coffee.aki.wtf/" imgSrc="/app/book.png">
				日常ブログ
			</AppIcon>
			<AppIcon href="https://blog.aki.wtf/" imgSrc="/app/tv.png">
				技術ブログ
			</AppIcon>
			<AppIcon id="faq" imgSrc="/app/ghost.png">
				FAQ
			</AppIcon>
		</div>
	);
}
