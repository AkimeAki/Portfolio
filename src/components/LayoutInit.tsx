"use client";

import { useEffect } from "react";

export default function () {
	useEffect(() => {
		const loadLayout = (response: MessageEvent) => {
			if (response.data.name === "AkiOSIframeLayout" && response.data.value) {
				document.body.dataset.layout = response.data.value;
			}
		};

		window.addEventListener("message", loadLayout);

		return () => {
			window.removeEventListener("message", loadLayout);
		};
	}, []);

	return <></>;
}
