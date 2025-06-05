import type { toolColorList } from "@/data/tool-color-label";
import type { DateTime } from "luxon";

interface Client {
	name: string;
	url?: string;
}

type Credit = {
	position: string;
	name: string;
	url?: string;
}[];

export interface PortfolioData {
	[key: string]: {
		url?: string;
		modelPath?: string;
		createdAt?: string;
		title: string;
		imagePath: string;
		hoverImagePath?: string;
		detail: string;
		type: "work" | "hobby";
		tools?: (keyof typeof toolColorList)[];
		client?: Client;
		credit?: Credit;
	};
}
