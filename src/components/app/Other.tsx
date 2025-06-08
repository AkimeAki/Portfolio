"use client";

import { Portfolio } from "@/components/app/commons/Portfolio";
import { Suspense, useState } from "react";
import { getPortfolio } from "@/libs/nilto";
import { Loading } from "@/components/app/commons/Loading";

export function Other() {
	const [othersData] = useState(() => getPortfolio({ type: "other" }));

	return (
		<Suspense fallback={<Loading />}>
			<Portfolio hoverText="詳しく見る" data={othersData} />
		</Suspense>
	);
}
