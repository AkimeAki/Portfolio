import Windows from "@/components/os/Windows";
import { metaHead } from "@/libs/meta";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: "プロフィール",
	description: "彩季です。"
});

export default function () {
	return <Windows defaultWindow="profile" />;
}
