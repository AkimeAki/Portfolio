import { css } from "@kuma-ui/core";

export function AllergyNavi() {
	return (
		<div
			className={css`
				padding: 20px;
				line-height: 1.4;
				width: 100%;
				height: 100%;
				color: #363636;
				background-color: white;
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
					<div>
						<p>アレルギーの方向けのアレルゲン情報サイトを作りました。</p>
						<p>みんなでアレルギー情報を持ち寄りましょう！</p>
					</div>
					<div>
						<a
							href="https://allergy-navi.com"
							className={css`
								border-radius: 4px;
								color: white;
								background-color: #f36164;
								padding: 10px 20px 10px;
								text-decoration: none;
								line-height: 1;
								font-size: 18px;
								display: block;
								text-align: center;
								font-weight: bold;
							`}
							target="_blank"
							rel="noreferrer"
						>
							アクセスする
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
					<img
						src="/portfolio/service/allergynavi.webp"
						alt="アレルギーナビ"
						className={css`
							vertical-align: bottom;
							border: 4px solid #f1f1f1;
							width: 200px;
							aspect-ratio: 1/1;
						`}
					/>
				</div>
			</div>
		</div>
	);
}
