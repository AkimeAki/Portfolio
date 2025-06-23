"use client";

import { Portfolio } from "@/components/app/commons/Portfolio";
import { getPortfolio } from "@/libs/nilto";

export function DiscordBot() {
	return (
		<Portfolio
			hoverText="詳しく見る"
			data={() => getPortfolio({ type: "discord_bot" })}
			backFunction={() => {
				history.go(-1);
			}}
		/>
	);
}
