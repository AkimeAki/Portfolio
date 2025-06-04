import { picturesData } from "@/data/pictures";
import { css } from "@kuma-ui/core";
import { InlineStyle } from "@/components/commons/InlineStyle";
import { SetAppId } from "@/components/iframe/SetAppId";
import { PortfolioListContent } from "@/components/iframe/PortfolioListContent";

export const dynamic = "force-static";

export default function () {
	return (
		<>
			<InlineStyle
				css={`
					body {
						max-width: 1100px;
						width: 100%;
						margin: 0 auto;
						padding: 30px;
						height: auto;
						color: #e9e9e9;

						@media (max-width: 500px) {
							padding: 15px;
						}
					}
				`}
			/>
			<SetAppId id="pictures" />
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
				{picturesData.map((data, index) => {
					let hoverText = "アクセスする";
					if (data.url.startsWith("https://www.pixiv.net/")) {
						hoverText = "Pixivで見る";
					}

					return (
						<PortfolioListContent
							key={index}
							href={data.url}
							hoverText={hoverText}
							target="_blank"
							imagePath={data.file}
							title={data.title}
						/>
					);
				})}
			</div>
		</>
	);
}
