import { InlineStyle } from "@/components/commons/InlineStyle";
import { TerminalContent } from "./_TerminalContent";
import { SetAppId } from "@/components/iframe/SetAppId";

export const dynamic = "error";
export const dynamicParams = false;

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
