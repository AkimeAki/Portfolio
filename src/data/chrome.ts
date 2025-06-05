import type { PortfolioData } from "@/types/portfolio";

export const chromeExtensionData: PortfolioData = {
	gasprint: {
		url: "https://chromewebstore.google.com/detail/gacknebdjgldkfjibmbkkdbkihomoiaj",
		imagePath: "/portfolio/chrome/gasprint.webp",
		title: "Google Apps Script製ページ用印刷",
		detail: "Google Apps Script製のウェブページを正常に印刷できるようにするChrome拡張機能です。",
		type: "work",
		client: {
			name: "非公開"
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
		imagePath: "/portfolio/chrome/changeformat.webp",
		title: "拡張子を変更して画像を保存",
		detail: "ウェブ上で画像の拡張子（フォーマット）を変換した上で保存することができる拡張機能です。",
		type: "work",
		client: {
			name: "非公開"
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
