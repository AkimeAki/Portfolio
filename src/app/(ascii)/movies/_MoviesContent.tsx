"use client";

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
						<Link
							key={id}
							href={`/movies/${id}`}
							className={css`
								position: relative;
								display: block;
								aspect-ratio: 16/9;
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
								{moviesData[id].title}
							</span>
							<img
								src={moviesData[id].thumbnailFile}
								alt={moviesData[id].title}
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
					);
				}

				return <Fragment key={id} />;
			})}
		</div>
	);
}
