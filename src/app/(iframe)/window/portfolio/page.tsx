import { InlineStyle } from "@/components/commons/InlineStyle";
import { PortfolioContent } from "@/components/iframe/PortfolioContent";
import { SetAppId } from "@/components/iframe/SetAppId";

export const dynamic = "force-dynamic";

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
