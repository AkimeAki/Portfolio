import { SetAppId } from "@/components/iframe/SetAppId";
import { InlineStyle } from "@/components/commons/InlineStyle";
import { WebSite } from "./_WebSite";

export const dynamic = "force-static";

export default function () {
	return (
		<>
			<InlineStyle
				css={`
					body {
						color: #e9e9e9;
					}
				`}
			/>
			<SetAppId id="website" />
			<WebSite />
		</>
	);
}
