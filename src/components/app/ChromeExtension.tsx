"use client";

import { Portfolio } from "@/components/app/commons/Portfolio";
import { getPortfolio } from "@/libs/nilto";

export function ChromeExtension() {
	return (
		<Portfolio
			hoverText="詳しく見る"
			data={() => getPortfolio({ type: "chrome_extension" })}
			backFunction={() => {
				history.go(-1);
			}}
		/>
	);
}
