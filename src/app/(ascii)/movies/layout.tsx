import { SetEmojiPath } from "@/components/atoms/EmojiPath";
import { InlineStyle } from "@/components/atoms/InlineStyle";
import { appData } from "@/data/app";
import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({});

export default function ({ children }: PropsWithChildren) {
	return (
		<>
			<InlineStyle
				css={`
					body {
						overflow-y: scroll;
					}
				`}
			/>
			<SetEmojiPath path="movies" />
			<h2
				className={css`
					margin-bottom: 30px;
					font-size: 25px;
					font-weight: bold;
					color: #edf8af;
				`}
			>
				作ったムービー集
			</h2>
			{children}
		</>
	);
}
