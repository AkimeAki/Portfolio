import { portfolioCategoryData } from "@/data/portfolio";
import { Desktop } from "../../_Desktop";
import { appData } from "@/data/app";
import { metaHead } from "@/libs/meta";

export const dynamic = "error";
export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ category: string }[]> {
	return Object.keys(portfolioCategoryData)
		.filter((category) => {
			return category !== "root";
		})
		.map((category) => {
			return {
				category: category
			};
		});
}

interface PageProps {
	params: Promise<{ category: string }>;
}

export const generateMetadata = async ({ params }: PageProps) => {
	const { category } = await params;

	return metaHead({
		title: appData.portfolio.pageTitle,
		isFullTitle: true,
		canonicalPath: `/portfolio/${category}`
	});
};

export default function () {
	return <Desktop defaultWindow="portfolio" />;
}
