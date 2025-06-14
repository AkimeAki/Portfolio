import dynamic from "next/dynamic";
import { Loading } from "@/components/app/commons/Loading";
import type { ComponentType } from "react";
import { AppIcon } from "@/components/window/AppIcon";

const Profile = dynamic(() => import("@/components/app/Profile").then((mod) => mod.Profile), {
	loading: () => <Loading />
});

const Welcome = dynamic(() => import("@/components/app/Welcome").then((mod) => mod.Welcome), {
	loading: () => <Loading />
});

const Portfolio = dynamic(() => import("@/components/app/Portfolio").then((mod) => mod.Portfolio), {
	loading: () => <Loading />
});

const Terminal = dynamic(() => import("@/components/app/Terminal").then((mod) => mod.Terminal), {
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

const Blog = dynamic(() => import("@/components/app/Blog").then((mod) => mod.Blog), {
	loading: () => <Loading />
});

const DotYa = dynamic(() => import("@/components/app/DotYa").then((mod) => mod.DotYa), {
	loading: () => <Loading />
});

type WindowContent =
	| {
			type: "iframe";
			src: string;
	  }
	| {
			type: "component";
			component: ComponentType;
	  };

export interface App {
	id: string;
	title?: string;
	icon?: React.ReactNode;
	url?: {
		enableChangePath?: boolean;
		path?: string;
	};
	window: {
		size?: {
			width?: number;
			height?: number;
			enabledResize?: boolean;
			responsive?: {
				[mediaQuery: string]: {
					width?: number;
					height?: number;
				};
			};
		};
		fullScreen?: {
			isFullScreen?: boolean;
			isMobile?: boolean;
		};
		pin?: {
			isPinned: boolean;
			isViewButton: boolean;
		};
		position?: {
			top?: number;
			bottom?: number;
			left?: number;
			right?: number;
		};
		content: WindowContent;
	};
}

export const APPS_DATA: App[] = [
	{
		id: "profile",
		title: "プロフィール",
		icon: <AppIcon imagePath="/app/aki.webp" alt="彩季" isPixel={false} />,
		window: {
			size: {
				enabledResize: true
			},
			content: {
				type: "component",
				component: Profile
			}
		}
	},
	{
		id: "welcome",
		title: "Welcome.txt",
		icon: <AppIcon imagePath="/app/letter.png" alt="手紙" />,
		url: {
			enableChangePath: false
		},
		window: {
			size: {
				width: 426,
				height: 220,
				responsive: {
					"(max-width: 720px)": {
						width: 326,
						height: 150
					}
				}
			},
			position: {
				bottom: 80,
				right: 10
			},
			fullScreen: {
				isMobile: false
			},
			content: {
				type: "component",
				component: Welcome
			}
		}
	},
	{
		id: "portfolio",
		title: "作ったもの",
		icon: <AppIcon imagePath="/app/folder-open.png" alt="フォルダ" />,
		window: {
			content: {
				type: "component",
				component: Portfolio
			},
			fullScreen: {
				isFullScreen: true
			}
		}
	},
	{
		id: "terminal",
		title: "ターミナル",
		icon: <AppIcon imagePath="/app/terminal.png" alt="ターミナル" />,
		url: {
			enableChangePath: false
		},
		window: {
			content: {
				type: "component",
				component: Terminal
			}
		}
	},
	{
		id: "movie",
		title: "映像",
		icon: <AppIcon imagePath="/app/tv.png" alt="テレビ" />,
		url: {
			path: "/portfolio/movie"
		},
		window: {
			content: {
				type: "component",
				component: Movie
			}
		}
	},
	{
		id: "illust",
		title: "イラスト",
		icon: <AppIcon imagePath="/app/illust.png" alt="イラスト" />,
		url: {
			path: "/portfolio/illust"
		},
		window: {
			content: {
				type: "component",
				component: Illust
			}
		}
	},
	{
		id: "model",
		title: "3Dモデル",
		icon: <AppIcon imagePath="/app/cube.png" alt="キューブ" />,
		url: {
			path: "/portfolio/model"
		},
		window: {
			content: {
				type: "component",
				component: Model
			}
		}
	},
	{
		id: "dotya",
		title: "どっと屋",
		icon: <AppIcon imagePath="/app/dotya.png" alt="どっと屋のロゴ" />,
		url: {
			enableChangePath: false
		},
		window: {
			size: {
				width: 542,
				height: 250,
				enabledResize: false
			},
			content: {
				type: "component",

				component: DotYa
			}
		}
	},
	{
		id: "blog",
		title: "技術ブログ",
		icon: <AppIcon imagePath="/app/hourglass.png" alt="砂時計" />,
		url: {
			enableChangePath: false
		},
		window: {
			size: {
				width: 542,
				height: 250,
				enabledResize: false
			},
			content: {
				type: "component",
				component: Blog
			}
		}
	}
];
