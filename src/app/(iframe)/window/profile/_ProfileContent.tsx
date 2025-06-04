"use client";

import { css } from "@kuma-ui/core";
import Image from "next/image";

export function ProfileContent() {
	return (
		<div
			className={css`
				container-type: inline-size;

				p {
					margin-bottom: 10px;
					line-height: 1.4;
				}
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
								window.parent.postMessage(
									{
										name: "AkiOSOpenWindow",
										value: "portfolio"
									},
									origin
								);
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
						`}
						src={"/profile/aki.png"}
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
	);
}
