"use client";

import AppIcon from "@/components/desktop/AppIcon";
import { PortfolioListContent } from "@/components/iframe/PortfolioListContent";
import { chromeExtensionData } from "@/data/chrome";
import { css } from "@kuma-ui/core";

export function ChromeExtension() {
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
			{Object.keys(chromeExtensionData).map((id) => {
				return (
					<PortfolioListContent
						key={id}
						href={`/window/chrome/${id}`}
						hoverText="詳しく見る"
						data={chromeExtensionData[id]}
					/>
				);
			})}
		</div>
	);
}
