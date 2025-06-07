import dynamic from "next/dynamic";
import { pageTitle } from "@/libs/meta";
const Teto = dynamic(() => import("@/components/desktop/app/Teto"));
const Furina = dynamic(() => import("@/components/desktop/app/Furina"));
const PortfolioWindow = dynamic(() =>
	import("@/components/desktop/IframeWindow").then((mod) => () => <mod.IframeWindow src="/window/portfolio" />)
);
const FaqWindow = dynamic(() =>
	import("@/components/desktop/IframeWindow").then((mod) => () => <mod.IframeWindow src="/window/faq" />)
);
const ProfileWindow = dynamic(() =>
	import("@/components/desktop/IframeWindow").then((mod) => () => <mod.IframeWindow src="/window/profile" />)
);
const TwitterWindow = dynamic(() =>
	import("@/components/desktop/IframeWindow").then((mod) => () => <mod.IframeWindow src="/window/twitter" />)
);
const TerminalWindow = dynamic(() =>
	import("@/components/desktop/IframeWindow").then((mod) => () => <mod.IframeWindow src="/window/terminal" />)
);
const IntroWindow = dynamic(() =>
	import("@/components/desktop/IframeWindow").then((mod) => () => <mod.IframeWindow src="/window/intro" />)
);
const PicturesWindow = dynamic(() =>
	import("@/components/desktop/IframeWindow").then((mod) => () => <mod.IframeWindow src="/window/pipctures" />)
);
const ModelsWindow = dynamic(() =>
	import("@/components/desktop/IframeWindow").then((mod) => () => <mod.IframeWindow src="/window/models" />)
);
const MoviesWindow = dynamic(() =>
	import("@/components/desktop/IframeWindow").then((mod) => () => <mod.IframeWindow src="/window/movies" />)
);
const PixelGivesWindow = dynamic(() =>
	import("@/components/desktop/IframeWindow").then((mod) => () => (
		<mod.IframeWindow src="/window/service/pixelgives" />
	))
);
const AllergyNaviWindow = dynamic(() =>
	import("@/components/desktop/IframeWindow").then((mod) => () => (
		<mod.IframeWindow src="/window/service/allergynavi" />
	))
);
const AiBlogWindow = dynamic(() =>
	import("@/components/desktop/IframeWindow").then((mod) => () => <mod.IframeWindow src="/window/service/aiblog" />)
);
const TechBlogWindow = dynamic(() =>
	import("@/components/desktop/IframeWindow").then((mod) => () => <mod.IframeWindow src="/window/service/techblog" />)
);

export interface AppData {
	title: string;
	pageTitle: string;
	image: {
		isPixel: boolean;
		path: string;
	};
	component: React.JSX.Element;
	resize: boolean;
	isEnabledPath: boolean;
	size?: {
		width: number;
		height: number;
	};
	spSize?: {
		width: number;
		height: number;
	};
	defaultPosition?: {
		top?: number;
		left?: number;
		right?: number;
		bottom?: number;
	};
	defaultMaxWindow?: boolean;
	viewPinButton: boolean;
	defaultPin?: boolean;
	touchWindow?: boolean;
}

