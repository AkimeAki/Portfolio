import Windows from "@/components/os/Windows";
import { metaHead } from "@/libs/meta";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: "よくあるかもしれない質問",
	description: "彩季に来るよくあるかもしれない質問が書いてあります。"
});

export default function () {
	return <Windows defaultWindow="faq" />;
}
