"use client";

import { PortfolioListContent } from "@/components/iframe/PortfolioListContent";
import { picturesData } from "@/data/pictures";
import { vscodeExtensionData } from "@/data/vscode";
import { css } from "@kuma-ui/core";

export function PicturesContent() {
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
			{Object.keys(picturesData).map((id) => {
				return (
					<PortfolioListContent
						key={id}
						href={`/window/pictures/${id}`}
						hoverText="詳しく見る"
						data={picturesData[id]}
					/>
				);
			})}
		</div>
	);
}
