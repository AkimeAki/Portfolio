import { getListAllContents } from "@/libs/microcms";
import { Blog } from "@/types/blog";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const siteUrl = process.env.SITE_ROOT_URL ?? "";

	const staticList = [
		{
			url: `/`
		}
	];

	const blogList = (await getListAllContents<Blog>("blogs"))
		.map((post) => {
			return [
				{
					url: `${siteUrl}/blog/posts/${post.id}`
				}
			];
		})
		.flat();

	return [...staticList, ...blogList];
}
