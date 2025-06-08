import type { ComponentType } from "react";
import { Loading } from "@/components/app/commons/Loading";
import dynamic from "next/dynamic";

const PortfolioApps = dynamic(() => import("@/components/app/PortfolioApps").then((mod) => mod.PortfolioApps), {
	loading: () => <Loading />
});
const WebSite = dynamic(() => import("@/components/app/WebSite").then((mod) => mod.WebSite), {
	loading: () => <Loading />
});

const WebService = dynamic(() => import("@/components/app/WebService").then((mod) => mod.WebService), {
	loading: () => <Loading />
});

const Illust = dynamic(() => import("@/components/app/Illust").then((mod) => mod.Illust), {
	loading: () => <Loading />
});

const Movie = dynamic(() => import("@/components/app/Movie").then((mod) => mod.Movie), {
	loading: () => <Loading />
});

const Model = dynamic(() => import("@/components/app/Model").then((mod) => mod.Model), {
	loading: () => <Loading />
});

const ChromeExtension = dynamic(() => import("@/components/app/ChromeExtension").then((mod) => mod.ChromeExtension), {
	loading: () => <Loading />
});

const VSCodeExtension = dynamic(() => import("@/components/app/VSCodeExtension").then((mod) => mod.VSCodeExtension), {
	loading: () => <Loading />
});

const MinecraftResourcePack = dynamic(
	() => import("@/components/app/MinecraftResourcePack").then((mod) => mod.MinecraftResourcePack),
	{
		loading: () => <Loading />
	}
);

const DiscordBot = dynamic(() => import("@/components/app/DiscordBot").then((mod) => mod.DiscordBot), {
	loading: () => <Loading />
});

const Other = dynamic(() => import("@/components/app/Other").then((mod) => mod.Other), {
	loading: () => <Loading />
});

interface PortfolioCategoryData {
	[key: string]: {
		title: string;
		component: ComponentType;
	};
}

export const portfolioCategoryData: PortfolioCategoryData = {
	root: {
		title: "制作実績",
		component: PortfolioApps
	},
	webservice: {
		title: "制作実績 / ウェブサービス",
		component: WebService
	},
	website: {
		title: "制作実績 / ウェブサイト",
		component: WebSite
	},
	illust: {
		title: "制作実績 / イラスト",
		component: Illust
	},
	model: {
		title: "制作実績 / 3Dモデル",
		component: Model
	},
	movie: {
		title: "制作実績 / ムービー",
		component: Movie
	},
	chrome_extension: {
		title: "制作実績 / Chrome 拡張機能",
		component: ChromeExtension
	},
	vscode_extension: {
		title: "制作実績 / VSCode 拡張機能",
		component: VSCodeExtension
	},
	minecraft_resourcepack: {
		title: "制作実績 / Minecraft リソースパック",
		component: MinecraftResourcePack
	},
	discord_bot: {
		title: "制作実績 / Discord Bot",
		component: DiscordBot
	},
	other: {
		title: "制作実績 / その他",
		component: Other
	}
};
