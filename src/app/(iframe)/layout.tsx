import { InlineStyle } from "@/components/atoms/InlineStyle";
import LayoutInit from "@/components/LayoutInit";
import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import type { Metadata } from "next";

export const dynamic = "force-static";

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
					}

					body[data-iframe="true"] {
						display: block;
					}
				`}
			/>
			<LayoutInit type="os" />
			<main
				className={css`
					body[data-layout="os"] & {
						font-family: "BestTenCRT";
					}
				`}
			>
				{children}
			</main>
		</>
	);
}
