import Portfolio from "@/components/os/app/Portfolio";
import Faq from "@/components/os/app/Faq";
import { pageTitle } from "@/lib/seo";
import Profile from "@/components/os/app/Profile";
import Teto from "@/components/os/app/Teto";
import Furina from "@/components/os/app/Furina";
import Twitter from "@/components/os/app/Twitter";
import MisskeyIo from "@/components/os/app/MisskeyIo";
import Bluesky from "@/components/os/app/Bluesky";

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

export const appList: {
	[key: string]: {
		title: string;
		pageTitle: string;
		image: {
			isPixel: boolean;
			path: string;
		};
		component: () => React.JSX.Element;
		resize: boolean;
		changeHistory: boolean;
		size?: {
			width: number;
			height: number;
		};
		viewPinButton: boolean;
		defaultPin?: boolean;
	};
} = {
	portfolio: {
		title: "作ったもの",
		pageTitle: `作ったもの - ${pageTitle}`,
		image: {
			isPixel: true,
			path: "/app/picaxe.png"
		},
		component: Portfolio,
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
		component: Faq,
		resize: true,
		changeHistory: true,
		viewPinButton: false
	},
	profile: {
		title: "プロフィール",
		pageTitle: `プロフィール - ${pageTitle}`,
		image: {
			isPixel: false,
			path: "/app/aki.png"
		},
		component: Profile,
		resize: true,
		changeHistory: true,
		viewPinButton: false
	},
	teto: {
		title: "🥖おすすめテト",
		pageTitle: "🥖おすすめテト",
		image: {
			isPixel: true,
			path: "/app/teto.png"
		},
		component: Teto,
		resize: false,
		changeHistory: false,
		size: {
			width: 426,
			height: 240 + 50
		},
		viewPinButton: true,
		defaultPin: true
	},
	furina: {
		title: "💧フリーナはかわいい",
		pageTitle: "💧フリーナはかわいい",
		image: {
			isPixel: true,
			path: "/app/furina.png"
		},
		component: Furina,
		resize: false,
		changeHistory: false,
		size: {
			width: 426,
			height: 240 + 50
		},
		viewPinButton: true,
		defaultPin: true
	},
	twitter: {
		title: "Twitter",
		pageTitle: "Twitter",
		image: {
			isPixel: false,
			path: "/app/twitter.png"
		},
		component: Twitter,
		resize: false,
		changeHistory: false,
		size: {
			width: 350,
			height: 600
		},
		viewPinButton: true,
		defaultPin: false
	},
	misskeyio: {
		title: "Misskey.io",
		pageTitle: "Misskey.io",
		image: {
			isPixel: false,
			path: "/app/misskey.png"
		},
		component: MisskeyIo,
		resize: false,
		changeHistory: false,
		size: {
			width: 350,
			height: 600
		},
		viewPinButton: true,
		defaultPin: false
	},
	bluesky: {
		title: "Bluesky",
		pageTitle: "Bluesky",
		image: {
			isPixel: false,
			path: "/app/bluesky.png"
		},
		component: Bluesky,
		resize: false,
		changeHistory: false,
		size: {
			width: 350,
			height: 600
		},
		viewPinButton: true,
		defaultPin: false
	}
};
