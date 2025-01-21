import AsciiAki from "@/components/AsciiAki";
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
		<div
			className={css`
				display: grid;
				grid-template-columns: 1fr 1fr;
			`}
		>
			<nav
				className={css`
					display: flex;
					align-items: flex-start;
					flex-direction: column;
					gap: 30px;

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

					del {
						text-decoration: line-through;
					}
				`}
			>
				<Link href="/works/web">ウェブ制作依頼</Link>
				<Link href="/works/movie">動画編集依頼</Link>
				<Link href="/works/mc3d">
					<del>Minecraft 3Dテクスチャ作成依頼</del>
				</Link>
			</nav>
			<div>
				<AsciiAki />
			</div>
		</div>
	);
}
