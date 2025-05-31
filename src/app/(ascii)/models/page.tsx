import { appData } from "@/data/app";
import { metaHead } from "@/libs/meta";
import type { Metadata } from "next";
import { ModelsContent } from "./_ModelsContent";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: appData.models.pageTitle,
	isFullTitle: true,
	description: "彩季が作成した3Dモデル集です。",
	canonicalPath: "/models"
});

export default function () {
	return (
		<>
			<ModelsContent />
		</>
	);
}
