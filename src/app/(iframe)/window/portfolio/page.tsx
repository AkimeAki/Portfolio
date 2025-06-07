import { SetAppId } from "@/components/iframe/SetAppId";
import { PortfolioContent } from "./_PortfolioContent";
import { InlineStyle } from "@/components/commons/InlineStyle";

export const dynamic = "error";

export default function () {
	return (
		<>
			<InlineStyle
				css={`
					body {
						color: #e9e9e9;
						overflow: hidden;
					}
				`}
			/>
			<SetAppId id="portfolio" />
			<PortfolioContent />
		</>
	);
}
