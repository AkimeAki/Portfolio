import Windows from "@/components/os/Windows";
import { seoHead } from "@/lib/seo";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = seoHead({
	title: "プロフィール"
});

export default function () {
	return <Windows defaultWindow="profile" />;
}
