import { InlineStyle } from "@/components/atoms/InlineStyle";
import { TerminalContent } from "./_TerminalContent";

export const dynamic = "force-static";

export default function () {
	return (
		<>
			<InlineStyle
				css={`
					body {
						background-color: #0c0c0c;
					}
				`}
			/>
			<TerminalContent />
		</>
	);
}
