import { InlineStyle } from "@/components/commons/InlineStyle";
import { SetAppId } from "@/components/iframe/SetAppId";
import type { PropsWithChildren } from "react";

export const dynamic = "force-static";

export default function ({ children }: PropsWithChildren) {
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
						overflow-y: scroll;

						@media (max-width: 500px) {
							padding: 15px;
						}
					}
				`}
			/>
			<SetAppId id="pictures" />
			{children}
		</>
	);
}
