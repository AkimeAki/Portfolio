"use client";

import { PortfolioGrid } from "@/components/app/commons/PortfolioGrid";
import { getPortfolio } from "@/libs/nilto";

export function VSCodeExtension() {
	return (
		<PortfolioGrid
			hoverText="詳しく見る"
			data={() => getPortfolio({ type: "vscode_extension" })}
			backFunction={() => {
				history.go(-1);
			}}
		/>
	);
}
