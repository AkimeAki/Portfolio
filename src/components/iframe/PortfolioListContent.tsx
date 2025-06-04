"use client";

import { css } from "@kuma-ui/core";
import Link from "next/link";

interface Props {
	href: string;
	hoverText?: string;
	imagePath: string;
	imageAlt?: string;
	title: string;
	target?: string;
	onMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
	onMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function PortfolioListContent({
	href,
	hoverText = "",
	imagePath,
	imageAlt,
	title,
	target,
	onMouseEnter,
	onMouseLeave
}: Props) {
	return (
		<div
			className={css`
				display: flex;
				flex-direction: column;
				gap: 5px;
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
					max-width: 560px;

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
					if (onMouseEnter !== undefined) {
						onMouseEnter(e);
					}
				}}
				onMouseLeave={(e) => {
					if (onMouseLeave !== undefined) {
						onMouseLeave(e);
					}
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
					`}
				>
					{hoverText}
				</span>
				<img
					src={imagePath}
					alt={imageAlt ?? title}
					className={css`
						width: 100%;
						height: 100%;
						object-fit: cover;
						vertical-align: bottom;
						transition-duration: 200ms;
						transition-property: filter;
					`}
				/>
			</Link>
			<h3
				className={css`
					user-select: none;
					pointer-events: none;
					width: 100%;
					text-align: center;
					font-size: 18px;
					color: white;
				`}
			>
				{title}
			</h3>
		</div>
	);
}
