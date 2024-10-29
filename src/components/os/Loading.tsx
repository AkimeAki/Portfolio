"use client";

import { isTwitterWidgetValid, osLoading } from "@/atom";
import { useStore } from "@nanostores/react";
import { css } from "@kuma-ui/core";
import { useEffect, useState } from "react";
import { checkUseragent } from "@/lib/check-useragent";

interface Props {
	notFound?: boolean;
}

export default function ({ notFound = false }: Props) {
	const $osLoading = useStore(osLoading);
	const [imageLoading, setImageLoading] = useState<boolean>(true);
	const [fontsLoading, setFontsLoading] = useState<boolean>(true);
	const [ready, setReady] = useState(false);
	const [networkChecked, setNetworkChecked] = useState<boolean>(false);
	const [loadProgress, setLoadProgress] = useState<number>(0);
	const [twitterLoading, setTwitterLoading] = useState<boolean>(true);
	const [errorMessage, setErrorMessage] = useState<string>("");

	useEffect(() => {
		setTimeout(() => {
			if (!notFound && errorMessage === "") {
				setReady(true);
			} else {
				setReady(false);
			}
		}, 200);
	}, [notFound, errorMessage]);

	useEffect(() => {
		if (notFound) {
			setErrorMessage("Not Found");
		}
	}, [notFound]);

	useEffect(() => {
		const data = checkUseragent();
		let error = false;

		if (data.os === "ios") {
			if (data.browser === "safari") {
				if (data.version < 17) {
					error = true;
				}
			}
		}

		if (data.os === "mac") {
			if (data.browser === "safari") {
				if (data.version < 17) {
					error = true;
				}
			}
		}

		if (data.os === "windows" || data.os === "mac") {
			if (data.browser === "chrome") {
				if (data.version < 120) {
					error = true;
				}
			}

			if (data.browser === "firefox") {
				if (data.version < 113) {
					error = true;
				}
			}
		}

		if (data.os === "android") {
			if (data.browser === "chrome") {
				if (data.version < 130) {
					error = true;
				}
			}

			if (data.browser === "firefox") {
				if (data.version < 79) {
					error = true;
				}
			}
		}

		if (data.browser === "ie") {
			error = true;
		}

		if (data.browser === "old-edge") {
			error = true;
		}

		if (error) {
			setErrorMessage("Old Browser");
		}
	}, []);

	useEffect(() => {
		if (ready) {
			setNetworkChecked(true);
			setLoadProgress((prev) => {
				return prev + 100 / 4;
			});
		}
	}, [ready]);

	useEffect(() => {
		if (ready) {
			let timer: null | NodeJS.Timeout = null;
			let observer: null | MutationObserver = null;

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			if ((window as any).twttr !== undefined && (window as any).twttr.widgets !== undefined) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				(window as any).twttr.widgets.load();
			}

			const twitterLoadingWidgetElement = document.querySelector<HTMLDivElement>("#twitter-loading-widget");
			if (twitterLoadingWidgetElement !== null) {
				observer = new MutationObserver(() => {
					const widgetElement =
						twitterLoadingWidgetElement.querySelector<HTMLDivElement>(".twitter-timeline");
					if (widgetElement !== null) {
						if (widgetElement.offsetHeight > 0) {
							setTimeout(() => {
								setTwitterLoading(false);
								setLoadProgress((prev) => {
									return prev + 100 / 4;
								});

								if (timer !== null) {
									clearTimeout(timer);
								}
							}, 500);

							if (observer !== null) {
								observer.disconnect();
							}

							if (widgetElement.offsetHeight > 2000) {
								isTwitterWidgetValid.set(true);
							}
						}
					}
				});

				observer.observe(twitterLoadingWidgetElement, {
					childList: true, // 子ノードの変化を監視
					subtree: true // 子孫ノードも監視対象に含める
				});
			}

			timer = setTimeout(() => {
				setTwitterLoading(false);
				setLoadProgress((prev) => {
					return prev + 100 / 4;
				});
				if (observer !== null) {
					observer.disconnect();
				}
			}, 5000);
		}
	}, [ready]);

	useEffect(() => {
		const getLoadingData = async () => {
			const targetUrls = [
				"/icon/github.png",
				"/icon/niconico.png",
				"/icon/twitch.png",
				"/icon/x.png",
				"/icon/youtube.png",
				"/aki-signal.png",
				"/aki.png",
				"/app/ghost.png",
				"/app/aki-coffee.png",
				"/app/blog.png",
				"/app/aki.png",
				"/app/picaxe.png",
				"/app/simplev.png",
				"/app/allergy-navi.png",
				"/app/dotya.png",
				"/app/kagarinosu.png",
				"/app/twitter.png",
				"/app/bluesky.png",
				"/app/misskey.png",
				"/app/furina.png",
				"/app/teto.png",
				"/app/terminal.png"
			];
			for (let i = 1; i <= 36; i++) {
				targetUrls.push(`/emoji/${i}.png`);
			}

			await Promise.all(targetUrls.map((target) => fetch(target)));
			setTimeout(() => {
				setImageLoading(false);
				setLoadProgress((prev) => {
					return prev + 100 / 4;
				});
			}, 500);
		};

		if (ready) {
			void getLoadingData();
		}
	}, [ready]);

	useEffect(() => {
		if (ready) {
			document.fonts.ready.then(() => {
				setTimeout(() => {
					setFontsLoading(false);
					setLoadProgress((prev) => {
						return prev + 100 / 4;
					});
				}, 500);
			});
		}
	}, [ready]);

	useEffect(() => {
		if (!imageLoading && !fontsLoading && !twitterLoading && ready) {
			setTimeout(() => {
				osLoading.set(false);
			}, 3000);
		} else {
			setTimeout(() => {
				osLoading.set(true);
			}, 3000);
		}
	}, [imageLoading, fontsLoading, twitterLoading, ready]);

	return (
		<>
			{$osLoading ? (
				<div
					className={css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						z-index: calc(infinity - 1);
						user-select: none;
						pointer-events: none;

						* {
							color: white;
							font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック",
								"Yu Gothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Verdana, Meiryo;
							font-weight: normal;
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
							background-color: black;

							animation-name: loading-bg-out;
							animation-duration: 4s;
							animation-delay: 1500ms;
							animation-fill-mode: forwards;
							animation-timing-function: linear;

							@keyframes loading-bg-out {
								100% {
									opacity: 0;
								}
							}

							@keyframes loading-bg-out-error {
								99% {
									opacity: 0;
								}

								100% {
									opacity: 1;
								}
							}
						`}
					/>
					<div
						className={[
							css`
								position: absolute;
								top: 50%;
								left: 50%;
								transform: translate(-50%, -50%);
								text-align: center;
								transition-duration: 2s;
								transition-delay: 1s;
								transition-property: filter, opacity;
								transition-timing-function: ease-out;
							`,
							!imageLoading && !fontsLoading && !twitterLoading && ready
								? css`
										filter: blur(10px);
										opacity: 0;
									`
								: ""
						].join(" ")}
					>
						<div
							className={css`
								position: relative;
								display: inline-block;
								padding: 7px 40px;
								background-color: rgba(0, 0, 0, 0.678);
							`}
						>
							<div
								className={css`
									position: absolute;
									top: 0;
									left: 0;
									width: 0;
									height: 2px;
									background-color: #c72a4d;

									animation-name: welcome-border-top;
									animation-duration: 200ms;
									animation-delay: 400ms;
									animation-fill-mode: forwards;
									animation-timing-function: linear;

									@keyframes welcome-border-top {
										100% {
											width: 100%;
										}
									}
								`}
							/>
							<div
								className={css`
									position: absolute;
									top: 0;
									left: 0;
									width: 2px;
									height: 0;
									background-color: #c72a4d;

									animation-name: welcome-border-left;
									animation-duration: 200ms;
									animation-delay: 400ms;
									animation-fill-mode: forwards;
									animation-timing-function: linear;

									@keyframes welcome-border-left {
										100% {
											height: 100%;
										}
									}
								`}
							/>
							<div
								className={css`
									position: absolute;
									bottom: 0;
									left: 0;
									width: 0;
									height: 2px;
									background-color: #c72a4d;

									animation-name: welcome-border-bottom;
									animation-duration: 200ms;
									animation-delay: 600ms;
									animation-fill-mode: forwards;
									animation-timing-function: linear;

									@keyframes welcome-border-bottom {
										100% {
											width: 100%;
										}
									}
								`}
							/>
							<div
								className={css`
									position: absolute;
									top: 0;
									right: 0;
									width: 2px;
									height: 0;
									background-color: #c72a4d;

									animation-name: welcome-border-right;
									animation-duration: 200ms;
									animation-delay: 600ms;
									animation-fill-mode: forwards;
									animation-timing-function: linear;

									@keyframes welcome-border-right {
										100% {
											height: 100%;
										}
									}
								`}
							/>
							<span
								className={css`
									opacity: 0;
									animation-name: welcome-view;
									animation-duration: 70ms;
									animation-delay: 1000ms;
									animation-fill-mode: forwards;
									animation-iteration-count: 5;
									animation-timing-function: linear;
									font-size: 18px;

									span {
										white-space: nowrap;
										font-weight: normal !important;
									}

									@keyframes welcome-view {
										100% {
											opacity: 1;
										}
									}
								`}
							>
								Welcome
							</span>
						</div>

						<div
							className={css`
								position: relative;
								margin-top: 40px;
								width: 300px;
								height: 40px;
								padding: 5px;
								border: 1px solid #c72a4d;
								opacity: 0;

								animation-duration: 70ms;
								animation-delay: 200ms;
								animation-fill-mode: forwards;
								animation-iteration-count: 5;
								animation-timing-function: linear;
								animation-name: progress-view;

								@keyframes progress-view {
									100% {
										opacity: 1;
									}
								}
							`}
						>
							<div
								className={css`
									width: 100%;
									height: 100%;
									border: 1px solid #c72a4d;
								`}
							>
								<div
									style={{
										width:
											errorMessage !== ""
												? undefined
												: ((loadProgress === 0 ? 0 : loadProgress + 1) / 100) * 286 + "px"
									}}
									className={[
										css`
											position: relative;
											width: 0;
											max-width: 286px;
											height: 100%;
											transition-duration: 600ms;
											transition-property: width;
											transition-timing-function: ease-out;

											&:before,
											&:after {
												display: block;
												content: "";
												position: absolute;
												top: 2px;
												left: 2px;
												width: calc(100% - 4px);
												height: calc(100% - 4px);
												background-color: #caf8af;
											}

											&:before {
												filter: brightness(110%) blur(3px);
											}

											@media (scripting: none) {
												animation-duration: 1s;
												animation-delay: 250ms;
												animation-fill-mode: forwards;
												animation-iteration-count: 1;
												animation-timing-function: linear;
												animation-name: error-progress;

												@keyframes error-progress {
													70% {
														width: calc(100% / 4);
													}

													100% {
														width: 100%;
													}
												}

												&:before,
												&:after {
													animation-duration: 1s;
													animation-delay: 250ms;
													animation-fill-mode: forwards;
													animation-iteration-count: 1;
													animation-timing-function: linear;
													animation-name: error-progress-color;

													@keyframes error-progress-color {
														70% {
															background-color: #caf8af;
														}

														100% {
															background-color: #c72a4d;
														}
													}
												}
											}
										`,
										errorMessage !== ""
											? css`
													animation-duration: 1s;
													animation-delay: 250ms;
													animation-fill-mode: forwards;
													animation-iteration-count: 1;
													animation-timing-function: linear;
													animation-name: error-progress;

													@keyframes error-progress {
														70% {
															width: calc(100% / 4);
														}

														100% {
															width: 100%;
														}
													}

													&:before,
													&:after {
														animation-duration: 1s;
														animation-delay: 250ms;
														animation-fill-mode: forwards;
														animation-iteration-count: 1;
														animation-timing-function: linear;
														animation-name: error-progress-color;

														@keyframes error-progress-color {
															70% {
																background-color: #caf8af;
															}

															100% {
																background-color: #c72a4d;
															}
														}
													}
												`
											: ""
									].join(" ")}
								/>
							</div>
							<span
								className={css`
									position: absolute;
									top: 50%;
									left: 50%;
									transform: translate(-50%, -50%);

									span {
										white-space: nowrap;
										color: #f0425a;
										font-weight: normal !important;
									}
								`}
							>
								{errorMessage !== "" && (
									<>
										<span
											className={css`
												animation-duration: 0s;
												animation-delay: 950ms;
												animation-fill-mode: forwards;
												animation-iteration-count: 1;
												animation-name: error-message-hide;
												font-size: 14px;
												color: #f0425a;

												@keyframes error-message-hide {
													100% {
														font-size: 0;
														color: white;
													}
												}
											`}
										>
											Network Checking
										</span>
										<span
											className={css`
												animation-duration: 0s;
												animation-delay: 950ms;
												animation-fill-mode: forwards;
												animation-iteration-count: 1;
												animation-name: error-message-view;
												font-size: 0;
												color: #f0425a;

												@keyframes error-message-view {
													100% {
														font-size: 14px;
														color: white;
													}
												}
											`}
										>
											{errorMessage}
										</span>
									</>
								)}
								{errorMessage === "" && (
									<>
										<span
											className={css`
												animation-duration: 0s;
												animation-delay: 950ms;
												animation-fill-mode: forwards;
												animation-iteration-count: 1;
												animation-name: error-message-hide;
												font-size: 14px;
												color: #f0425a;

												@media (scripting: enabled) {
													display: none;
												}

												@keyframes error-message-hide {
													100% {
														font-size: 0;
														color: white;
													}
												}
											`}
										>
											Network Checking
										</span>
										<span
											className={css`
												animation-duration: 0s;
												animation-delay: 950ms;
												animation-fill-mode: forwards;
												animation-iteration-count: 1;
												animation-name: error-message-view;
												font-size: 0;
												color: #f0425a;

												@media (scripting: enabled) {
													display: none;
												}

												@keyframes error-message-view {
													100% {
														font-size: 14px;
														color: white;
													}
												}
											`}
										>
											Script Error
										</span>
									</>
								)}
								{errorMessage === "" && (
									<span
										className={css`
											font-size: 14px;
											@media (scripting: none) {
												display: none;
											}
										`}
									>
										{!networkChecked
											? "Network Checking"
											: fontsLoading
												? "Fonts Loading"
												: imageLoading
													? "Images Loading"
													: twitterLoading
														? "Widgets Loading"
														: "Ready"}
									</span>
								)}
							</span>
						</div>
					</div>
					{twitterLoading && ready && (
						<div
							id="twitter-loading-widget"
							className={css`
								width: 300px;
								height: 100%;
								opacity: 0;
								user-select: none;
								pointer-events: none;
								overflow: hidden;
							`}
						>
							<a
								className={[
									"twitter-timeline",
									css`
										text-decoration: none;
										width: 100%;
										height: 100%;
									`
								].join(" ")}
								href="https://twitter.com/Akime_Aki?ref_src=twsrc%5Etfw"
								data-chrome="noheader nofooter"
								data-theme="dark"
							>
								読込中...
							</a>
							<script async src="https://platform.twitter.com/widgets.js" />
						</div>
					)}
				</div>
			) : (
				<></>
			)}
		</>
	);
}
