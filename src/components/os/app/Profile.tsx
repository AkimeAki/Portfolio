"use client";

import { isTouch } from "@/atom";
import ColorLabel from "@/components/ColorLabel";
import useWindow from "@/libs/useWindow";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";

export default function () {
	const { openWindow } = useWindow();
	const $isTouch = useStore(isTouch);

	return (
		<div
			className={css`
				display: flex;
				gap: 50px;
				flex-direction: column;
				padding: 20px;
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
								`}
							>
								アキ
							</rt>
							<rp>)</rp>
						</ruby>
					</p>
					<p>
						適当にウェブ開発などやってるゆっくり実況者。もしくは、適当にゆっくり実況をやっているウェブエンジニア。
					</p>
					<p>
						<span
							className={css`
								color: #43c1e7;
								cursor: pointer;
							`}
							onClick={() => {
								if ($isTouch) {
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
								if ($isTouch) {
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
			<div
				className={css`
					display: flex;
					gap: 30px;
					flex-direction: column;
					align-items: flex-start;

					table {
						width: 100%;

						th,
						td {
							border-bottom: 2px solid #d0e79f;
							padding: 10px 0;
						}

						th {
							text-align: left;
							width: 170px;

							@container (max-width: 900px) {
								width: 120px;
								font-size: 12px;
							}
						}

						td {
							div {
								display: flex;
								flex-wrap: wrap;
								gap: 5px;
							}
						}
					}
				`}
			>
				<h3>開発系スキル</h3>
				<h4>よく使う</h4>
				<table>
					<tbody>
						<tr>
							<th>言語</th>
							<td>
								<div>
									<ColorLabel bgColor="#3774bd" color="white">
										TypeScript
									</ColorLabel>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<h4>苦手</h4>
				<table>
					<tbody>
						<tr>
							<th>言語</th>
							<td>
								<div>
									<ColorLabel bgColor="white" color="#b0182f">
										Japanese
									</ColorLabel>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<h3>映像系スキル</h3>
				<h4>それなりに分からない</h4>
				<table>
					<tbody>
						<tr>
							<th>動画編集ソフト</th>
							<td>
								<div>
									<ColorLabel bgColor="#010100" color="white">
										AviUtl
									</ColorLabel>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<h4>どちらかというとできない</h4>
				<table>
					<tbody>
						<tr>
							<th>動画編集ソフト</th>
							<td>
								<div>
									<ColorLabel bgColor="#030056" color="#9593f3">
										Adobe Premiere Pro
									</ColorLabel>
									<ColorLabel bgColor="#030056" color="#9693f3">
										Adobe After Effect
									</ColorLabel>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
