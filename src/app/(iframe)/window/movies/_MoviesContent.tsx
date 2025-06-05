"use client";

import { PortfolioListContent } from "@/components/iframe/PortfolioListContent";
import { emojiPathList } from "@/data/emoji-path";
import { moviesData } from "@/data/movies";
import { css } from "@kuma-ui/core";
import Link from "next/link";
import { Fragment } from "react";

export function MoviesContent() {
	return (
		<div
			className={css`
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				gap: 20px;

				@media (max-width: 800px) {
					grid-template-columns: 1fr 1fr;
				}
			`}
		>
			{Object.keys(moviesData).map((id) => {
				return (
					<PortfolioListContent
						key={id}
						href={`/window/movies/${id}`}
						hoverText="詳しく見る"
						data={moviesData[id]}
					/>
				);
			})}
		</div>
	);
}
