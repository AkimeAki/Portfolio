"use client";

import { PortfolioGrid } from "@/components/app/commons/PortfolioGrid";
import { getPortfolio } from "@/libs/nilto";

export function Illust() {
	return (
		<PortfolioGrid
			hoverText="詳しく見る"
			data={() => getPortfolio({ type: "illust" })}
			backFunction={() => {
				history.go(-1);
			}}
		/>
	);
}
