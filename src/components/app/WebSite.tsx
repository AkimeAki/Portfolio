"use client";

import { PortfolioGrid } from "@/components/app/commons/PortfolioGrid";
import { getPortfolio } from "@/libs/nilto";

export function WebSite() {
	return (
		<PortfolioGrid
			hoverText="詳しく見る"
			data={() => getPortfolio({ type: "website" })}
			backFunction={() => {
				history.go(-1);
			}}
		/>
	);
}
