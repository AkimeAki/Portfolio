/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import AppIcon from "@/components/AppIcon";
import TaskbarIcon from "@/components/TaskbarIcon";
import AkiSignal from "@/components/AkiSignal";
import { useEffect } from "react";
import AppWindow from "@/components/AppWindow";
import { useStore } from "@nanostores/react";
import { openAppList } from "@/atom";

export default function () {
	const $openAppList = useStore(openAppList);

	const appSelect = (id: string) => {
		let result = [...$openAppList];

		if (!result.includes(id)) {
			result.push(id);
		} else {
			result = result.filter((item) => {
				return item !== id;
			});

			result = [...result, id];
		}

		openAppList.set(result);
	};

	useEffect(() => {
		console.log($openAppList);
	}, [$openAppList]);

	return (
		<div
			css={css`
				position: relative;
				width: 100%;
				height: 100%;
			`}
		>
			<div
				css={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-image: radial-gradient(#555555, #000000);
				`}
			>
				<AkiSignal />
				<div
					css={css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: column;
						gap: 30px;
						flex-wrap: wrap;
						padding: 10px;
						user-select: none;
					`}
				>
					<AppIcon
						onClick={() => {
							appSelect("portfolio");
						}}
					>
						作ったもの
					</AppIcon>
					<AppIcon
						onClick={() => {
							appSelect("blog");
						}}
					>
						ブログ
					</AppIcon>
					<AppIcon
						onClick={() => {
							appSelect("faq");
						}}
					>
						FAQ
					</AppIcon>
				</div>
				<div
					css={css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						user-select: none;
						pointer-events: none;
					`}
				>
					<AppWindow title="作ったもの" id="portfolio">
						tesuto
					</AppWindow>
					<AppWindow title="ブログ" id="blog">
						ブログ
					</AppWindow>
					<AppWindow title="FAQ" id="faq">
						FAQ
					</AppWindow>
				</div>
			</div>
			<div
				css={css`
					position: absolute;
					bottom: 0;
					left: 0;
					height: 70px;
					width: 100%;
				`}
			>
				<div
					css={css`
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
					css={css`
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
					`}
				>
					<TaskbarIcon iconPath="/icon/x.png" alt="Xのアイコン" href="https://x.com/Akime_Aki" />
					<TaskbarIcon
						iconPath="/icon/youtube.png"
						alt="YouTubeのアイコン"
						href="https://www.youtube.com/@AkimeAki"
					/>
					<TaskbarIcon
						iconPath="/icon/twitch.png"
						alt="Twitchのアイコン"
						href="https://twitch.tv/Akime_Aki"
					/>
					<TaskbarIcon
						iconPath="/icon/niconico.png"
						alt="ニコニコ動画のアイコン"
						href="https://www.nicovideo.jp/user/98282698"
					/>
					<TaskbarIcon
						iconPath="/icon/github.png"
						alt="GitHubのアイコン"
						href="https://github.com/AkimeAki"
					/>
				</div>
			</div>
		</div>
	);
}
