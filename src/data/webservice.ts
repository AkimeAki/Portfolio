export const webServiceData: {
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
		url: "https://pixel.gives",
		thumbnailFile: "/portfolio/webservice/pixelgives.webp",
		title: "どっと屋",
		detail: "ドット絵の素材配布サイトを作りました。",
		credit: [
			{
				position: "企画",
				name: "彩季"
			},
			{
				position: "イラスト",
				name: "ろむ",
				url: "https://x.com/____stagnate"
			},
			{
				position: "中国語翻訳",
				name: "ノブ"
			},
			{
				position: "ウェブデザイン",
				name: "彩季"
			},
			{
				position: "ウェブサイト制作",
				name: "彩季"
			}
		]
	}
};
