import { WindowView } from "@/components/desktop/WindowView";
import { APPS_DATA } from "@/data/app";
import { portfolioCategoryMap } from "@/data/portfolio-def";
import { metaHead } from "@/libs/meta";
import { getPortfolio } from "@/libs/nilto";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { load } from "cheerio";

export const dynamic = "force-dynamic";

async function getData(slug: string[]) {
	let appId: string | undefined = undefined;
	let portfolioCategoryId: string | undefined = undefined;
	let portfolioItemId: string | undefined = undefined;
	let portfolioItemTitle: string | undefined = undefined;
	let portfolioItemDetail: string | undefined = undefined;

	const isExistApp = APPS_DATA.find((app) => app.id === slug[0]);
	if (appId !== undefined && isExistApp === undefined) {
		return undefined;
	}

	appId = slug[0];

	if (appId === "portfolio") {
		const category = slug[1];
		portfolioCategoryId = category;
		if (category === "item") {
			const id = slug[2];
			if (id === undefined) {
				return undefined;
			}

			const portfolio = await getPortfolio({ id });
			if (portfolio.length === 0) {
				return undefined;
			}

			portfolioItemId = id;
			portfolioItemTitle = portfolio[0]?.title;
			portfolioItemDetail = portfolio[0]?.detail;
		} else {
			if (
				category !== undefined &&
				(category === "root" || !Object.keys(portfolioCategoryMap).includes(category))
			) {
				return undefined;
			}
		}
	}

	return {
		appId,
		portfolioCategoryId,
		portfolioItemId,
		portfolioItemTitle,
		portfolioItemDetail
	};
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
	const slug = (await params).slug ?? [];
	const data = await getData(slug);
	if (data === null) {
		notFound();
	}

	let title: string | undefined = "";
	let description: string | undefined = "";

	if (data?.portfolioCategoryId !== undefined) {
		title = portfolioCategoryMap[data.portfolioCategoryId]?.title;

		if (data.portfolioItemTitle !== undefined) {
			title = `${data.portfolioItemTitle} - ポートフォリオ`;
		}

		if (data.portfolioItemDetail !== undefined) {
			const $ = load(data.portfolioItemDetail);
			const body = $("body").text().trim();

			description = body;
		}
	} else {
		const existApp = APPS_DATA.find((app) => app.id === data?.appId);
		title = existApp?.title;
	}

	return metaHead({
		title: title,
		description: description ?? `彩季のポートフォリオサイトの『${title}』のページです。`
	});
}

export default async function ({ params }: { params: Promise<{ slug?: string[] }> }) {
	const slug = (await params).slug ?? [];
	const data = await getData(slug);
	if (data === undefined) {
		notFound();
	}

	return <WindowView defaultAppId={slug[0]} />;
}
