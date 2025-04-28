"use client";

import { css } from "@kuma-ui/core";
import { useEffect, useRef } from "react";

interface Props {
	src: string;
}

export function IframeWindow({ src }: Props) {
	const ref = useRef<HTMLIFrameElement>(null);

	useEffect(() => {
		window.addEventListener("message", (response) => {
			if (response.data.name === "AkiOSIframeInit" && response.data.value) {
				if (ref.current !== null) {
					ref.current.dataset.loaded = "true";
				}
			}
		});
	}, []);

	return (
		<iframe
			src={src}
			ref={ref}
			data-loaded="false"
			className={css`
				width: 100%;
				height: 100%;
				border: none;
				opacity: 0;
				user-select: none;
				pointer-events: none;
				transition-duration: 200ms;
				transition-property: opacity;

				&[data-loaded="true"] {
					opacity: 1;
					user-select: auto;
					pointer-events: all;
				}
			`}
		></iframe>
	);
}
