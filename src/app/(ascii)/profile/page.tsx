import { SetEmojiPath } from "@/components/atoms/EmojiPath";
import { appData } from "@/data/app";
import { metaHead } from "@/libs/meta";
import type { Metadata } from "next";
import { ProfileContent } from "./_ProfileContent";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: appData.profile.pageTitle,
	isFullTitle: true,
	description: "彩季です。"
});

export default function () {
	return (
		<>
			<SetEmojiPath path="profile" />
			<ProfileContent />
		</>
	);
}
