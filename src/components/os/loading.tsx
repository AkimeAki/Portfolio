"use client";

import { osLoading } from "@/atom";
import { useStore } from "@nanostores/react";
import { css } from "@kuma-ui/core";
import { useEffect, useState } from "react";
import RandomFont from "@/components/os/RandomFont";

export default function () {
	const $osLoading = useStore(osLoading);
	const [imageLoading, setImageLoading] = useState<boolean>(true);
	const [fontsLoading, setFontsLoading] = useState<boolean>(true);
	const [agent, setAgent] = useState<string>("");
	const [ready, setReady] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setReady(true);
		}, 200);
	}, []);

	useEffect(() => {
		const getLoadingData = async () => {
			const targetUrls = [
				"/icon/github.png",
				"/icon/niconico.png",
				"/icon/twitch.png",
				"/icon/x.png",
				"/icon/youtube.png",
				"/aki-signal.png",
				"/aki.png"
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
						z-index: calc(infinity);
						padding: 10px;
						user-select: none;
						pointer-events: none;

						* {
							color: white;
							font-size: 15px;
							font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック",
								"Yu Gothic", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Verdana, Meiryo;
						}
					`}
				>
					<p>
						<RandomFont text="Welcome" />
					</p>
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
								font-family: "DotGothic16";
							`}
						>
							{">"} Hello{" "}
							{(() => {
								const emojis = ["🍣", "🍵", "☕", "🐱", "🦜", "🪳"];

								return emojis[Math.floor(Math.random() * emojis.length)];
							})()}{" "}
							<span
								className={css`
									font-family: "DotGothic16";
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
