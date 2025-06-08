"use client";

import { Portfolio } from "@/components/app/commons/Portfolio";
import { Suspense, useState } from "react";
import { getPortfolio } from "@/libs/nilto";
import { Loading } from "@/components/app/commons/Loading";

export function Movie() {
	const [moviesData] = useState(() => getPortfolio({ type: "movie" }));

	return (
		<Suspense fallback={<Loading />}>
			<Portfolio hoverText="詳しく見る" data={moviesData} aspect="16/9" />
		</Suspense>
	);
}
