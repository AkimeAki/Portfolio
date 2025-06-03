import { pageTitle } from "@/libs/meta";
import Teto from "@/components/desktop/app/Teto";
import Furina from "@/components/desktop/app/Furina";
import { IframeWindow } from "@/components/desktop/IframeWindow";

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
		component: <IframeWindow src="/window/portfolio" />,
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
		component: <IframeWindow src="/window/faq" />,
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
		component: <IframeWindow src="/window/profile" />,
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
		component: <IframeWindow src="/window/twitter" />,
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
		component: <IframeWindow src="/window/terminal" />,
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
		component: <IframeWindow src="/window/intro" />,
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
		component: <IframeWindow src="/window/pictures" />,
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
		component: <IframeWindow src="/window/models" />,
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
		component: <IframeWindow src="/window/movies" />,
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
		component: <IframeWindow src="/window/service/pixelgives" />,
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
		component: <IframeWindow src="/window/service/allergynavi" />,
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
		component: <IframeWindow src="/window/service/aiblog" />,
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
		component: <IframeWindow src="/window/service/techblog" />,
		resize: false,
		isEnabledPath: false,
		viewPinButton: false,
		size: {
			width: 542,
			height: 250
		}
	}
};
