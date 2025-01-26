"use client";

import { isTouch } from "@/atom";
import useWindow from "@/libs/useWindow";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { useRouter } from "next/navigation";

export default function () {
	return (
		<div
			className={css`
				padding: 30px;
			`}
		>
			<div
				className={css`
					display: flex;
					gap: 50px;
					flex-direction: column;
					max-width: 1000px;
					width: 100%;
					margin: 0 auto;

					h3 {
						display: table;
						font-size: 18px;
						color: #e73e6b;
						background-color: #d0e79a;
						padding: 5px 25px 7px;
					}
				`}
			>
				<ProfileContent />
			</div>
		</div>
	);
}

export const ProfileContent = () => {
	const { openWindow } = useWindow();
	const $isTouch = useStore(isTouch);
	const router = useRouter();

	return (
		<>
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

						p {
							margin-bottom: 10px;
						}
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
						<span
							className={css`
								color: #43c1e7;
								cursor: pointer;
							`}
							onClick={() => {
								if ($isTouch || document.body.dataset.layout !== "os") {
									window.open(
										"https://www.youtube.com/watch?v=DkROVPRcceM&list=PLnVoUTTAoKRrI5sgu4NdqiJivv8FZKdci"
									);
								} else {
									openWindow("furina");
								}
							}}
						>
							フリーナ
						</span>
						と
						<span
							className={css`
								color: #fa5353;
								cursor: pointer;
							`}
							onClick={() => {
								if ($isTouch || document.body.dataset.layout !== "os") {
									window.open(
										"https://www.youtube.com/watch?v=LLjfal8jCYI&list=PLnVoUTTAoKRrLKI-G9oAymJm_k8RVs_m9"
									);
								} else {
									openWindow("teto");
								}
							}}
						>
							重音テト
						</span>
						が推しです。ここを見た人は推すことをおすすめします。
					</p>
					<p>
						実績や作ったものは 「
						<span
							className={css`
								color: #53f71f;
								cursor: pointer;
							`}
							onClick={() => {
								if (document.body.dataset.layout !== "os") {
									router.push("/portfolio");
								} else {
									openWindow("portfolio");
								}
							}}
						>
							作ったもの
						</span>
						」を見てください。依頼などあれば
						<a
							href="https://x.com/Akime_Aki"
							target="_blank"
							className={css`
								color: #43c1e7;
								cursor: pointer;
								margin: 0 5px;
								white-space: nowrap;
							`}
						>
							XのDM
						</a>
						やメール（
						<span
							className={css`
								font-family: "游ゴシック体", YuGothic, "游ゴシック", "メイリオ", Meiryo,
									"Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "ＭＳ Ｐゴシック", sans-serif;
							`}
						>
							contact@mail.aki.wtf
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
					<img
						className={css`
							width: 100%;
						`}
						src="/profile/aki.png"
					/>
				</div>
			</div>
			<div>
				<p>できること</p>
				<p>・ウェブ制作</p>
				<p>・動画編集</p>
			</div>
		</>
	);
};
