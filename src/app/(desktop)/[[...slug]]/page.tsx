import { WindowView } from "@/components/desktop/WindowView";
import { APPS_DATA } from "@/data/app";
import { portfolioCategoryMap } from "@/data/portfolio-def";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ({ params }: { params: Promise<{ slug?: string[] }> }) {
	const slug = (await params).slug ?? [];

	const appId = slug[0];
	const isExistApp = APPS_DATA.find((app) => app.id === appId);
	if (appId !== undefined && isExistApp === undefined) {
		notFound();
	}

	if (appId === "portfolio") {
		const category = slug[1];
		if (category !== undefined && (category === "root" || !Object.keys(portfolioCategoryMap).includes(category))) {
			notFound();
		}
	}

	return <WindowView defaultAppId={slug[0]} />;
}
