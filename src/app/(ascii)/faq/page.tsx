import { SetEmojiPath } from "@/components/atoms/EmojiPath";
import { appData } from "@/data/app";
import { metaHead } from "@/libs/meta";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: appData.faq.pageTitle,
	isFullTitle: true,
	description: "彩季に来るよくあるかもしれない質問が書いてあります。"
});

export default function () {
	return (
		<>
			<SetEmojiPath path="faq" />
			<p>Q. 質問はありますか。</p>
			<p>A. ありません。</p>
		</>
	);
}
