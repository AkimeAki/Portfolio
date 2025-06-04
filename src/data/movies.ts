export const moviesData: {
	[key: string]: {
		url: string;
		title: string;
		demoFile: string;
		thumbnailFile: string;
		type: "youtube";
		detail: string;
	};
} = {
	ytending: {
		url: "https://www.youtube.com/embed/AzuWH9S4jRk?start=23",
		demoFile: "/portfolio/movies/ytending.gif",
		thumbnailFile: "/portfolio/movies/ytending.webp",
		title: "YouTube用エンディング",
		type: "youtube",
		detail: "YouTubeをイメージして、自分のチャンネルで使うエンディングを作成しました。"
	},
	ytending2: {
		url: "https://www.youtube.com/embed/bxIPbOl98f0",
		demoFile: "/portfolio/movies/ytending2.gif",
		thumbnailFile: "/portfolio/movies/ytending2.webp",
		title: "YouTube用エンディング",
		type: "youtube",
		detail: "YouTubeをイメージして、自分のチャンネルで使うエンディングを作成しました。"
	},
	nending: {
		url: "https://www.youtube.com/embed/9-wqOhxLYyw",
		demoFile: "/portfolio/movies/nending.gif",
		thumbnailFile: "/portfolio/movies/nending.webp",
		title: "ニコニコ動画用エンディング",
		type: "youtube",
		detail: "ニコニコ動画をイメージして、自分のチャンネルで使うエンディングを作成しました。"
	}
};
