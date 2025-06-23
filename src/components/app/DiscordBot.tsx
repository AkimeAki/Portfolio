"use client";

import { PortfolioGrid } from "@/components/app/commons/PortfolioGrid";
import { getPortfolio } from "@/libs/nilto";

export function DiscordBot() {
	return (
		<PortfolioGrid
			hoverText="詳しく見る"
			data={() => getPortfolio({ type: "discord_bot" })}
			backFunction={() => {
				history.go(-1);
			}}
		/>
	);
}
