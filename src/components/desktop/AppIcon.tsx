"use client";

import { osReady } from "@/atom";
import { cx } from "@/libs/merge-kuma";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import Link from "next/link";
import type { PropsWithChildren } from "react";

interface Props {
	imgSrc?: string;
	href?: string;
	isPixel?: boolean;
	onClick?: () => void;
	target?: string;
	className?: string;
}

export default function ({
	children,
	imgSrc,
	href,
	isPixel = false,
	onClick,
	target = "_self",
	className
}: PropsWithChildren<Props>) {
	const $osReady = useStore(osReady);

	return (
		<div
			onClick={() => {
				if (onClick !== undefined) {
					onClick();
				}
			}}
			className={cx(
				css`
					position: relative;
					display: flex;
					gap: 3px;
					flex-direction: column;
					align-items: center;
					width: 140px;
					border-style: solid;
					border-color: transparent;
					border-width: 1px;
					background-color: transparent;
					padding: 2px;
					transition-duration: 200ms;
					transition-property: background-color;

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
				className
			)}
		>
			<div
				className={css`
					position: relative;
					width: 60px;
					height: 60px;
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
						alt={String(children)}
						src={imgSrc}
						data-loading-image
						loading="eager"
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
				{href !== undefined && target === "_blank" && (
					<img
						alt="ショートカットアイコン"
						src="/shortcut.png"
						className={css`
							position: absolute;
							bottom: 10px;
							left: 10px;
							image-rendering: pixelated;

							@media (max-width: 720px) {
								position: absolute;
								left: 0;
								bottom: 0;
							}
						`}
					/>
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
						color: #c9c9c9;

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
			{href !== undefined ? (
				<Link
					href={href}
					onClick={(e) => {
						if (href === undefined) {
							e.preventDefault();
						}
					}}
					target={target}
					data-cursor="pointer"
					className={css`
						position: absolute;
						top: 0;
						left: 0%;
						width: 100%;
						height: 100%;
					`}
				/>
			) : (
				<span
					data-cursor="pointer"
					className={css`
						position: absolute;
						top: 0;
						left: 0%;
						width: 100%;
						height: 100%;
					`}
				/>
			)}
		</div>
	);
}
