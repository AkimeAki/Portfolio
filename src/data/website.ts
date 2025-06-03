export const webSiteData: {
	[key: string]: {
		url: string;
		title: string;
		thumbnailFile: string;
		detail: string;
		credit: {
			position: string;
			name: string;
			url?: string;
		}[];
	};
} = {
	pixelgives: {
		url: "https://blog.shikiiro.net",
		thumbnailFile: "/website/techblog.png",
		title: "孅いウェブエンジニアブログ",
		detail: "自分の技術ブログです。技術に関する備忘録書いてます。",
		credit: [
			{
				position: "ウェブデザイン",
				name: "彩季"
			},
			{
				position: "ウェブサイト制作",
				name: "彩季"
			},
			{
				position: "記事執筆",
				name: "彩季"
			}
		]
	}
};
