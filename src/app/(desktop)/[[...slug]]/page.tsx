import { WindowView } from "@/components/desktop/WindowView";
import { APPS_DATA } from "@/data/app";
import { portfolioCategoryMap } from "@/data/portfolio-def";
import { getPortfolio } from "@/libs/nilto";
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
		if (category === "item") {
			const id = slug[2];
			if (id === undefined) {
				notFound();
			}

			const portfolio = await getPortfolio({ id });
			if (portfolio.length === 0) {
				notFound();
			}
		} else {
			if (
				category !== undefined &&
				(category === "root" || !Object.keys(portfolioCategoryMap).includes(category))
			) {
				notFound();
			}
		}
	}

	return <WindowView defaultAppId={slug[0]} />;
}
