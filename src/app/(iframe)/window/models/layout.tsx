import { InlineStyle } from "@/components/commons/InlineStyle";
import { SetAppId } from "@/components/iframe/SetAppId";
import { css } from "@kuma-ui/core";
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

						@media (max-width: 500px) {
							padding: 15px;
						}
					}
				`}
			/>
			<SetAppId id="models" />
			<h2
				className={css`
					margin-bottom: 30px;
					font-size: 25px;
					font-weight: bold;
					color: #edf8af;
				`}
			>
				作った3Dモデル集
			</h2>
			{children}
		</>
	);
}
