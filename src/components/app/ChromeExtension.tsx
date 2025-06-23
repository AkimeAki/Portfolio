"use client";

import { PortfolioGrid } from "@/components/app/commons/PortfolioGrid";
import { getPortfolio } from "@/libs/nilto";

export function ChromeExtension() {
	return (
		<PortfolioGrid
			hoverText="詳しく見る"
			data={() => getPortfolio({ type: "chrome_extension" })}
			backFunction={() => {
				history.go(-1);
			}}
		/>
	);
}
