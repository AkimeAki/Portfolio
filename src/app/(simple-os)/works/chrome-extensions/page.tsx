import { metaHead } from "@/libs/meta";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: "Chrome拡張機能制作依頼",
	description: "彩季です。"
});

export default function () {
	return (
		<div>
			<p>専用のChrome拡張機能を作ります。</p>
			<p>準備中</p>
		</div>
	);
}
