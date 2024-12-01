import Windows from "@/components/os/Windows";
import { seoHead } from "@/lib/seo";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = seoHead({
	title: "よくあるかもしれない質問",
	description: "彩季に来るよくあるかもしれない質問が書いてあります。"
});

export default function () {
	return <Windows defaultWindow="faq" />;
}
