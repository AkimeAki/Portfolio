import Windows from "@/components/os/Windows";
import { appList } from "@/libs/app-select";
import { metaHead } from "@/libs/meta";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: appList["faq"].pageTitle,
	isFullTitle: true,
	description: "彩季に来るよくあるかもしれない質問が書いてあります。"
});

export default function () {
	return <Windows defaultWindow="faq" />;
}
