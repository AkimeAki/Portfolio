"use client";

import { css } from "@kuma-ui/core";
import Image from "next/image";
import ProfileImage from "@/assets/profile/aki.png";
import { useWindowManager } from "@/context/WindowManagerContext";
import { APPS_DATA } from "@/data/app";

export function Profile() {
	const { dispatch } = useWindowManager();

	return (
		<div
			className={css`
				container-type: inline-size;
				width: 100%;
				overflow-y: scroll;
				height: 100%;
				line-height: 1.4;
				color: #e9e9e9;

				p {
					margin-bottom: 10px;
				}
			`}
		>
			<div
				className={css`
					max-width: 1100px;
					margin: 0 auto;
					width: 100%;
					padding: 30px;
				`}
			>
				<div
					className={css`
						display: flex;
						gap: 30px;
						width: 100%;

						@container (max-width: 900px) {
							align-items: center;
							flex-direction: column;
						}
					`}
				>
					<div
						className={css`
							flex: 1;
						`}
					>
						<p>
							名前：
							<ruby
								className={css`
									font-size: 20px;
								`}
							>
								彩季
								<rp
									className={css`
										font-size: 14px;
									`}
								>
									(
								</rp>
								<rt
									className={css`
										font-size: 10px;
										text-align: center;
									`}
								>
									アキ
								</rt>
								<rp>)</rp>
							</ruby>
						</p>
						<p>
							適当にウェブ開発などやってるゆっくり実況者。もしくは、適当にゆっくり実況をやっているウェブエンジニアです。
						</p>
						<p>
							実績や作ったものは 「
							<span
								data-cursor="pointer"
								className={css`
									color: #53f71f;
									user-select: none;
								`}
								onClick={() => {
									const app = APPS_DATA.find((app) => app.id === "portfolio");
									if (app !== undefined) {
										dispatch({ type: "OPEN", payload: { app } });
									}
								}}
							>
								作ったもの
							</span>
							」を見てください。依頼などあれば
							<a
								href="https://x.com/Akime_Aki"
								target="_blank"
								data-cursor="pointer"
								className={css`
									color: #43c1e7;
									margin: 0 5px;
									white-space: nowrap;
									user-select: none;
								`}
								rel="noreferrer"
							>
								XのDM
							</a>
							やメール（
							<span
								className={css`
									font-family:
										"游ゴシック体", YuGothic, "游ゴシック", "メイリオ", Meiryo,
										"Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "ＭＳ Ｐゴシック", sans-serif;
								`}
							>
								contact@shikiiro.net
							</span>
							）でご連絡ください🙇
						</p>
					</div>
					<div
						className={css`
							max-width: 200px;
							width: 100%;
						`}
					>
						<Image
							alt="彩季"
							width={200}
							className={css`
								width: 100%;
								user-select: none;
								pointer-events: none;
							`}
							src={ProfileImage}
						/>
					</div>
				</div>
				<div>
					<p>好きなこと</p>
					<p>・ウェブ制作</p>
					<p>・動画編集</p>
					<p>・3Dモデリング（限定的）</p>
					<p>・イラスト（練習中）</p>
				</div>
			</div>
		</div>
	);
}
