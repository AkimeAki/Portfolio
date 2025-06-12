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

export const componentMap: { [key: string]: ComponentType } = {
	PortfolioApps,
	WebService,
	WebSite,
	Illust,
	Model,
	Movie,
	ChromeExtension,
	VSCodeExtension,
	MinecraftResourcePack,
	DiscordBot,
	Other
};
