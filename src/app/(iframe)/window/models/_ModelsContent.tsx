"use client";

import { PortfolioListContent } from "@/components/iframe/PortfolioListContent";
import { emojiPathList } from "@/data/emoji-path";
import { modelsData } from "@/data/models";
import { css } from "@kuma-ui/core";
import Link from "next/link";

export function ModelsContent() {
	return (
		<div
			className={css`
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr;
				gap: 20px;

				@media (max-width: 800px) {
					grid-template-columns: 1fr 1fr 1fr;
				}
			`}
		>
			{Object.keys(modelsData).map((id) => (
				<PortfolioListContent
					key={id}
					href={`/window/models/${id}`}
					hoverText="詳しく見る"
					data={modelsData[id]}
				/>
			))}
		</div>
	);
}
