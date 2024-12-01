import Windows from "@/components/os/Windows";
import { seoHead } from "@/lib/seo";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = seoHead({
	title: "プロフィール",
	description: "彩季です。"
});

export default function () {
	return <Windows defaultWindow="profile" />;
}
