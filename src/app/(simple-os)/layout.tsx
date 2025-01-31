import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import { Metadata } from "next";
import Link from "next/link";
import { cx } from "@/libs/merge-kuma";
import EmojiPath from "@/components/atoms/EmojiPath";
import LayoutInit from "@/components/LayoutInit";
import AsciiAki from "@/components/AsciiAki";

export const metadata: Metadata = metaHead({});

export default function ({ children }: React.PropsWithChildren) {
	return (
		<>
			<EmojiPath />
			<LayoutInit type="simple-os" />
			<style
				dangerouslySetInnerHTML={{
					__html: /* css */ `
						body {
							background-color: #323232;
						}

						@layer base {
							* {
								color: #cbcbcb;
							}
						}
					`
				}}
			/>
			<div
				className={css`
					display: flex;
					flex-direction: column;
				`}
			>
				<header
					className={css`
						position: relative;
						max-width: 1100px;
						width: 100%;
						margin: 0 auto;
						padding: 100px 30px;
					`}
				>
					<h1
						className={css`
							font-family: "ArkPixel12ZHCN";
							font-size: 28px;
							text-align: center;
						`}
					>
						彩季
					</h1>
					<Link
						href="/"
						scroll={false}
						className={css`
							display: inline-flex;
							gap: 5px;
							position: absolute;
							top: 50%;
							left: 30px;
							transform: translateY(-50%);

							@media (max-width: 600px) {
								top: 50px;
							}

							span {
								font-family: "BestTenCRT";
								font-size: 16px;
							}

							&:hover {
								span {
									color: #edf8af;
								}

								.back-portfolio-arrow {
									transform: translateX(-10px);
								}
							}
						`}
					>
						<span
							className={cx(
								"back-portfolio-arrow",
								css`
									transition-duration: 400ms;
									transition-property: transform;
								`
							)}
						>
							←
						</span>
						<span>彩季.AkiOS を起動</span>
					</Link>
				</header>
				<main
					className={css`
						max-width: 1100px;
						width: 100%;
						margin: 0 auto;
						padding: 0 30px 60px;
					`}
				>
					{children}
				</main>
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
							transform: scale(0.6);
							-webkit-transform: scale(0.6, 0.6);
							bottom: -50px;
							right: -50px;
							opacity: 0.35;

							* {
								opacity: 1;
								transition-property: opacity;
								transition-duration: 200ms;
							}
						`}
					>
						<AsciiAki />
					</div>
				</div>
				<footer></footer>
			</div>
		</>
	);
}
