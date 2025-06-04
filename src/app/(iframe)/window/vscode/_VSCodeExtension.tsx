"use client";

import { PortfolioListContent } from "@/components/iframe/PortfolioListContent";
import { vscodeExtensionData } from "@/data/vscode";
import { css } from "@kuma-ui/core";

export function VSCodeExtension() {
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
			{Object.keys(vscodeExtensionData).map((id) => {
				return (
					<PortfolioListContent
						key={id}
						href={`/window/vscode/${id}`}
						hoverText="詳しく見る"
						imagePath={vscodeExtensionData[id].thumbnailFile}
						title={vscodeExtensionData[id].title}
						type={vscodeExtensionData[id].type}
					/>
				);
			})}
		</div>
	);
}
