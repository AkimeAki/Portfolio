"use client";

import { Portfolio } from "@/components/app/commons/Portfolio";
import { getPortfolio } from "@/libs/nilto";

export function Illust() {
	return <Portfolio hoverText="詳しく見る" data={() => getPortfolio({ type: "illust" })} />;
}
