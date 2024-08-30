import Windows from "@/components/os/Windows";
import { seoHead } from "@/lib/seo";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = seoHead({
	title: "作ったもの",
	description: "彩季が作ったものを置いています。"
});

export default function () {
	return <Windows defaultWindow="portfolio" />;
}
