"use client";

import { css } from "@kuma-ui/core";
import { PortfolioBadge } from "@/components/iframe/PortfolioBadge";
import type { PortfolioSchema } from "@/libs/nilto";
import Link from "next/link";
import { cx } from "@/libs/merge-kuma";
import { useEffect, useState } from "react";

interface Props {
	baseHref: string;
	hoverText?: string;
	target?: string;
	data: PortfolioSchema[];
	aspect?: string;
}

export function PortfolioListContent({ baseHref, hoverText = "", data: rowData, target, aspect }: Props) {
	const [data, setData] = useState<PortfolioSchema[]>(rowData);

	useEffect(() => {
		const data = [
			...rowData.filter((row) => row.created_at === ""),
			...rowData
				.filter((row) => row.created_at !== "")
				.toSorted((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
		];

		setData(data);
	}, [rowData]);

	return (
		<>
			{data.map((item) => {
				return (
					<div
						key={item._id}
						className={css`
							display: flex;
							flex-direction: column;
							gap: 5px;
							width: 100%;
						`}
					>
						<Link
							href={`${baseHref}${item._id}`}
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
								if (!(e.target instanceof HTMLImageElement) || item.hover_eyecatch === undefined) {
									return;
								}

								e.target.src = `${item.hover_eyecatch.url}?width=560`;
							}}
							onMouseLeave={(e) => {
								if (
									!(e.target instanceof HTMLImageElement) ||
									item.hover_eyecatch === undefined ||
									item.eyecatch === undefined
								) {
									return;
								}

								e.target.src = `${item.eyecatch.url}?width=560&format=webp`;
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
								src={
									item.eyecatch !== undefined
										? `${item.eyecatch?.url}?width=340&format=webp`
										: "/portfolio/no-image.png"
								}
								alt={item.title}
								style={{ "--aspect": aspect } as React.CSSProperties}
								className={cx(
									css`
										width: 100%;
										height: 100%;
										object-fit: cover;
										vertical-align: bottom;
										transition-duration: 200ms;
										transition-property: filter;
										aspect-ratio: 3/2;
										user-select: none;
									`,
									aspect !== undefined &&
										css`
											aspect-ratio: var(--aspect);
											object-fit: contain;
										`
								)}
							/>
							{item.type === "work" && (
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
								line-height: 1.3;
								user-select: none;

								@media (max-width: 720px) {
									font-size: 16px;
								}
							`}
						>
							{item.title}
						</h3>
					</div>
				);
			})}
		</>
	);
}
