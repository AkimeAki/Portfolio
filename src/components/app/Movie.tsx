"use client";

import { Portfolio } from "@/components/app/commons/Portfolio";
import { getPortfolio } from "@/libs/nilto";

export function Movie() {
	return <Portfolio hoverText="詳しく見る" data={() => getPortfolio({ type: "movie" })} aspect="16/9" />;
}
