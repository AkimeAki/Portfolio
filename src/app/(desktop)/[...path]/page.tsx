import { appData } from "@/data/app";
import { Desktop } from "../_Desktop";
import { notFound } from "next/navigation";
import { metaHead } from "@/libs/meta";
import type { Metadata } from "next";

export const dynamic = "force-static";

interface Props {
	params: {
		path: string[];
	};
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const path = params.path.join("/");

	if (!Object.keys(appData).includes(path) || !appData[path].isEnabledPath) {
		notFound();
	}

	return metaHead({
		title: appData[path].pageTitle,
		isFullTitle: true,
		canonicalPath: `/${path}`
	});
};

export default function ({ params }: Props) {
	const path = params.path.join("/");

	if (!Object.keys(appData).includes(path)) {
		notFound();
	}

	return <Desktop defaultWindow={path} />;
}
