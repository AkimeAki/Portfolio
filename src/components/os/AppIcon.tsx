"use client";

import { osLoading } from "@/atom";
import useWindow from "@/lib/useWindow";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";

interface Props {
	children: React.ReactNode;
	id?: string;
	imgSrc?: string;
	href?: string;
	isPixel?: boolean;
}

export default function ({ children, id, imgSrc, href, isPixel = false }: Props) {
	const { openWindow, releaseMinimizedWindow } = useWindow();
	const $osLoading = useStore(osLoading);

	return (
		<div
			onClick={() => {
				if (id !== undefined) {
					openWindow(id);
					releaseMinimizedWindow(id);

					if (process.env.NODE_ENV === "production") {
						window.dataLayer.push({ event: "app-click", appId: id, url: null });
					}
				}

				if (href !== undefined) {
					window.open(href, "_blank");

					if (process.env.NODE_ENV === "production") {
						window.dataLayer.push({ event: "app-click", appId: null, url: href });
					}
				}
			}}
			className={[
				css`
					display: flex;
					gap: 3px;
					flex-direction: column;
					align-items: center;
					width: 150px;
					border-style: solid;
					border-color: transparent;
					border-width: 1px;
					background-color: transparent;
					pointer-events: none;
					padding: 2px;
					transition-duration: 200ms;
					transition-property: bodrer-color, background-color;

					@media (hover: hover) {
						&:hover {
							border-color: #d8fa8e88;
							background-color: #d8fa8e55;

							.app-icon-name {
								color: white;
							}
						}
					}

					@media (max-width: 720px) {
						width: auto;
						gap: 6px;
					}
				`,
				!$osLoading
					? css`
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
					: ""
			].join(" ")}
		>
			<div
				className={css`
					position: relative;
					width: 80px;
					height: 80px;
					flex-shrink: 0;
					pointer-events: none;

					@media (max-width: 720px) {
						width: 50px;
						height: 50px;
						border-radius: 50%;
						background-color: #cb284a;
						filter: drop-shadow(0px 1px 1px #52161c) drop-shadow(0px 1px 1px #52161c)
							drop-shadow(0px 1px 1px #52161c);
					}
				`}
			>
				{imgSrc !== undefined && (
					<img
						src={imgSrc}
						className={[
							css`
								position: absolute;
								top: 50%;
								left: 50%;
								transform: translate(-50%, -50%);
								width: 100%;
								height: 100%;

								@media (max-width: 720px) {
									width: 80%;
									height: 80%;
									border-radius: 50%;
									filter: drop-shadow(0px 0px 1px white) drop-shadow(0px 0px 1px white)
										drop-shadow(0px 0px 1px white);
								}
							`,
							isPixel
								? css`
										image-rendering: pixelated;
									`
								: ""
						].join(" ")}
					/>
				)}
				{href !== undefined && (
					<>
						<img
							src="/shortcut.png"
							className={css`
								position: absolute;
								bottom: 10px;
								left: 10px;
								image-rendering: pixelated;

								@media (max-width: 720px) {
									display: none;
								}
							`}
						/>
						<img
							src="/chrome-shortcut.png"
							className={css`
								display: none;
								position: absolute;
								bottom: 0;
								right: 0;
								image-rendering: pixelated;

								@media (max-width: 720px) {
									display: block;
								}
							`}
						/>
					</>
				)}
			</div>
			<span
				className={[
					css`
						font-size: 17px;
						width: 100%;
						text-align: center;
						line-height: 1;
						margin-bottom: 10px;
						transition-duration: 200ms;
						transition-property: color;

						@media (max-width: 720px) {
							margin-bottom: 0;
							font-size: 15px;
						}

						@media (max-width: 460px) {
							font-size: 12px;
						}
					`,
					"app-icon-name"
				].join(" ")}
			>
				{children}
			</span>
		</div>
	);
}
