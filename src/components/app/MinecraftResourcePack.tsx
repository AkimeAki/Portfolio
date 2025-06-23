"use client";

import { PortfolioGrid } from "@/components/app/commons/PortfolioGrid";
import { getPortfolio } from "@/libs/nilto";

export function MinecraftResourcePack() {
	return (
		<PortfolioGrid
			hoverText="詳しく見る"
			data={() => getPortfolio({ type: "minecraft_resourcepack" })}
			backFunction={() => {
				history.go(-1);
			}}
		/>
	);
}
