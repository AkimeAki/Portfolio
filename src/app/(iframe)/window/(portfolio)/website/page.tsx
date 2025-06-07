import { PortfolioListContent } from "@/components/iframe/PortfolioListContent";
import { getPortfolio } from "@/libs/nilto";
import { css } from "@kuma-ui/core";

export const dynamic = "error";

export default async function () {
	const webSiteData = await getPortfolio({ type: "website" });

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
			{webSiteData.map((data) => {
				return (
					<PortfolioListContent
						key={data._id}
						href={`/window/website/${data._id}`}
						hoverText="詳しく見る"
						data={data}
					/>
				);
			})}
		</div>
	);
}
