import { SetEmojiPath } from "@/components/atoms/EmojiPath";
import { appList } from "@/libs/app-select";
import { metaHead } from "@/libs/meta";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: appList.faq.pageTitle,
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
