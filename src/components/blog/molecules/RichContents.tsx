"use client";

import { useEffect } from "react";
import { css } from "@kuma-ui/core";

interface Props {
	contents: string;
}

export default function ({ contents }: Props) {
	useEffect(() => {
		if (window && window.iframely) {
			window.iframely.load();
		}
	}, []);

	return (
		<div
			dangerouslySetInnerHTML={{ __html: contents }}
			className={css`
				display: flex;
				flex-direction: column;
				gap: 30px;
				max-width: 750px;
				width: 100%;
				margin: 0 auto;
				font-size: 17px;
				* {
					font-size: 17px;
				}

				a {
					color: #07a715;

					@media (prefers-color-scheme: dark) {
						color: #9deb83;
					}
				}

				img {
					max-width: 100%;
					height: auto;
					margin: 0 auto;
					display: block;
				}

				h4 {
					margin-top: 40px;
					font-size: 17px;
					text-decoration: underline;
				}

				h3 {
					border-bottom: 1px solid black;
					margin-top: 40px;
					font-size: 20px;
					padding: 10px 0;

					@media (prefers-color-scheme: dark) {
						border-bottom: 1px solid white;
					}
				}

				ul {
					display: flex;
					flex-direction: column;
					gap: 20px;

					li {
						ul {
							margin-top: 20px;
						}
					}
				}

				pre > code,
				pre > code * {
					font-family: "Source Code Pro", "Noto Sans JP", monospace;
					tab-size: 4;
					-moz-tab-size: 4;
					font-size: 13px;
				}

				pre:has(code) {
					padding: 5px 10px 10px;
					border-radius: 7px;
					overflow-x: auto;
				}

				div[data-filename] > pre:has(code) {
					border-top-left-radius: 0;
				}

				div[data-filename] {
					position: relative;
					padding-top: 22px;

					&:after {
						position: absolute;
						content: attr(data-filename);
						top: 0;
						left: 0;
						background-color: white;
						border-top-right-radius: 7px;
						border-top-left-radius: 7px;
						padding: 3px 15px;
						font-size: 14px;
						border-top: 2px solid #2e2e2e;
						border-left: 2px solid #2e2e2e;
						border-right: 2px solid #2e2e2e;
						font-weight: 700;

						@media (prefers-color-scheme: dark) {
							background-color: #242424;
							border-top: 2px solid #242424;
							border-left: 2px solid #242424;
							border-right: 2px solid #242424;
						}
					}
				}

				p {
					line-height: 1.6;
				}

				p > code {
					font-family: "Source Code Pro", monospace;
					background-color: #242424;
					color: white;
					padding: 2px 10px;
					border-radius: 6px;
					font-size: 13px;
					margin: 0 5px;
					vertical-align: middle;
				}

				.iframely-embed {
					display: flex;
					justify-content: center;

					& > div {
						max-width: 500px;
					}
				}

				.iframely-embed > div {
					max-width: 500px;
				}

				.iframely-responsive {
					position: relative;
					top: 0;
					left: 0;
					width: 100%;
					height: 0;
					padding-bottom: 56.25%;
				}

				.iframely-responsive > * {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					border: 0;
				}
			`}
		/>
	);
}
