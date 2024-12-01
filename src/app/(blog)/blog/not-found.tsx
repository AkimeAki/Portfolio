import { blogTitle } from "@/define";
import { metaHead } from "@/libs/meta";
import type { Metadata } from "next";

export const metadata: Metadata = metaHead({
	title: "ページが見つかりませんでした",
	baseTitle: blogTitle
});

export default function (): JSX.Element {
	return <p>ページが見つかりませんでした。</p>;
}
