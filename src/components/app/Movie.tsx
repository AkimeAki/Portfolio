"use client";

import { PortfolioGrid } from "@/components/app/commons/PortfolioGrid";
import { getPortfolio } from "@/libs/nilto";

export function Movie() {
	return (
		<PortfolioGrid
			hoverText="詳しく見る"
			data={() => getPortfolio({ type: "movie" })}
			aspect="16/9"
			backFunction={() => {
				history.go(-1);
			}}
		/>
	);
}
