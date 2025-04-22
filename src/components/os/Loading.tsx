"use client";

import { osReady } from "@/atom";
import { useStore } from "@nanostores/react";
import { css } from "@kuma-ui/core";
import { useEffect, useState } from "react";
import checkBrowser from "@akimeaki/check-browser";

interface Props {
	notFound?: boolean;
}

const perLoad = 3;

export default function ({ notFound = false }: Props) {
	const $osReady = useStore(osReady);
	const [imageLoading, setImageLoading] = useState<boolean>(true);
	const [fontsLoading, setFontsLoading] = useState<boolean>(true);
	const [ready, setReady] = useState(false);
	const [networkChecked, setNetworkChecked] = useState<boolean>(false);
	const [loadProgress, setLoadProgress] = useState<number>(0);
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [userAgent, setUserAgent] = useState<string>("");
	const [browser, setBrowser] = useState<string>("");

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
		const data = checkBrowser();
		let error = false;

		if (data.os === "ios") {
			if (data.browser === "safari") {
				// toSorted
				if (data.version !== null && data.version < 16) {
					error = true;
				}
			}
		}

		if (data.os === "mac") {
			if (data.browser === "safari") {
				// toSorted
				if (data.version !== null && data.version < 16) {
					error = true;
				}
			}
		}

		if (data.os === "windows" || data.os === "mac") {
			if (data.browser === "chrome") {
				// toSorted
				if (data.version !== null && data.version < 110) {
					error = true;
				}
			}

			if (data.browser === "firefox") {
				// toSorted
				if (data.version !== null && data.version < 115) {
					error = true;
				}
			}

			if (data.browser === "opera") {
				// toSorted
				if (data.version !== null && data.version < 96) {
					error = true;
				}
			}

			if (data.browser === "edge") {
				// toSorted
				if (data.version !== null && data.version < 110) {
					error = true;
				}
			}
		}

		if (data.os === "android") {
			if (data.browser === "chrome") {
				// toSorted
				if (data.version !== null && data.version < 110) {
					error = true;
				}
			}

			if (data.browser === "firefox") {
				// toSorted
				if (data.version !== null && data.version < 115) {
					error = true;
				}
			}

			if (data.browser === "opera") {
				// toSorted
				if (data.version !== null && data.version < 74) {
					error = true;
				}
			}

			if (data.browser === "samsung") {
				// toSorted
				if (data.version !== null && data.version < 21) {
					error = true;
				}
			}

			if (data.browser === "edge") {
				// toSorted
				if (data.version !== null && data.version < 110) {
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
			setErrorMessage("Not Supported😿");
			const agent = window.navigator.userAgent.toLowerCase();
			setUserAgent(agent);
			setBrowser(`${data.os} ${data.browser} ${data.version}`);
		}
	}, []);

	useEffect(() => {
		if (ready) {
			setNetworkChecked(true);
			setLoadProgress((prev) => {
				return prev + 100 / perLoad;
			});
		}
	}, [ready]);

	useEffect(() => {
		const getLoadingData = async () => {
			const targetUrls = [
				"/icon/github.webp",
				"/icon/niconico.webp",
				"/icon/twitch.webp",
				"/icon/x.webp",
				"/icon/youtube.webp",
				"/aki-signal.png",
				"/aki.png",
				"/app/ghost.png",
				"/app/aki-coffee.png",
				"/app/blog.png",
				"/app/aki.webp",
				"/app/picaxe.png",
				"/app/simplev.webp",
				"/app/allergy-navi.webp",
				"/app/dotya.png",
				"/app/terminal.png"
			];
			for (let i = 1; i <= 36; i++) {
				targetUrls.push(`/emoji/${i}.png`);
			}

			await Promise.all(targetUrls.map((target) => fetch(target)));
			setTimeout(() => {
				setImageLoading(false);
				setLoadProgress((prev) => {
					return prev + 100 / perLoad;
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
						return prev + 100 / perLoad;
					});
				}, 500);
			});
		}
	}, [ready]);

	useEffect(() => {
		if (!imageLoading && !fontsLoading && ready) {
			setTimeout(() => {
				osReady.set(true);
			}, 3000);
		}
	}, [imageLoading, fontsLoading, ready]);

	return (
		<>
			{!$osReady ? (
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
						box-sizing: border-box; // 非対応ブラウザ用

						* {
							color: white;
							font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック",
								"Yu Gothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Verdana, Meiryo;
							font-weight: normal;
							box-sizing: border-box; // 非対応ブラウ
						}
					`}
				>
					<span
						className={css`
							position: absolute;
							opacity: 0;
							user-select: none;
							pointer-events: none;
							font-family: "BestTenCRT" !important;
						`}
					>
						a
					</span>
					<span
						className={css`
							position: absolute;
							bottom: 0;
							width: 100%;
							left: 0;
							animation-duration: 0s;
							animation-delay: 950ms;
							animation-fill-mode: forwards;
							animation-iteration-count: 1;
							animation-name: useragent-view;
							opacity: 0;
							user-select: none;
							pointer-events: none;

							div {
								color: #f0425a;
								font-size: 8px;
							}

							@keyframes useragent-view {
								100% {
									opacity: 1;
								}
							}
						`}
					>
						<div>{browser}</div>
						<div>{userAgent}</div>
					</span>
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
							!imageLoading && !fontsLoading && ready
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
								padding: 7px 50px;
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
									font-size: 16px;
									color: #f0425a;

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
									id="loading-progress"
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
								<noscript>
									<style
										dangerouslySetInnerHTML={{
											__html: /* scss */ `
											#loading-progress {
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
										`
										}}
									/>
								</noscript>
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
									<noscript>
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
											Script Error
										</span>
									</noscript>
								)}
								{errorMessage === "" && (
									<>
										<span
											id="loading-message"
											className={css`
												font-size: 14px;
											`}
										>
											{!networkChecked
												? "Network Checking"
												: fontsLoading
													? "Fonts Loading"
													: imageLoading
														? "Images Loading"
														: "Ready"}
										</span>
										<noscript>
											<style
												dangerouslySetInnerHTML={{
													__html: /* scss */ `
														#loading-message {
															display: none;
														}
													`
												}}
											/>
										</noscript>
									</>
								)}
							</span>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
}
