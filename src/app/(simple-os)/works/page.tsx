import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: "制作依頼",
	description: "彩季です。"
});

export default function () {
	return (
		<div
			className={css`
				display: flex;
				flex-direction: column;
				gap: 20px;
			`}
		>
			<h3
				className={css`
					font-size: 20px;
					font-weight: bold;
				`}
			>
				制作依頼
			</h3>
			<nav
				className={css`
					display: flex;
					align-items: flex-start;
					flex-direction: column;
					gap: 20px;
					position: relative;
					z-index: 1;
					margin-left: 20px;

					* {
						display: flex;
						gap: 5px;
						font-size: 18px;
						font-weight: bold;

						&:hover {
							color: #edf8af;
						}
					}

					a {
						&:after {
							content: "→";
							transition-duration: 400ms;
							transition-property: transform;
						}

						&:hover {
							&:after {
								transform: translateX(10px);
							}
						}
					}
				`}
			>
				<Link href="/works/web">ウェブサイト制作</Link>
				<Link href="/works/chrome-extensions">Chrome拡張機能制作</Link>
				<Link href="/works/movie">動画編集</Link>
			</nav>
		</div>
	);
}
