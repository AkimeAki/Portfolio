"use client";

import { PortfolioListContent } from "@/components/iframe/PortfolioListContent";
import { webSiteData } from "@/data/website";
import { css } from "@kuma-ui/core";

export function MinecraftContent() {
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
			{Object.keys(webSiteData).map((id) => {
				return (
					<PortfolioListContent
						key={id}
						href={`/window/website/${id}`}
						hoverText="詳しく見る"
						imagePath={webSiteData[id].thumbnailFile}
						title={webSiteData[id].title}
					/>
				);
			})}
		</div>
	);
}
