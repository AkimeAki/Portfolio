import { InlineStyle } from "@/components/commons/InlineStyle";
import { IframeInit } from "@/components/iframe/IframeInit";
import LayoutInit from "@/components/LayoutInit";
import { metaHead, siteUrl } from "@/libs/meta";
import type { Metadata } from "next";

export const dynamic = "error";

export const metadata: Metadata = metaHead({
	noindex: true
});

export default function ({ children }: React.PropsWithChildren) {
	return (
		<>
			<InlineStyle
				css={`
					body {
						display: none;
						font-family: "DotGothic16";
					}

					body[data-iframe="true"] {
						display: block;
					}
				`}
			/>
			<LayoutInit />
			<IframeInit origin={siteUrl} />
			{children}
		</>
	);
}
