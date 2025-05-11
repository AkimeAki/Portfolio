import { SetEmojiPath } from "@/components/atoms/EmojiPath";
import { appData } from "@/data/app";
import { metaHead } from "@/libs/meta";
import type { Metadata } from "next";
import { PortfolioContent } from "./_PortfolioContent";
import { InlineStyle } from "@/components/atoms/InlineStyle";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: appData.portfolio.pageTitle,
	isFullTitle: true,
	description: "彩季が作ったものを置いています。",
	canonicalPath: "/portfolio"
});

export default function () {
	return (
		<>
			<InlineStyle
				css={`
					body {
						overflow-y: scroll;
					}
				`}
			/>
			<SetEmojiPath path="portfolio" />
			<PortfolioContent />
		</>
	);
}
