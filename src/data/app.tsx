import { pageTitle } from "@/libs/meta";
import Teto from "@/components/os/app/Teto";
import Furina from "@/components/os/app/Furina";
import { IframeWindow } from "@/components/os/IframeWindow";

export interface AppData {
	title: string;
	pageTitle: string;
	image: {
		isPixel: boolean;
		path: string;
	};
	component: React.JSX.Element;
	resize: boolean;
	changeHistory: boolean;
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
			path: "/app/picaxe.png"
		},
		component: <IframeWindow src="/portfolio" />,
		resize: true,
		changeHistory: true,
		viewPinButton: false
	},
	faq: {
		title: "FAQ",
		pageTitle: `FAQ - ${pageTitle}`,
		image: {
			isPixel: true,
			path: "/app/ghost.png"
		},
		component: <IframeWindow src="/faq" />,
		resize: true,
		changeHistory: true,
		viewPinButton: false
	},
	profile: {
		title: "プロフィール",
		pageTitle: `プロフィール - ${pageTitle}`,
		image: {
			isPixel: false,
			path: "/app/aki.webp"
		},
		component: <IframeWindow src="/profile" />,
		resize: true,
		changeHistory: true,
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
		changeHistory: false,
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
		changeHistory: false,
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
		component: <IframeWindow src="/twitter" />,
		resize: false,
		changeHistory: false,
		viewPinButton: true
	},
	terminal: {
		title: "ターミナル",
		pageTitle: "ターミナル",
		image: {
			isPixel: true,
			path: "/app/terminal.png"
		},
		component: <IframeWindow src="/terminal" />,
		resize: true,
		changeHistory: false,
		viewPinButton: false
	},
	intro: {
		title: "Welcome.txt",
		pageTitle: "Welcome.txt",
		image: {
			isPixel: true,
			path: "/app/letter.png"
		},
		component: <IframeWindow src="/intro" />,
		resize: true,
		changeHistory: false,
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
		component: <IframeWindow src="/pictures" />,
		resize: true,
		changeHistory: true,
		viewPinButton: false
	},
	models: {
		title: "3Dモデル",
		pageTitle: `3Dモデル - ${pageTitle}`,
		image: {
			isPixel: true,
			path: "/app/models.png"
		},
		component: <IframeWindow src="/models" />,
		resize: true,
		changeHistory: true,
		viewPinButton: false
	},
	movies: {
		title: "ムービー",
		pageTitle: `ムービー - ${pageTitle}`,
		image: {
			isPixel: true,
			path: "/app/movies.png"
		},
		component: <IframeWindow src="/movies" />,
		resize: true,
		changeHistory: true,
		viewPinButton: false
	},
	pixelgives: {
		title: "どっと屋",
		pageTitle: `どっと屋 - ${pageTitle}`,
		image: {
			isPixel: true,
			path: "/app/dotya.png"
		},
		component: <IframeWindow src="/service/pixelgives" />,
		resize: false,
		changeHistory: false,
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
		component: <IframeWindow src="/service/allergynavi" />,
		resize: false,
		changeHistory: false,
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
		component: <IframeWindow src="/service/aiblog" />,
		resize: false,
		changeHistory: false,
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
		component: <IframeWindow src="/service/techblog" />,
		resize: false,
		changeHistory: false,
		viewPinButton: false,
		size: {
			width: 542,
			height: 250
		}
	}
};
