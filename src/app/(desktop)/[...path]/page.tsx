import { appData } from "@/data/app";
import { Desktop } from "../_Desktop";
import { metaHead } from "@/libs/meta";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface PageProps {
	params: Promise<{ path: string[] }>;
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

	if (!Object.keys(appData).includes(path)) {
		notFound();
	}

	return <Desktop defaultWindow={path} />;
}
