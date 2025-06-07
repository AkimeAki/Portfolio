import type { MetadataRoute } from "next";

export const dynamic = "error";
export const dynamicParams = false;

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
		"/faq"
	];

	const urlList = staticPathList.map((path) => {
		return {
			url: `${siteUrl}${path}`
		};
	});

	return [...urlList];
}
