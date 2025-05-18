"use client";

import { InlineStyle } from "@/components/atoms/InlineStyle";
import { css } from "@kuma-ui/core";
import { useEffect, useRef, useState } from "react";
import { annotate } from "rough-notation";

export function AIBlogContent() {
	const imageElement = useRef<HTMLDivElement>(null);
	const linkElement = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		let unmounted = false;

		const annotation = () => {
			setTimeout(() => {
				if (imageElement.current !== null && !unmounted) {
					const imageAnnotate = annotate(imageElement.current, { type: "box", color: "#ffd9c6" });
					imageAnnotate.show();
				}

				if (linkElement.current !== null && !unmounted) {
					const linkAnnotate = annotate(linkElement.current, { type: "highlight", color: "white" });
					linkAnnotate.show();
				}
			}, 450);
		};

		document.fonts.ready.then(() => {
			annotation();
		});

		return () => {
			unmounted = true;
		};
	}, []);

	return (
		<>
			<InlineStyle
				css={`
					body {
						background-color: white;

						&[data-touch="true"] {
							display: flex;
							justify-content: center;
							align-items: center;

							&[data-iframe="true"] {
								display: flex;
							}
						}
					}

					@keyframes rough-notation-dash {
						to {
							stroke-dashoffset: 0;
						}
					}
				`}
			/>
			<img
				src="/service/aiblogbg.webp"
				alt=""
				className={css`
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					object-fit: cover;
					z-index: -1;
					transform: scale(1.1);
					filter: blur(7px) brightness(45%);
				`}
			/>
			<div
				className={css`
					display: flex;
					gap: 10px;
					padding: 20px;
					line-height: 1.4;
					justify-content: center;
					font-family: "きろ字";
					color: white;
					max-width: 540px;

					body[data-touch="true"] & {
						@media (max-width: 560px) {
							flex-direction: column;
						}
					}
				`}
			>
				<div
					className={css`
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						gap: 10px;
						flex: 1;

						body[data-touch="true"] & {
							@media (max-width: 560px) {
								order: 2;
							}
						}
					`}
				>
					<div>
						<p>たまに更新する自分の日常ブログです。</p>
						<p>
							ただブログ書くだけじゃつまらないので、AIがコンテンツから背景画像を自動で生成するようにしました。
						</p>
					</div>
					<div>
						<a
							ref={linkElement}
							href="https://coffee.shikiiro.net"
							className={css`
								border-radius: 4px;
								color: #2d6cff;
								padding: 10px 20px 10px;
								text-decoration: none;
								line-height: 1;
								font-size: 18px;
								display: block;
								text-align: center;
								font-weight: bold;

								&:hover {
									color: #9bb9ff;
								}
							`}
							target="_blank"
							rel="noreferrer"
						>
							アクセスする
						</a>
					</div>
				</div>
				<div
					ref={imageElement}
					className={css`
						position: relative;
						width: 200px;
						aspect-ratio: 1/1;

						body[data-touch="true"] & {
							@media (max-width: 560px) {
								order: 1;
							}
						}
					`}
				>
					<div
						className={css`
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							overflow: hidden;
							z-index: -1;
						`}
					>
						<img
							src="/service/aiblogimagebg.webp"
							alt=""
							className={css`
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
								object-fit: cover;
								transform: scale(1.1);
								filter: blur(7px) brightness(45%);
							`}
						/>
					</div>
					<img
						src="/service/aiblog.png"
						alt="Aki Coffee"
						className={css`
							image-rendering: pixelated;
							vertical-align: bottom;
							width: 100%;
							aspect-ratio: 1/1;
						`}
					/>
				</div>
			</div>
		</>
	);
}
