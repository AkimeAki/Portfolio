import { InlineStyle } from "@/components/atoms/InlineStyle";
import { css } from "@kuma-ui/core";

export const dynamic = "force-static";

export default function () {
	return (
		<>
			<InlineStyle
				css={`
					body {
						background-color: #f3eee6;

						&[data-touch="true"] {
							display: flex;
							justify-content: center;
							align-items: center;

							&[data-iframe="true"] {
								display: flex;
							}
						}
					}
				`}
			/>
			<div
				className={css`
					display: flex;
					gap: 10px;
					padding: 20px;
					line-height: 1.4;
					justify-content: center;
					font-family: ArkPixelJA, DotGothic16, sans-serif;

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
						flex: 1;

						body[data-touch="true"] & {
							@media (max-width: 560px) {
								order: 2;
							}
						}
					`}
				>
					<div>
						<p>ドット絵の素材配布サイトを作りました。</p>
						<p>ドット屋さんってことです。無料ですけど。</p>
					</div>
					<div>
						<a
							href="https://pixel.gives"
							className={css`
								border-top: 2px solid #6e6358;
								border-bottom: 2px solid #111516;
								border-radius: 4px;
								color: #faf5b1;
								background-color: #4d3d36;
								padding: 10px 20px 12px;
								text-decoration: none;
								line-height: 1;
								font-size: 18px;
								display: block;
								text-align: center;

								&:hover {
									background-color: #554a46;
								}
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

						width: 200px;
						aspect-ratio: 1/1;
						position: relative;

						&:before {
							content: "";
							position: absolute;
							top: 5px;
							left: 5px;
							z-index: -1;
							display: block;
							background-color: #482b1a;
							width: 100%;
							height: 100%;
						}
					`}
				>
					<img
						src="/service/dotya.png"
						alt="どっとや"
						className={css`
							image-rendering: pixelated;
							vertical-align: bottom;
							background-color: white;
							width: 100%;
							height: 100%;
						`}
					/>
				</div>
			</div>
		</>
	);
}
