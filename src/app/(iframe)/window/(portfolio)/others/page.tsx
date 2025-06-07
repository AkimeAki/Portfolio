import { PortfolioListContent } from "@/components/iframe/PortfolioListContent";
import { getPortfolio } from "@/libs/nilto";
import { css } from "@kuma-ui/core";

export const dynamic = "error";
export const dynamicParams = false;

export default async function () {
	const othersData = await getPortfolio({ type: "other" });

	return (
		<div
			className={css`
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				gap: 20px;

				@media (max-width: 800px) {
					grid-template-columns: 1fr 1fr;
				}
			`}
		>
			<PortfolioListContent baseHref="/window/others/" hoverText="詳しく見る" data={othersData} />
		</div>
	);
}
