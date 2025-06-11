"use client";

import { Portfolio } from "@/components/app/commons/Portfolio";
import { getPortfolio } from "@/libs/nilto";

export function Model() {
	return <Portfolio hoverText="詳しく見る" data={() => getPortfolio({ type: "3dmodel" })} />;
}
