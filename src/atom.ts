import { atom } from "nanostores";
import Portfolio from "@/components/os/app/Portfolio";
import Faq from "@/components/os/app/Faq";

export const openAppSortList = atom<string[]>([]);
export const appList = atom<{
	[key: string]: {
		title: string;
		component: () => React.JSX.Element;
	};
}>({
	portfolio: {
		title: "作ったもの",
		component: Portfolio
	},
	faq: {
		title: "FAQ",
		component: Faq
	}
});

export const osLoading = atom<boolean>(true);
