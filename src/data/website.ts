import { DateTime } from "luxon";
import type { PortfolioData } from "@/types/portfolio";

export const webSiteData: PortfolioData = {
	band: {
		imagePath: "/portfolio/website/band.webp",
		title: "バンドのHP",
		detail: "バンドのHP作成をWordPressのテーマ作成、ダッシュボードの機能作成から行いました。\n（現在はアクセスできません。）",
		type: "work",
		createdAt: DateTime.fromObject({ year: 2021, month: 9, day: 3 }, { zone: "Asia/Tokyo" }).toISO() ?? undefined,
		tools: ["wordpress"],
		credit: [
			{
				position: "ウェブデザイン",
				name: "彩季"
			},
			{
				position: "ウェブサイト制作",
				name: "彩季"
			}
		],
		client: {
			name: "非公開"
		}
	},
	techblog: {
		url: "https://blog.shikiiro.net",
		imagePath: "/portfolio/website/techblog.webp",
		title: "孅いウェブエンジニアブログ",
		detail: "自分の技術ブログです。技術に関する備忘録書いてます。",
		tools: ["astro", "microcms"],
		type: "hobby",
		credit: [
			{
				position: "ウェブデザイン",
				name: "彩季"
			},
			{
				position: "ウェブサイト制作",
				name: "彩季"
			},
			{
				position: "記事執筆",
				name: "彩季"
			}
		]
	}
};
