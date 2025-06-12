"use client";

import { Portfolio } from "@/components/app/commons/Portfolio";
import { getPortfolio } from "@/libs/nilto";

export function MinecraftResourcePack() {
	return (
		<Portfolio
			hoverText="詳しく見る"
			data={() => getPortfolio({ type: "minecraft_resourcepack" })}
			linkText="ダウンロードする"
		/>
	);
}
