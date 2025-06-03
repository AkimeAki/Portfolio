import { InlineStyle } from "@/components/commons/InlineStyle";
import { TerminalContent } from "./_TerminalContent";
import { SetAppId } from "@/components/iframe/SetAppId";

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
			<SetAppId id="terminal" />
			<TerminalContent />
		</>
	);
}
