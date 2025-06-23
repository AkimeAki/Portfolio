"use client";

import { PortfolioGrid } from "@/components/app/commons/PortfolioGrid";
import { getPortfolio } from "@/libs/nilto";

export function Other() {
	return (
		<PortfolioGrid
			hoverText="詳しく見る"
			data={() => getPortfolio({ type: "other" })}
			backFunction={() => {
				history.go(-1);
			}}
		/>
	);
}
