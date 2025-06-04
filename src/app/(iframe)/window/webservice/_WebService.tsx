"use client";

import { PortfolioListContent } from "@/components/iframe/PortfolioListContent";
import { webServiceData } from "@/data/webservice";
import { css } from "@kuma-ui/core";

export function WebService() {
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
			{Object.keys(webServiceData).map((id) => {
				return (
					<PortfolioListContent
						key={id}
						href={`/window/webservice/${id}`}
						hoverText="詳しく見る"
						imagePath={webServiceData[id].thumbnailFile}
						title={webServiceData[id].title}
					/>
				);
			})}
		</div>
	);
}
