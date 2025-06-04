import { InlineStyle } from "@/components/commons/InlineStyle";
import { VSCodeExtension } from "./_VSCodeExtension";

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
			<VSCodeExtension />
		</>
	);
}
