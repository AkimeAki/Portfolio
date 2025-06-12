interface PortfolioCategoryData {
	[key: string]: {
		title: string;
		componentId: string;
	};
}

export const portfolioCategoryMap: PortfolioCategoryData = {
	root: {
		title: "制作実績",
		componentId: "PortfolioApps"
	},
	webservice: {
		title: "制作実績 / ウェブサービス",
		componentId: "WebService"
	},
	website: {
		title: "制作実績 / ウェブサイト",
		componentId: "WebSite"
	},
	illust: {
		title: "制作実績 / イラスト",
		componentId: "Illust"
	},
	model: {
		title: "制作実績 / 3Dモデル",
		componentId: "Model"
	},
	movie: {
		title: "制作実績 / ムービー",
		componentId: "Movie"
	},
	chrome_extension: {
		title: "制作実績 / Chrome 拡張機能",
		componentId: "ChromeExtension"
	},
	vscode_extension: {
		title: "制作実績 / VSCode 拡張機能",
		componentId: "VSCodeExtension"
	},
	minecraft_resourcepack: {
		title: "制作実績 / Minecraft リソースパック",
		componentId: "MinecraftResourcePack"
	},
	discord_bot: {
		title: "制作実績 / Discord Bot",
		componentId: "DiscordBot"
	},
	other: {
		title: "制作実績 / その他",
		componentId: "Other"
	}
};
