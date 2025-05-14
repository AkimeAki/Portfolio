"use client";

import { useEffect } from "react";

export function Cursor() {
	useEffect(() => {
		function move(e: MouseEvent) {
			if (document.body.dataset.layout === "os") {
				if (e.target instanceof HTMLElement) {
					if (e.target.dataset.cursor === "pointer") {
						document.body.style.cursor = `url("/cursor/pointer.png"), pointer`;
					} else if (e.target.dataset.cursor === "text") {
						document.body.style.cursor = `url("/cursor/text.png"), text`;
					} else {
						document.body.style.cursor = `url("/cursor/default.png"), default`;
					}
				}
			} else {
				document.body.style.cursor = "";
			}
		}

		window.addEventListener("mousemove", move, false);

		return () => {
			window.removeEventListener("mousemove", move);
		};
	}, []);

	return <></>;
}
