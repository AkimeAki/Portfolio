"use client";

import { useEffect } from "react";

interface Props {
	type: string;
}

export default function ({ type }: Props) {
	useEffect(() => {
		document.body.dataset.layout = type;
	}, []);

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
