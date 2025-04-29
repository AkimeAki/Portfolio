import { pageTitle } from "@/libs/meta";
import Profile from "@/components/os/app/Profile";
import Teto from "@/components/os/app/Teto";
import Furina from "@/components/os/app/Furina";
import { IframeWindow } from "@/components/os/IframeWindow";

export const sortList = (id: string, list: string[]) => {
	let result = [...list];

	if (!result.includes(id)) {
		result.push(id);
	} else {
		result = result.filter((item) => {
			return item !== id;
		});

		result = [...result, id];
	}

	return result;
};

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

export const appList: {
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
		component: <Profile />,
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
			height: 240
		},
		viewPinButton: true,
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
			height: 240
		},
		viewPinButton: true,
		defaultPin: true
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
	}
};
