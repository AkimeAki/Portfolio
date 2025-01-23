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
			<div
				className={css`
					position: fixed;
					top: 0;
					left: 50%;
					transform: translateX(-50%);
					-webkit-transform: translateX(-50%);
					height: 100%;
					max-width: 1100px;
					width: 100%;
					user-select: none;
					pointer-events: none;
				`}
			>
				<div
					className={css`
						position: absolute;
						bottom: 50px;
						right: 50px;

						* {
							user-select: text;
							pointer-events: auto;
							opacity: 1;
							transition-property: opacity;
							transition-duration: 200ms;
						}

						@media (max-width: 950px) {
							transform: scale(0.6);
							-webkit-transform: scale(0.6, 0.6);
							bottom: -50px;
							right: -50px;
						}

						@media (max-width: 620px) and (max-height: 656px) {
							* {
								opacity: 0.4;
							}
						}
					`}
				>
					<AsciiAki />
				</div>
			</div>
		</div>
	);
}
