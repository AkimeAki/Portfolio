import { css } from "@kuma-ui/core";

export function Blog() {
	return (
		<div
			className={css`
				width: 100%;
				height: 100%;
				background-image: radial-gradient(#fff, #bebebe);
				padding: 20px;
				line-height: 1.4;
				font-family:
					游ゴシック体,
					YuGothic,
					游ゴシック,
					メイリオ,
					Meiryo,
					Hiragino Kaku Gothic Pro,
					ヒラギノ角ゴ Pro W3,
					ＭＳ Ｐゴシック,
					sans-serif;
				color: black;

				body[data-touch="true"] & {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			`}
		>
			<div
				className={css`
					display: flex;
					gap: 10px;
					justify-content: center;

					body[data-touch="true"] & {
						display: flex;
						justify-content: center;
						align-items: center;

						@media (max-width: 560px) {
							flex-direction: column;
						}
					}
				`}
			>
				<div
					className={css`
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						gap: 10px;

						body[data-touch="true"] & {
							@media (max-width: 560px) {
								order: 2;
							}
						}
					`}
				>
					<div
						className={css`
							font-weight: bold;
						`}
					>
						<p>自分の技術ブログです。</p>
						<p>技術に関する備忘録書いてます。</p>
					</div>
					<div>
						<a
							href="https://blog.shikiiro.net"
							className={css`
								margin: 10px 0;
								text-decoration: none;
								line-height: 1.2;
								font-size: 18px;
								display: block;
								text-align: center;
								font-weight: bold;
								color: #f0425a;

								&:hover {
									color: #353d06;
									background-color: #edf8af;
								}
							`}
							target="_blank"
							rel="noreferrer"
						>
							<span
								className={css`
									a:hover & {
										display: none;
									}
								`}
							>
								アクセスする
							</span>
							<span
								className={css`
									display: none;

									a:hover & {
										display: inline;
									}
								`}
							>
								cd /blog
							</span>
						</a>
					</div>
				</div>
				<div
					className={css`
						body[data-touch="true"] & {
							@media (max-width: 560px) {
								order: 1;
							}
						}
					`}
				>
					<div
						className={css`
							position: relative;
							width: 200px;
							aspect-ratio: 1/1;
							overflow: hidden;

							&:before {
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
								content: "";
								display: block;
								animation: grain 0.2s infinite steps(2);
								filter: contrast(2);
								background: repeating-linear-gradient(
									0deg,
									transparent 0%,
									rgba(255, 255, 255, 0.2) 5%
								);
							}

							@keyframes grain {
								0% {
									transform: translate(0);
								}
								100% {
									transform: translate(-10px, -10px);
								}
							}
						`}
					>
						<img
							src="/portfolio/service/techblog.png"
							alt="孅いウェブエンジニアブログ"
							className={css`
								position: relative;
								image-rendering: pixelated;
								vertical-align: bottom;
								border: 4px solid white;
								width: 100%;
								height: 100%;
								z-index: 1;
							`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
