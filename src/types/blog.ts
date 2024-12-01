import type { MicroCMSListContent, MicroCMSImage } from "microcms-js-sdk";

export interface Category {
	name: string;
	color: string;
}

export interface Blog {
	title: string;
	contents: string;
	thumbnail?: MicroCMSImage;
	category?: Category & MicroCMSListContent;
	tags: Array<
		{
			name: string;
			image?: MicroCMSImage;
		} & MicroCMSListContent
	>;
}
