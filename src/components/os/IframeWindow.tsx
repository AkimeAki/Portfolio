"use client";

import { siteUrl } from "@/libs/meta";
import useWindow from "@/libs/useWindow";
import { css } from "@kuma-ui/core";
import { useEffect, useRef } from "react";

interface Props {
	src: string;
}

export function IframeWindow({ src }: Props) {
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const loadingRef = useRef<HTMLDivElement>(null);
	const { openWindow } = useWindow();

	useEffect(() => {
		const loadIframe = (response: MessageEvent) => {
			if (response.data.name === "AkiOSIframeInit" && response.data.value) {
				if (iframeRef.current !== null) {
					iframeRef.current.dataset.loaded = "true";

					if (iframeRef.current.contentWindow !== null) {
						iframeRef.current.contentWindow.postMessage(
							{
								name: "AkiOSIframeLayout",
								value: "os"
							},
							siteUrl
						);
					}

					if (loadingRef.current !== null) {
						loadingRef.current.style.display = "none";
					}
				}
			}

			if (
				response.data.name === "AkiOSOpenWindow" &&
				response.data.value !== null &&
				response.data.value !== undefined
			) {
				openWindow(String(response.data.value));
			}
		};

		window.addEventListener("message", loadIframe);

		return () => {
			window.removeEventListener("message", loadIframe);
		};
	}, []);

	return (
		<>
			<div
				ref={loadingRef}
				className={css`
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					padding-bottom: 20px;

					@keyframes loading-animation {
						0% {
							transform: translateY(0);
						}

						50% {
							transform: translateY(-3px);
						}

						100% {
							transform: translateY(0);
						}
					}
				`}
			>
				<div
					className={css`
						display: flex;
					`}
				>
					<span>Loading</span>
					<span
						className={css`
							margin-left: 5px;
							animation-name: loading-animation;
							animation-duration: 1000ms;
							animation-iteration-count: infinite;
						`}
					>
						.
					</span>
					<span
						className={css`
							animation-name: loading-animation;
							animation-duration: 1000ms;
							animation-iteration-count: infinite;
							animation-delay: 200ms;
						`}
					>
						.
					</span>
					<span
						className={css`
							animation-name: loading-animation;
							animation-duration: 1000ms;
							animation-iteration-count: infinite;
							animation-delay: 400ms;
						`}
					>
						.
					</span>
				</div>
			</div>
			<iframe
				title="ウィンドウコンテンツ"
				src={src}
				ref={iframeRef}
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
			/>
		</>
	);
}
