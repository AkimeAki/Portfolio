import { InlineStyle } from "@/components/commons/InlineStyle";
import { IntroContent } from "./_IntroContent";
import { SetAppId } from "@/components/iframe/SetAppId";

export const dynamic = "error";

export default function () {
	return (
		<>
			<InlineStyle
				css={`
					body {
						background-color: #f0eef4;
					}
				`}
			/>
			<SetAppId id="intro" />
			<IntroContent />
		</>
	);
}
