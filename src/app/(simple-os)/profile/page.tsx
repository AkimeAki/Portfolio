import Windows from "@/components/os/Windows";
import { appList } from "@/libs/app-select";
import { metaHead } from "@/libs/meta";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: appList["profile"].pageTitle,
	isFullTitle: true,
	description: "彩季です。"
});

export default function () {
	return <Windows defaultWindow="profile" />;
}
