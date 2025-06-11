"use client";

import { Portfolio } from "@/components/app/commons/Portfolio";
import { getPortfolio } from "@/libs/nilto";

export function WebService() {
	return <Portfolio hoverText="詳しく見る" data={() => getPortfolio({ type: "webservice" })} />;
}
