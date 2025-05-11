import { appData } from "@/data/app";
import { metaHead } from "@/libs/meta";
import type { Metadata } from "next";
import { MoviesContent } from "./_MoviesContent";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: appData.movies.pageTitle,
	isFullTitle: true,
	description: "彩季が作成した動画集です。"
});

export default function () {
	return (
		<>
			<MoviesContent />
		</>
	);
}
