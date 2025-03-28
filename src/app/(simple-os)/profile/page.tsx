import { SetEmojiPath } from "@/components/atoms/EmojiPath";
import { ProfileContent } from "@/components/os/app/Profile";
import { appList } from "@/libs/app-select";
import { metaHead } from "@/libs/meta";
import { Metadata } from "next";
import { css } from "@kuma-ui/core";

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
			<div
				className={css`
					container-type: inline-size;
				`}
			>
				<ProfileContent />
			</div>
		</>
	);
}
