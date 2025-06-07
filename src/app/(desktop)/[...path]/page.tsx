import { appData } from "@/data/app";
import { Desktop } from "../_Desktop";
import { notFound } from "next/navigation";
import { metaHead } from "@/libs/meta";

export const dynamic = "error";

interface PageProps {
	params: Promise<{ path: string[] }>;
}

export async function generateStaticParams() {
	return Object.entries(appData)
		.filter(([_, data]) => data.isEnabledPath)
		.map(([key]) => ({
			path: key.split("/")
		}));
}

export const generateMetadata = async ({ params }: PageProps) => {
	const path = (await params).path.join("/");

	return metaHead({
		title: appData[path].pageTitle,
		isFullTitle: true,
		canonicalPath: `/${path}`
	});
};

export default async function ({ params }: PageProps) {
	const path = (await params).path.join("/");

	return <Desktop defaultWindow={path} />;
}
