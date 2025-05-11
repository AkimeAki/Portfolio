import { SetEmojiPath } from "@/components/atoms/EmojiPath";
import { InlineStyle } from "@/components/atoms/InlineStyle";
import { appData } from "@/data/app";
import { metaHead } from "@/libs/meta";
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
			<SetEmojiPath path="models" />
			{children}
		</>
	);
}
