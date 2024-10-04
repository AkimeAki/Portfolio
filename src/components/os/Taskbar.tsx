"use client";

import { osLoading } from "@/atom";
import TaskbarIcon from "@/components/os/TaskbarIcon";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";

export default function () {
	const $osLoading = useStore(osLoading);
	const [nowTime, setNowTime] = useState<string>("");

	useEffect(() => {
		const id = setInterval(() => {
			const nowDate = new Date();

			const nowYear = nowDate.getFullYear();
			const nowMonth = ("00" + (nowDate.getMonth() + 1)).slice(-2);
			const nowDay = ("00" + nowDate.getDate()).slice(-2);
			const nowHour = ("00" + nowDate.getHours()).slice(-2);
			const nowMin = ("00" + nowDate.getMinutes()).slice(-2);
			const nowSec = ("00" + nowDate.getSeconds()).slice(-2);

			setNowTime(`${nowYear}/${nowMonth}/${nowDay}\n${nowHour}:${nowMin}:${nowSec}`);
		}, 1000);

		return () => {
			clearInterval(id);
		};
	}, []);

	return (
		<div
			style={{ animationName: $osLoading ? "" : "taskbar-signal" }}
			className={css`
				position: absolute;
				bottom: 0;
				left: 0;
				height: 70px;
				width: 100%;
				opacity: 0;
				z-index: calc(infinity - 1);
				animation-duration: 70ms;
				animation-delay: 1000ms;
				animation-fill-mode: forwards;
				animation-iteration-count: 5;
				animation-timing-function: linear;
				user-select: none;
				pointer-events: none;

				@keyframes taskbar-signal {
					100% {
						opacity: 1;
						pointer-events: all;
					}
				}
			`}
		>
			<div
				style={{ animationName: $osLoading ? "" : "taskbar-view" }}
				className={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 0;
					height: 100%;
					animation-duration: 300ms;
					animation-delay: 1000ms;
					animation-fill-mode: forwards;
					animation-iteration-count: 1;
					animation-timing-function: ease-in-out;

					@keyframes taskbar-view {
						100% {
							width: 100%;
						}
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
						backdrop-filter: blur(2px);
						background-color: transparent;

						&:before {
							position: absolute;
							top: 0;
							left: 0;
							display: block;
							content: "";
							width: 100%;
							height: calc(100% - 2px);
							background-color: #ed3256;
							border-top: 2px solid #bb2a4a;
							opacity: 0.7;
						}
					`}
				/>
				<div
					className={css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						display: flex;
						align-items: center;
						padding: 0 20px;
						gap: 20px;
						z-index: 1;

						@media (max-width: 720px) {
							justify-content: center;
						}
					`}
				>
					<TaskbarIcon iconPath="/icon/x.png" alt={"Xのアイコン"} href="https://x.com/Akime_Aki" />
					<TaskbarIcon
						iconPath="/icon/youtube.png"
						alt={"YouTubeのアイコン"}
						href="https://www.youtube.com/@AkimeAki"
					/>
					<TaskbarIcon
						iconPath="/icon/twitch.png"
						alt={"Twitchのアイコン"}
						href="https://twitch.tv/Akime_Aki"
					/>
					<TaskbarIcon
						iconPath="/icon/niconico.png"
						alt={"ニコニコ動画のアイコン"}
						href="https://www.nicovideo.jp/user/98282698"
					/>
					<TaskbarIcon
						iconPath="/icon/github.png"
						alt={"GitHubのアイコン"}
						href="https://github.com/AkimeAki"
					/>
				</div>
				<div
					className={css`
						position: absolute;
						top: 50%;
						right: 20px;
						transform: translateY(-50%);
						color: white;
						white-space: pre-wrap;
						font-size: 16px;
						text-align: right;
						line-height: 1;
						pointer-events: auto;
						z-index: calc(infinity - 1);

						@media (max-width: 720px) {
							display: none;
						}
					`}
				>
					{nowTime}
				</div>
			</div>
		</div>
	);
}
