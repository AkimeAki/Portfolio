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
			`}
		>
			<AppIcon id="portfolio">作ったもの</AppIcon>
			<AppIcon id="faq">FAQ</AppIcon>
		</div>
	);
}
