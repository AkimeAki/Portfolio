import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: "お仕事",
	description: "彩季です。"
});

export default function () {
	return (
		<div>
			<nav
				className={css`
					display: flex;
					align-items: flex-start;
					flex-direction: column;
					gap: 30px;
					position: relative;
					z-index: 1;

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
				<Link href="/works/web">ウェブ制作依頼</Link>
				<Link href="/works/movie">動画編集依頼</Link>
			</nav>
		</div>
	);
}
