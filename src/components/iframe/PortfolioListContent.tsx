"use client";

import { css } from "@kuma-ui/core";
import Link from "next/link";
import { PortfolioBadge } from "@/components/iframe/PortfolioBadge";
import type { PortfolioData } from "@/types/portfolio";

interface Props {
	href: string;
	hoverText?: string;
	target?: string;
	data: PortfolioData[string];
}

export function PortfolioListContent({ href, hoverText = "", data, target }: Props) {
	return (
		<div
			className={css`
				display: flex;
				flex-direction: column;
				gap: 5px;
				width: 100%;
			`}
		>
			<Link
				href={href}
				target={target}
				className={css`
					position: relative;
					display: block;
					border: none;
					width: 100%;

					&:hover {
						img {
							filter: brightness(0.5);
						}

						span {
							opacity: 1;
						}
					}
				`}
				onMouseEnter={(e) => {
					if (!(e.target instanceof HTMLImageElement) || data.hoverImagePath === undefined) {
						return;
					}

					e.target.src = data.hoverImagePath;
				}}
				onMouseLeave={(e) => {
					if (!(e.target instanceof HTMLImageElement) || data.hoverImagePath === undefined) {
						return;
					}

					e.target.src = data.imagePath;
				}}
			>
				<span
					className={css`
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						opacity: 0;
						user-select: none;
						pointer-events: none;
						width: 100%;
						font-weight: bold;
						text-align: center;
						font-size: 18px;
						color: white;
						transition-duration: 200ms;
						transition-property: opacity;
						z-index: 1;
						font-family: "BestTenCRT";
					`}
				>
					{hoverText}
				</span>
				<img
					src={data.imagePath}
					alt={data.title}
					className={css`
						width: 100%;
						height: 100%;
						object-fit: contain;
						vertical-align: bottom;
						transition-duration: 200ms;
						transition-property: filter;
						aspect-ratio: 3/2;
					`}
				/>
				{data.type === "work" && (
					<div
						className={css`
							position: absolute;
							bottom: 10px;
							right: 10px;
							z-index: 1;
						`}
					>
						<PortfolioBadge type="work" />
					</div>
				)}
			</Link>
			<h3
				className={css`
					user-select: none;
					pointer-events: none;
					width: 100%;
					text-align: center;
					font-size: 18px;
					color: white;
					word-break: auto-phrase;
					overflow-wrap: anywhere;
					font-family: "BestTenCRT";

					@media (max-width: 720px) {
						font-size: 16px;
					}
				`}
			>
				{data.title}
			</h3>
		</div>
	);
}
