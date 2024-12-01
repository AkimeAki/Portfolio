import type { Metadata } from "next";

interface Props {
	title?: string;
	description?: string;
	isFullTitle?: boolean;
	canonicalPath?: string;
}

export const pageTitle = "彩季.AkiOS";
const siteUrl = process.env.SITE_ROOT_URL ?? "";

export const metaHead = ({
	title,
	isFullTitle = false,
	description = "彩季のポートフォリオサイトです。",
	canonicalPath
}: Props): Metadata => {
	let metaTitle = pageTitle;
	if (title !== undefined) {
		if (isFullTitle) {
			metaTitle = title;
		} else {
			metaTitle = `${title} - ${pageTitle}`;
		}
	}

	return {
		title: metaTitle,
		description,
		authors: { name: "彩季", url: siteUrl },
		generator: "nextjs",
		keywords: ["彩季"],
		creator: "彩季",
		openGraph: {
			type: "website",
			url: process.env.SITEURL,
			title: title ?? pageTitle,
			description,
			siteName: pageTitle,
			images: {
				url: `${siteUrl}/favicon.png`
			}
		},
		twitter: {
			card: "summary",
			site: "@Akime_Aki",
			creator: "@Akime_Aki",
			images: `${siteUrl}/favicon.png`
		},
		icons: `${siteUrl}/favicon.ico`,
		alternates: {
			canonical: canonicalPath !== undefined ? `${siteUrl}${canonicalPath}` : undefined
		}
	};
};
