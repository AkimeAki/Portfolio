"use client";

import { useEffect } from "react";

export default function () {
	useEffect(() => {
		const generator = document.querySelector(`meta[name="generator"]`);
		if (generator !== null) {
			generator.setAttribute("content", "WordPressでもなく、Wixでもなく、Next.jsなんですねこれね。");
		}
	}, []);

	return <></>;
}
