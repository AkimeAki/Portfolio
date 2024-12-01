import { blogTitle } from "@/define";
import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: blogTitle,
	isFullTitle: true,
	description:
		"孅いエンジニアが書いている技術メインブログです。備忘録的な感じで書いてるので間違ってるかもしれませんがお許しを。"
});

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props) {
	return (
		<div
			className={css`
				font-family: "Noto Sans JP", sans-serif;
				color: white;
				background-color: #eeeeee;
				min-height: 100%;

				* {
					font-family: "Noto Sans JP", sans-serif;

					@media (prefers-color-scheme: dark) {
						color: white;
					}
				}

				@media (prefers-color-scheme: dark) {
					background-color: #363636;
				}
			`}
		>
			<header
				className={css`
					background-color: #f0425a;
					padding: 60px 0 62px;
					user-select: none;
					display: flex;
					justify-content: center;

					@media (prefers-color-scheme: dark) {
						background-color: #216135;
					}
				`}
			>
				<Link href="/blog">
					<h1
						className={css`
							color: white;
							font-size: 22px;
							font-weight: bold;
						`}
					>
						孅いエンジニアのブログ
					</h1>
				</Link>
			</header>
			<nav
				className={css`
					display: flex;
					justify-content: space-around;
					align-items: center;

					background-color: #f0425a;

					@media (prefers-color-scheme: dark) {
						background-color: #216135;
					}

					a {
						display: block;
						padding: 15px 0;
						color: white;
						width: 100%;
						text-align: center;
						font-weight: bold;
						font-size: 15px;

						&:hover {
							background-color: #82ef92;
							color: inherit;

							@media (prefers-color-scheme: dark) {
								background-color: #572229;
							}
						}
					}
				`}
			>
				<Link href="/blog/categories/allergy-navi">
					アレルギーナビ{" "}
					<br
						className={css`
							@media (min-width: 500px) {
								display: none;
							}
						`}
					/>
					アプデ情報
				</Link>
				<Link href="https://coffee.aki.wtf" target="_blank">
					日常ブログ
				</Link>
			</nav>
			<main
				className={css`
					padding: 50px 30px;
					width: 100%;
					max-width: 1200px;
					margin: 0 auto;
				`}
			>
				{children}
			</main>
			<footer
				className={css`
					padding: 60px 0;
				`}
			>
				<p
					className={css`
						text-align: center;
					`}
				>
					Created by{" "}
					<Link
						href="/"
						className={css`
							color: #07a715;
							font-weight: bold;

							@media (prefers-color-scheme: dark) {
								color: #9deb83;
							}

							&:hover {
								text-decoration: underline;
							}
						`}
					>
						彩季
					</Link>
				</p>
			</footer>
		</div>
	);
}
