import { SetEmojiPath } from "@/components/atoms/EmojiPath";
import { PortfolioContent } from "@/components/os/app/Portfolio";
import { appList } from "@/libs/app-select";
import { metaHead } from "@/libs/meta";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: appList["portfolio"].pageTitle,
	isFullTitle: true,
	description: "彩季が作ったものを置いています。"
});

export default function () {
	return (
		<>
			<SetEmojiPath path="portfolio" />
			<PortfolioContent />
		</>
	);
}
