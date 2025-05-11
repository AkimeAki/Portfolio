import { modelsData } from "@/data/models";
import { moviesData } from "@/data/movies";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const siteUrl = process.env.SITE_ROOT_URL ?? "";

	const staticPathList: string[] = [
		"",
		"/profile",
		"/portfolio",
		"/movies",
		"/models",
		"/pictures",
		"/links",
		"/faq",
		...Object.keys(modelsData).map((id) => {
			return `/models/${id}`;
		}),
		...Object.keys(moviesData).map((id) => {
			return `/movies/${id}`;
		})
	];

	const urlList = staticPathList.map((path) => {
		return {
			url: `${siteUrl}${path}`
		};
	});

	return [...urlList];
}
