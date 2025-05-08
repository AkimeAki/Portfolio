import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const siteUrl = process.env.SITE_ROOT_URL ?? "";

	const staticList = [
		{
			url: siteUrl
		},
		{
			url: `${siteUrl}/profile`
		},
		{
			url: `${siteUrl}/portfolio`
		}
	];

	return [...staticList];
}
