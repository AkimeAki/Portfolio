import type { Metadata } from "next";

interface Props {
	title?: string;
	description?: string;
	isFullTitle?: boolean;
}

export const seoHead = ({
	title,
	isFullTitle = false,
	description = "彩季のポートフォリオサイトです。"
}: Props): Metadata => {
	const pageTitle = "彩季.AkiOS";

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
		authors: { name: "彩季", url: "https://aki.wtf" },
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
				url: `${process.env.SITEURL}/favicon.png`
			}
		},
		twitter: {
			card: "summary",
			site: "@Akime_Aki",
			creator: "@Akime_Aki",
			images: `${process.env.SITEURL}/favicon.png`
		},
		icons: `${process.env.SITEURL}/favicon.png`,
		manifest: `${process.env.SITEURL}/manifest.json`
	};
};
