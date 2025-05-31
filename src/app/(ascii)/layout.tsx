import { metaHead } from "@/libs/meta";
import type { Metadata } from "next";
import LayoutInit from "@/components/LayoutInit";
import EmojiPath from "@/components/atoms/EmojiPath";
import { css } from "@kuma-ui/core";
import Link from "next/link";
import { cx } from "@/libs/merge-kuma";
import AsciiAki from "@/components/AsciiAki";
import { InlineStyle } from "@/components/atoms/InlineStyle";

export const metadata: Metadata = metaHead({});

export default function ({ children }: React.PropsWithChildren) {
	return (
		<>
			<LayoutInit type="ascii" />
			<EmojiPath />
			<InlineStyle
				css={`
					@layer base {
						body {
							background-color: #323232;
							color: #cbcbcb;
						}

						body[data-layout="os"] {
							background-color: transparent;
						}
					}
				`}
			/>
			<div
				className={css`
					display: flex;
					flex-direction: column;

					body[data-layout="os"] & {
						display: block;
						height: 100%;
					}
				`}
			>
				<header
					className={css`
						position: relative;
						max-width: 1300px;
						width: 100%;
						margin: 0 auto;
						padding: 100px 30px;

						body[data-layout="os"] & {
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
				<main
					className={css`
						max-width: 1300px;
						width: 100%;
						margin: 0 auto;
						padding: 0 230px 60px 30px;

						body[data-layout="os"] & {
							font-family: "BestTenCRT";
							padding: 30px;
							height: auto;

							@media (max-width: 500px) {
								padding: 15px;
							}
						}

						@media (max-width: 1000px) {
							padding: 20px;
						}
					`}
				>
					{children}
				</main>
				<div
					className={css`
						position: fixed;
						width: 100%;
						margin: 0 auto;
						bottom: 0;
						left: 0;
						user-select: none;
						pointer-events: none;
						padding: 0 20px 20px 0;

						body[data-layout="os"] & {
							display: none;
						}

						@media (max-width: 1000px) {
							position: static;
						}
					`}
				>
					<div
						className={css`
							display: flex;
							justify-content: flex-end;
							max-width: 1300px;
							margin: 0 auto;
						`}
					>
						<div>
							<div
								className={css`
									display: flex;
									background-color: #060303;
									height: 30px;
									gap: 10px;
									align-items: center;
									justify-content: flex-end;
									padding: 4px 10px 0 0;
								`}
							>
								<div
									className={css`
										display: flex;
										align-items: center;
										justify-content: center;
										position: relative;
										width: 27px;
										height: 27px;
										border-radius: 50%;

										&:before {
											display: block;
											content: "";
											width: 13px;
											height: 13px;
											border-bottom-color: #91797d;
											border-bottom-style: solid;
											border-bottom-width: 2px;
										}

										&:hover {
											background-color: #91797d;

											&:before {
												border-color: white;
											}
										}
									`}
								/>
								<div
									className={css`
										display: flex;
										align-items: center;
										justify-content: center;
										position: relative;
										width: 27px;
										height: 27px;

										&:before {
											display: block;
											content: "";
											width: 11px;
											height: 11px;
											border-color: #91797d;
											border-style: solid;
											border-width: 2px;
										}
									`}
								/>
								<div
									className={css`
										position: relative;
										width: 27px;
										height: 27px;
										border-radius: 50%;

										&:hover {
											background-color: #c82746;

											&:before,
											&:after {
												background-color: white;
											}
										}

										&:before,
										&:after {
											position: absolute;
											left: 5px;
											display: block;
											content: "";
											width: 17px;
											height: 3px;
											background-color: #91797d;
										}

										&:before {
											top: 12px;
											transform: rotate(45deg);
										}

										&:after {
											bottom: 12px;
											transform: rotate(-45deg);
										}
									`}
								/>
							</div>
							<div
								className={css`
									position: relative;
									width: 200px;
									height: 200px;
									background-color: #373737;
									border: 4px solid #060303;
								`}
							>
								<div
									className={css`
										position: absolute;
										top: 50%;
										left: 50%;
										translate: -50% -50%;
										scale: 0.4;
									`}
								>
									<AsciiAki />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
