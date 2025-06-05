import type { PortfolioData } from "@/types/portfolio";

export const vscodeExtensionData: PortfolioData = {
	astrocss: {
		url: "https://marketplace.visualstudio.com/items?itemName=AkimeAki.astro-css-template-literals-highlight",
		imagePath: "/portfolio/vscode/astrocss.webp",
		title: "Astro CSS Template Literals Highlight",
		detail: "AstroでCSSテンプレートリテラル（css``）を使用した際にCSSをハイライトするVSCode拡張機能です。",
		type: "hobby",
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
	devcontainer: {
		url: "https://marketplace.visualstudio.com/items?itemName=AkimeAki.astro-css-template-literals-highlight",
		imagePath: "/portfolio/vscode/devcontainer.png",
		title: "DevContainer Install Local Extensions",
		detail: "開発コンテナにローカルにインストールされている拡張機能をインストールする設定「dev.containers.defaultExtensions」にローカルにインストールされている全ての拡張機能を自動的に設定するVSCode拡張機能です。",
		type: "hobby",
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
