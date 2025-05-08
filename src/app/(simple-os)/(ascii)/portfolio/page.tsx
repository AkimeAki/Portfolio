import { SetEmojiPath } from "@/components/atoms/EmojiPath";
import { appList } from "@/libs/app-select";
import { metaHead } from "@/libs/meta";
import type { Metadata } from "next";
import { PortfolioContent } from "./_PortfolioContent";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: appList.portfolio.pageTitle,
	isFullTitle: true,
	description: "彩季が作ったものを置いています。"
});

export default function () {
	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: /* css */ `
						body {
							overflow-y: scroll;
						}
					`
				}}
			/>
			<SetEmojiPath path="portfolio" />
			<PortfolioContent />
		</>
	);
}
