import { metaHead } from "@/libs/meta";
import type { Metadata } from "next";
import LayoutInit from "@/components/LayoutInit";
import EmojiPath from "@/components/atoms/EmojiPath";
import { css } from "@kuma-ui/core";
import Link from "next/link";
import { cx } from "@/libs/merge-kuma";

export const metadata: Metadata = metaHead({});

export default function ({ children }: React.PropsWithChildren) {
	return (
		<>
			<LayoutInit type="simple-os" iframeType="os" />
			<EmojiPath />
			<style
				dangerouslySetInnerHTML={{
					__html: /* css */ `
						@layer base {
							body {
								background-color: #323232;
								color: #cbcbcb;
							}

							body[data-iframe="true"] {
								background-color: transparent;
							}
						}
					`
				}}
			/>
			<div
				className={css`
					display: flex;
					flex-direction: column;

					body[data-iframe="true"] & {
						display: block;
						height: 100%;
					}
				`}
			>
				<header
					className={css`
						position: relative;
						max-width: 1100px;
						width: 100%;
						margin: 0 auto;
						padding: 100px 30px;

						body[data-iframe="true"] & {
							display: none;
						}
					`}
				>
					<h1
						className={css`
							font-family: "ArkPixel12ZHCN";
							font-size: 28px;
							text-align: center;
							user-select: none;
							pointer-events: none;
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
							left: 10px;
							transform: translateY(-50%);
							user-select: none;
							white-space: nowrap;

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
									transform: translateX(-5px);
									opacity: 1;
								}
							}
						`}
					>
						<span
							className={cx(
								"back-portfolio-arrow",
								css`
									opacity: 0;
									transition-duration: 400ms;
									transition-property: transform, opacity;
								`
							)}
						>
							←
						</span>
						<span>彩季.AkiOS を起動</span>
					</Link>
				</header>
				{children}
			</div>
		</>
	);
}
