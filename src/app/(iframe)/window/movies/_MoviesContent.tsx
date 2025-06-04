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
				if (moviesData[id].type === "youtube") {
					return (
						<PortfolioListContent
							key={id}
							href={`/window/movies/${id}`}
							hoverText="詳しく見る"
							imagePath={moviesData[id].thumbnailFile}
							title={moviesData[id].title}
							onMouseEnter={(e) => {
								if (!(e.target instanceof HTMLImageElement)) {
									return;
								}

								e.target.src = moviesData[id].demoFile;
							}}
							onMouseLeave={(e) => {
								if (!(e.target instanceof HTMLImageElement)) {
									return;
								}

								e.target.src = moviesData[id].thumbnailFile;
							}}
						/>
					);
				}

				return <Fragment key={id} />;
			})}
		</div>
	);
}
