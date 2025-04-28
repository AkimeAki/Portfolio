"use client";

import { isLoadIframe } from "@/libs/is-load-iframe";
import { useEffect, useState } from "react";

interface Props {
	origin: string;
}

export function IframeInit({ origin }: Props) {
	const [ready, setReady] = useState<boolean>(false);

	useEffect(() => {
		setReady(true);
	}, []);

	useEffect(() => {
		if (ready) {
			if (isLoadIframe()) {
				document.body.dataset.iframe = "true";

				setTimeout(() => {
					window.parent.postMessage(
						{
							name: "AkiOSIframeInit",
							value: true
						},
						origin
					);
				}, 200);
			}
		}
	}, [ready]);

	return <></>;
}
