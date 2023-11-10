/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SectionTitle, SectionTitle2 } from "@/components/atoms/SectionTitle";
import { PortfolioWeb, PortfolioYouTube, PortfolioChromeExtension } from "@/components/atoms/Portfolio";

export const Portfolio = (): JSX.Element => {
	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;
				gap: 30px;

				p {
					line-height: 1.8;
				}
			`}
		>
			<div>
				<SectionTitle>ポートフォリオ</SectionTitle>
				<p>作ったもの置いてます。</p>
			</div>
			<div
				css={css`
					display: flex;
					flex-wrap: wrap;
					gap: 30px;

					& > div {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						width: calc(50% - 15px);
						gap: 20px;

						@media screen and (max-width: 900px) {
							width: 100%;
						}
					}
				`}
			>
				<div>
					<div>
						<SectionTitle2>YouTube用エンディング</SectionTitle2>
						<p>Adobe Premiere ProとAdobe Affter Effectsを使用しました。</p>
					</div>
					<PortfolioYouTube url="AzuWH9S4jRk?start=22" />
				</div>
				<div>
					<div>
						<SectionTitle2>ニコニコ動画用エンディング</SectionTitle2>
						<p>Adobe Premiere ProとAdobe Affter Effectsを使用しました。</p>
					</div>
					<PortfolioYouTube url="9-wqOhxLYyw?start=22" />
				</div>
				<div>
					<div>
						<SectionTitle2>YouTube用エンディング2</SectionTitle2>
						<p>AviUtlで作成しました。</p>
					</div>
					<PortfolioYouTube url="bxIPbOl98f0" />
				</div>
				<div>
					<div>
						<SectionTitle2>ブログ</SectionTitle2>
						<p>Astroを使用して作成しました。Cloudflare Pagesでホスティングしています。</p>
					</div>
					<PortfolioWeb url="https://blog.aki.wtf/" />
				</div>
				<div>
					<div>
						<SectionTitle2>ブログ</SectionTitle2>
						<p>Astroを使用して作成しました。Cloudflare Pagesでホスティングしています。</p>
					</div>
					<PortfolioWeb url="https://blog.aki.wtf/" />
				</div>
				<div>
					<div>
						<SectionTitle2>Keybinds for Google Chat</SectionTitle2>
						<p>Google ChatのキーバインドをカスタマイズするChrome拡張機能です。</p>
					</div>
					<PortfolioChromeExtension id="kabocfciobpmopkcbiphmgdljpdlighk" iframely="RzrynWD" />
				</div>
				<div>
					<div>
						<SectionTitle2>Convert and Download Image</SectionTitle2>
						<p>画像の拡張子を変換した上で保存することができるChrome拡張機能です。</p>
					</div>
					<PortfolioChromeExtension id="kinldkcfdohpgpedpglhcfjenoaklhkk" iframely="i0SuWW9" />
				</div>
				<div>
					<div>
						<SectionTitle2>Print for Google Apps Script Page</SectionTitle2>
						<p>Google Apps Script製のウェブページを正常に印刷できるようにするChrome拡張機能です。</p>
					</div>
					<PortfolioChromeExtension id="gacknebdjgldkfjibmbkkdbkihomoiaj" iframely="y7kSzMn" />
				</div>
			</div>
		</div>
	);
};
