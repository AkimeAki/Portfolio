import { metaHead } from "@/libs/meta";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: "動画編集依頼",
	description: "彩季です。"
});

export default function () {
	return <div>準備中</div>;
}
