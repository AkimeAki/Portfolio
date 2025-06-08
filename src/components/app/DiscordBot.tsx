"use client";

import { Portfolio } from "@/components/app/commons/Portfolio";
import { Suspense, useState } from "react";
import { getPortfolio } from "@/libs/nilto";
import { Loading } from "@/components/app/commons/Loading";

export function DiscordBot() {
	const [discordBotsData] = useState(() => getPortfolio({ type: "discord_bot" }));

	return (
		<Suspense fallback={<Loading />}>
			<Portfolio hoverText="詳しく見る" data={discordBotsData} />
		</Suspense>
	);
}
