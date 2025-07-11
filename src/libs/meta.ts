import type { Metadata } from "next";

interface Props {
	title?: string;
	description?: string;
	isFullTitle?: boolean;
	baseTitle?: string;
	canonicalPath?: string;
	noindex?: boolean;
}

export const pageTitle = "彩季.AkiOS";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_ROOT_URL ?? "";

export const metaHead = ({
	title,
	isFullTitle = false,
	description = "彩季のポートフォリオサイトです。制作実績など載せています。このサイトにはいくつかおもしろ要素があるので楽しんで行ってください。",
	canonicalPath,
	baseTitle = pageTitle,
	noindex = false
}: Props): Metadata => {
	let metaTitle = pageTitle;
	if (title !== undefined) {
		if (isFullTitle) {
			metaTitle = title;
		} else {
			metaTitle = `${title} - ${baseTitle}`;
		}
	}

	return {
		title: metaTitle,
		description,
		authors: { name: "彩季", url: siteUrl },
		generator: "Next.js",
		keywords: ["彩季"],
		creator: "彩季",
		openGraph: {
			type: "website",
			url: process.env.SITEURL,
			title: title ?? pageTitle,
			description,
			siteName: pageTitle,
			images: {
				url: `${siteUrl}/wp-content/uploads/2000/8/32/favicon.png`
			}
		},
		twitter: {
			card: "summary",
			site: "@Akime_Aki",
			creator: "@Akime_Aki",
			images: `${siteUrl}/wp-content/uploads/2000/8/32/favicon.png`
		},
		icons: `${siteUrl}/favicon.ico`,
		alternates: {
			canonical: canonicalPath !== undefined ? `${siteUrl}${canonicalPath}` : undefined
		},
		robots: {
			index: !noindex
		}
	};
};