export const appData: {
	[key: string]: AppData;
} = {
	portfolio: {
		title: "作ったもの",
		pageTitle: `作ったもの・実績など - ${pageTitle}`,
		image: {
			isPixel: true,
			path: "/app/folder-open.png"
		},
		component: <PortfolioWindow />,
		resize: true,
		isEnabledPath: true,
		viewPinButton: false,
		defaultMaxWindow: true
	},
	faq: {
		title: "FAQ",
		pageTitle: `FAQ - ${pageTitle}`,
		image: {
			isPixel: true,
			path: "/app/ghost.png"
		},
		component: <FaqWindow />,
		resize: true,
		isEnabledPath: true,
		viewPinButton: false
	},
	profile: {
		title: "プロフィール",
		pageTitle: `プロフィール - ${pageTitle}`,
		image: {
			isPixel: false,
			path: "/app/aki.webp"
		},
		component: <ProfileWindow />,
		resize: true,
		isEnabledPath: true,
		viewPinButton: false
	},
	teto: {
		title: "🥖おすすめのテト",
		pageTitle: "🥖おすすめのテト",
		image: {
			isPixel: false,
			path: "/app/teto.webp"
		},
		component: <Teto />,
		resize: false,
		isEnabledPath: false,
		size: {
			width: 426,
			height: 240 - 4
		},
		spSize: {
			width: 320,
			height: 180 - 4
		},
		viewPinButton: true,
		touchWindow: true,
		defaultPin: true
	},
	furina: {
		title: "💧おすすめのフリーナ動画",
		pageTitle: "💧おすすめのフリーナ動画",
		image: {
			isPixel: true,
			path: "/app/furina.png"
		},
		component: <Furina />,
		resize: false,
		isEnabledPath: false,
		size: {
			width: 426,
			height: 240 - 4
		},
		spSize: {
			width: 320,
			height: 180 - 4
		},
		viewPinButton: true,
		touchWindow: true,
		defaultPin: true
	},
	twitter: {
		title: "Twitter",
		pageTitle: "Twitter",
		image: {
			isPixel: false,
			path: "/app/simplev.webp"
		},
		component: <TwitterWindow />,
		resize: false,
		isEnabledPath: false,
		viewPinButton: true
	},
	terminal: {
		title: "ターミナル",
		pageTitle: "ターミナル",
		image: {
			isPixel: true,
			path: "/app/terminal.png"
		},
		component: <TerminalWindow />,
		resize: true,
		isEnabledPath: false,
		viewPinButton: false
	},
	intro: {
		title: "Welcome.txt",
		pageTitle: "Welcome.txt",
		image: {
			isPixel: true,
			path: "/app/letter.png"
		},
		component: <IntroWindow />,
		resize: true,
		isEnabledPath: false,
		size: {
			width: 426,
			height: 220
		},
		spSize: {
			width: 326,
			height: 150
		},
		defaultPosition: {
			bottom: 80,
			right: 10
		},
		viewPinButton: false,
		defaultPin: false,
		touchWindow: true
	},
	pictures: {
		title: "イラスト",
		pageTitle: `イラスト - ${pageTitle}`,
		image: {
			isPixel: true,
			path: "/app/pictures.png"
		},
		component: <PicturesWindow />,
		resize: true,
		isEnabledPath: true,
		viewPinButton: false
	},
	models: {
		title: "3Dモデル",
		pageTitle: `3Dモデル - ${pageTitle}`,
		image: {
			isPixel: true,
			path: "/app/models.png"
		},
		component: <ModelsWindow />,
		resize: true,
		isEnabledPath: true,
		viewPinButton: false
	},
	movies: {
		title: "ムービー",
		pageTitle: `ムービー - ${pageTitle}`,
		image: {
			isPixel: true,
			path: "/app/movies.png"
		},
		component: <MoviesWindow />,
		resize: true,
		isEnabledPath: true,
		viewPinButton: false
	},
	pixelgives: {
		title: "どっと屋",
		pageTitle: `どっと屋 - ${pageTitle}`,
		image: {
			isPixel: true,
			path: "/app/dotya.png"
		},
		component: <PixelGivesWindow />,
		resize: false,
		isEnabledPath: false,
		viewPinButton: false,
		size: {
			width: 542,
			height: 250
		}
	},
	allergynavi: {
		title: "アレルギーナビ",
		pageTitle: `アレルギーナビ - ${pageTitle}`,
		image: {
			isPixel: true,
			path: "/app/allergy-navi.webp"
		},
		component: <AllergyNaviWindow />,
		resize: false,
		isEnabledPath: false,
		viewPinButton: false,
		size: {
			width: 542,
			height: 250
		}
	},
	aiblog: {
		title: "日常ブログ",
		pageTitle: `日常ブログ - ${pageTitle}`,
		image: {
			isPixel: true,
			path: "/app/aki-coffee.png"
		},
		component: <AiBlogWindow />,
		resize: false,
		isEnabledPath: false,
		viewPinButton: false,
		size: {
			width: 542,
			height: 250
		}
	},
	techblog: {
		title: "技術ブログ",
		pageTitle: `技術ブログ - ${pageTitle}`,
		image: {
			isPixel: true,
			path: "/app/blog.png"
		},
		component: <TechBlogWindow />,
		resize: false,
		isEnabledPath: false,
		viewPinButton: false,
		size: {
			width: 542,
			height: 250
		}
	}
};
