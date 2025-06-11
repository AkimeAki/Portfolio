"use client";

import { isOSReady } from "@/atom";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { useEffect, useRef, useState } from "react";

const codeUrls: {
	viewed: boolean;
	code: string;
}[] = [
	{
		viewed: false,
		code: "https://raw.githubusercontent.com/AkimeAki/Portfolio/refs/heads/main/src/app/(desktop)/layout.tsx"
	},
	{
		viewed: false,
		code: "https://raw.githubusercontent.com/AkimeAki/Portfolio/refs/heads/main/src/components/app/Terminal.tsx"
	},
	{
		viewed: false,
		code: "https://raw.githubusercontent.com/AkimeAki/Portfolio/refs/heads/main/src/components/desktop/Window.tsx"
	}
];

export function CodeBackground() {
	const $isOSReady = useStore(isOSReady);
	const element = useRef<HTMLDivElement | null>(null);
	const [code, setCode] = useState<string>("");
	const [ready, setReady] = useState(false);

	useEffect(() => {
		if ($isOSReady) {
			setReady(true);
		}
	}, [$isOSReady]);

	useEffect(() => {
		let unmounted = false;

		if (ready) {
			const getCode = async () => {
				if (element.current !== null) {
					if (element.current.dataset.display !== "true") {
						element.current.dataset.display = "true";

						let codes = codeUrls.filter((code) => {
							return code.viewed === false;
						});

						if (codes.length === 0) {
							for (let i = 0; i < codeUrls.length; i++) {
								codeUrls[i].viewed = true;
							}

							codes = codeUrls;
						}

						const random = Math.floor(Math.random() * codes.length);
						for (let i = 0; i < codeUrls.length; i++) {
							if (codeUrls[i].code === codes[random].code) {
								codeUrls[i].viewed = true;
								break;
							}
						}

						try {
							const response = await fetch(codes[random].code);
							const text = await response.text();

							setCode(text);
						} catch (_e) {
							/* empty */
						}
					}
				}
				await new Promise((resolve) => setTimeout(resolve, 10000));
				if (!unmounted) {
					getCode();
				}
			};
			void getCode();
		}

		return () => {
			unmounted = true;
		};
	}, [ready]);

	useEffect(() => {
		if (code !== "") {
			if (element.current !== null) {
				element.current.style.transitionDuration = `${element.current.scrollHeight * 32}ms`;
			}
			setTimeout(() => {
				if (element.current !== null) {
					element.current.style.top = `${element.current.scrollHeight * -1}px`;
				}
			}, 1000);
		} else {
			if (element.current !== null) {
				element.current.style.transitionDuration = "";
				element.current.style.top = "";
			}
		}
	}, [code]);

	return (
		<div
			ref={element}
			onTransitionEnd={() => {
				if (element.current !== null) {
					element.current.dataset.display = "false";
					setCode("");
				}
			}}
			className={css`
				position: absolute;
				white-space: pre;
				user-select: none;
				pointer-events: none;
				top: 100%;
				left: 0;
				opacity: 0.4;
				width: 100%;
				height: 100%;
				color: #292929;
				transition-property: top;
				transition-timing-function: linear;
				tab-size: 2em;

				animation-name: scroll-code;
			`}
		>
			{code}
		</div>
	);
}
