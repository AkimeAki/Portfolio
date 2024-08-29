import Portfolio from "@/components/os/app/Portfolio";
import Faq from "@/components/os/app/Faq";
import { pageTitle } from "@/lib/seo";
import Profile from "@/components/os/app/Profile";

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
	};
} = {
	portfolio: {
		title: "作ったもの",
		pageTitle: `作ったもの - ${pageTitle}`,
		component: Portfolio
	},
	faq: {
		title: "FAQ",
		pageTitle: `FAQ - ${pageTitle}`,
		component: Faq
	},
	profile: {
		title: "プロフィール",
		pageTitle: `プロフィール - ${pageTitle}`,
		component: Profile
	}
};
