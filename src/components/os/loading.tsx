"use client";

import { osLoading } from "@/atom";
import { useEffect } from "react";

export default function () {
	useEffect(() => {
		const getLoadingData = async () => {
			const targetUrls = [
				"/icon/github.png",
				"/icon/niconico.png",
				"/icon/twitch.png",
				"/icon/x.png",
				"/icon/youtube.png",
				"/aki-signal.png",
				"/aki.png"
			];
			await Promise.all(targetUrls.map((target) => fetch(target)));

			document.fonts.ready.then(() => {
				osLoading.set(false);
				console.log("loaded");
			});
		};

		void getLoadingData();
	}, []);

	return <></>;
}
