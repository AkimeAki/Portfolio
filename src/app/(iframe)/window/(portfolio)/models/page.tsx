import { PortfolioListContent } from "@/components/iframe/PortfolioListContent";
import { getPortfolio } from "@/libs/nilto";
import { css } from "@kuma-ui/core";

export const dynamic = "force-static";

export default async function () {
	const modelsData = await getPortfolio({ type: "3dmodel" });

	return (
		<div
			className={css`
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr;
				gap: 20px;

				@media (max-width: 800px) {
					grid-template-columns: 1fr 1fr 1fr;
				}
			`}
		>
			{modelsData.map((data) => {
				return (
					<PortfolioListContent
						key={data._id}
						href={`/window/models/${data._id}`}
						hoverText="詳しく見る"
						data={data}
					/>
				);
			})}
		</div>
	);
}
