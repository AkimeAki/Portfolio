"use client";

import { osLoading } from "@/atom";
import { useStore } from "@nanostores/react";
import { css } from "@kuma-ui/core";
import { useEffect, useState } from "react";
import RandomFont from "@/components/os/RandomFont";
import Link from "next/link";

interface Props {
	notFound?: boolean;
}

export default function ({ notFound = false }: Props) {
	const $osLoading = useStore(osLoading);
	const [imageLoading, setImageLoading] = useState<boolean>(true);
	const [fontsLoading, setFontsLoading] = useState<boolean>(true);
	const [agent, setAgent] = useState<string>("");
	const [ready, setReady] = useState(false);
	const [isValidJS, setIsValidJS] = useState<boolean>(false);

	useEffect(() => {
		setIsValidJS(true);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			if (!notFound) {
				setReady(true);
			}
		}, 200);
	}, [notFound]);

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
				"/app/kagarinosu.png"
			];
			await Promise.all(targetUrls.map((target) => fetch(target)));
			setTimeout(() => {
				setImageLoading(false);
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
				}, 500);
			});
		}
	}, [ready]);

	useEffect(() => {
		if (!imageLoading && !fontsLoading) {
			setTimeout(() => {
				osLoading.set(false);
			}, 3000);
		}
	}, [imageLoading, fontsLoading]);

	useEffect(() => {
		if (!imageLoading && !fontsLoading) {
			setTimeout(() => {
				const userAgent = window.navigator.userAgent.toLowerCase();
				setAgent(userAgent);
			}, 1000);
		}
	}, [imageLoading, fontsLoading]);

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
						padding: 10px;
						user-select: none;
						pointer-events: none;

						* {
							color: white;
							font-size: 15px;
							font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック",
								"Yu Gothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Verdana, Meiryo;
							font-weight: normal;
						}
					`}
				>
					<p>
						<RandomFont text="Welcome" />
					</p>
					{(!isValidJS || notFound) && (
						<p
							className={css`
								opacity: 0;
								animation-name: viewPermissionCheck;
								animation-delay: 500ms;
								animation-fill-mode: forwards;
								animation-duration: 0s;

								@keyframes viewPermissionCheck {
									100% {
										opacity: 1;
									}
								}
							`}
						>
							<RandomFont text="> Network Check... " />
							<span
								className={css`
									color: #c72a4d;
									font-weight: bold;
									opacity: 0;

									animation-name: viewPermissionCheck;
									animation-delay: 3s;
									animation-fill-mode: forwards;
									animation-duration: 0s;
								`}
							>
								{notFound ? "404" : "Error"}
							</span>
							<span
								className={css`
									display: block;
									opacity: 0;

									span,
									a {
										color: #c72a4d;
										font-weight: bold;
									}

									span {
										display: block;
									}

									animation-name: viewPermissionCheck;
									animation-delay: 4s;
									animation-fill-mode: forwards;
									animation-duration: 0s;
								`}
							>
								{!notFound && <>{"> "}Networkが問題が発生中</>}
								{notFound && (
									<>
										<span>{"> "}アクセス先が見つかりませんでした</span>
										<span>
											{"> "}
											<Link
												href="/"
												className={css`
													cursor: pointer;
													pointer-events: all;
												`}
											>
												再起動する
											</Link>
										</span>
									</>
								)}
							</span>
						</p>
					)}
					{ready && (
						<>
							<p>
								<RandomFont text="> Network Check... " />
								<span
									className={css`
										color: #c8d38e;
										font-weight: bold;
									`}
								>
									Done
								</span>
							</p>
							<p>
								<RandomFont text="> Images Loading... " />
								{!imageLoading && (
									<span
										className={css`
											color: #c8d38e;
											font-weight: bold;
										`}
									>
										Done
									</span>
								)}
							</p>
							<p>
								<RandomFont text="> Fonts Loading... " />
								{!fontsLoading && (
									<span
										className={css`
											color: #c8d38e;
											font-weight: bold;
										`}
									>
										Done
									</span>
								)}
							</p>
						</>
					)}
					{agent !== "" && (
						<p
							className={css`
								font-family: "BestTenCRT";
							`}
						>
							{">"} Hello{" "}
							{(() => {
								const emojis = ["🍣", "🍵", "☕", "🐱", "🦜", "🪳"];

								return emojis[Math.floor(Math.random() * emojis.length)];
							})()}{" "}
							<span
								className={css`
									font-family: "BestTenCRT";
									color: #c72a4d;
									font-weight: bold;
								`}
							>
								{agent}.
							</span>
						</p>
					)}
				</div>
			) : (
				<></>
			)}
		</>
	);
}
