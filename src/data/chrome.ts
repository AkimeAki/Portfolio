export const chromeExtensionData: {
	[key: string]: {
		url: string;
		title: string;
		thumbnailFile: string;
		detail: string;
		type: "work" | "hobby";
		client?: {
			name: string;
			url?: string;
		};
		credit: {
			position: string;
			name: string;
			url?: string;
		}[];
	};
} = {
	gasprint: {
		url: "https://chromewebstore.google.com/detail/gacknebdjgldkfjibmbkkdbkihomoiaj",
		thumbnailFile: "/portfolio/chrome/gasprint.webp",
		title: "Google Apps Script製ページ用印刷",
		detail: "Google Apps Script製のウェブページを正常に印刷できるようにするChrome拡張機能です。",
		type: "work",
		client: {
			name: "匿名"
		},
		credit: [
			{
				position: "拡張機能制作",
				name: "彩季"
			},
			{
				position: "ロゴ制作",
				name: "ろむ",
				url: "https://x.com/____stagnate"
			}
		]
	},
	changeformat: {
		url: "https://chromewebstore.google.com/detail/kinldkcfdohpgpedpglhcfjenoaklhkk",
		thumbnailFile: "/portfolio/chrome/changeformat.webp",
		title: "拡張子を変更して画像を保存",
		detail: "ウェブ上で画像の拡張子（フォーマット）を変換した上で保存することができる拡張機能です。",
		type: "work",
		client: {
			name: "匿名"
		},
		credit: [
			{
				position: "拡張機能制作",
				name: "彩季"
			},
			{
				position: "ロゴ制作",
				name: "ろむ",
				url: "https://x.com/____stagnate"
			}
		]
	}
};
