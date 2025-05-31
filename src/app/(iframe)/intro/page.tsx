import { InlineStyle } from "@/components/atoms/InlineStyle";
import { IntroContent } from "./_IntroContent";

export const dynamic = "force-static";

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
			<IntroContent />
		</>
	);
}
