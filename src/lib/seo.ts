import type { Metadata } from "next";

interface Props {
	title?: string;
	description?: string;
	isFullTitle?: boolean;
}

export const pageTitle = "彩季.AkiOS";

export const seoHead = ({
	title,
	isFullTitle = false,
	description = "彩季のポートフォリオサイトです。"
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
				url: "https://aki.wtf/favicon.ico"
			}
		},
		twitter: {
			card: "summary",
			site: "@Akime_Aki",
			creator: "@Akime_Aki",
			images: "https://aki.wtf/favicon.ico"
		},
		icons: "https://aki.wtf/favicon.ico"
	};
};
