import Windows from "@/components/os/Windows";
import { metaHead } from "@/libs/meta";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: "作ったもの",
	description: "彩季が作ったものを置いています。"
});

export default function () {
	return <Windows defaultWindow="portfolio" />;
}
