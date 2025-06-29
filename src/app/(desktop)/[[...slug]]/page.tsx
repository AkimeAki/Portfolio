import { WindowView } from "@/components/desktop/WindowView";
import { APPS_DATA } from "@/data/app";
import { portfolioCategoryMap } from "@/data/portfolio-def";
import { metaHead } from "@/libs/meta";
import { getPortfolio } from "@/libs/nilto";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
	const slug = (await params).slug ?? [];
	const appId = slug[0];
	const existApp = APPS_DATA.find((app) => app.id === appId);

	if (appId !== undefined && existApp === undefined) {
		notFound();
	}

	if (appId === undefined) {
		return metaHead({});
	}

	return metaHead({
		title: existApp?.title,
		description: `彩季のポートフォリオサイトの『${existApp?.title}』のページです。`
	});
}

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
