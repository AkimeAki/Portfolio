import type { PortfolioData } from "@/types/portfolio";

export const modelsData: PortfolioData = {
	hiyoko: {
		modelPath: "/portfolio/models/hiyoko.glb",
		imagePath: "/portfolio/models/hiyoko.webp",
		title: "ひよこ",
		detail: "ひよこです。",
		type: "hobby"
	},
	piglin: {
		modelPath: "/portfolio/models/piglin.glb",
		imagePath: "/portfolio/models/piglin.webp",
		title: "かわいいピグリン",
		detail: "Minecraftのピグリンを女の子にする3Dテクスチャとして作成しました。",
		type: "hobby"
	},
	paperairplane: {
		modelPath: "/portfolio/models/paperairplane.glb",
		imagePath: "/portfolio/models/paperairplane.webp",
		title: "紙飛行機",
		detail: "Minecraftのトライデントを紙飛行機にする3Dテクスチャとして作成しました。",
		type: "hobby"
	}
};
