import Portfolio from "@/components/os/app/Portfolio";
import Faq from "@/components/os/app/Faq";
import { pageTitle } from "@/lib/seo";
import Profile from "@/components/os/app/Profile";
import Teto from "@/components/os/app/Teto";
import Furina from "@/components/os/app/Furina";

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
		component: Portfolio,
		resize: true,
		changeHistory: true,
		viewPinButton: false
	},
	faq: {
		title: "FAQ",
		pageTitle: `FAQ - ${pageTitle}`,
		component: Faq,
		resize: true,
		changeHistory: true,
		viewPinButton: false
	},
	profile: {
		title: "プロフィール",
		pageTitle: `プロフィール - ${pageTitle}`,
		component: Profile,
		resize: true,
		changeHistory: true,
		viewPinButton: false
	},
	teto: {
		title: "🥖おすすめテト",
		pageTitle: "🥖おすすめテト",
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
		component: Furina,
		resize: false,
		changeHistory: false,
		size: {
			width: 426,
			height: 240 + 50
		},
		viewPinButton: true,
		defaultPin: true
	}
};
