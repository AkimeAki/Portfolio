import { SetEmojiPath } from "@/components/atoms/EmojiPath";
import { appList } from "@/libs/app-select";
import { metaHead } from "@/libs/meta";
import { Metadata } from "next";
import { ProfileContent } from "./_ProfileContent";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: appList["profile"].pageTitle,
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
