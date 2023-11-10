/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SectionTitle, SectionTitle2 } from "@/components/atoms/SectionTitle";
import { PortfolioWeb, PortfolioYouTube, PortfolioEmbed } from "@/components/atoms/Portfolio";
import { Button } from "@/components/atoms/Button";
import { useState } from "react";

export const Portfolio = (): JSX.Element => {
	const [selectTab, setSelectTab] = useState<"movie" | "web" | "chrome" | "mctexture">("movie");

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
				<SectionTitle>作ったもの</SectionTitle>
				<p>作ったもの置いてます。</p>
			</div>
			<div
				css={css`
					display: flex;
					gap: 20px;
					flex-wrap: wrap;

					@media screen and (max-width: 900px) {
						gap: 10px;

						button {
							font-size: 15px;
						}
					}
				`}
			>
				<Button
					onClick={() => {
						setSelectTab("movie");
					}}
					selected={selectTab === "movie"}
				>
					動画
				</Button>
				<Button
					onClick={() => {
						setSelectTab("web");
					}}
					selected={selectTab === "web"}
				>
					ウェブサイト
				</Button>
				<Button
					onClick={() => {
						setSelectTab("chrome");
					}}
					selected={selectTab === "chrome"}
				>
					Chrome 拡張機能
				</Button>
				<Button
					onClick={() => {
						setSelectTab("mctexture");
					}}
					selected={selectTab === "mctexture"}
				>
					Minecraft リソースパック
				</Button>
			</div>
			<div
				css={css`
					display: flex;
					flex-wrap: wrap;
					row-gap: 50px;
					column-gap: 30px;

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
				{selectTab === "movie" && (
					<>
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
					</>
				)}
				{selectTab === "web" && (
					<>
						<div>
							<div>
								<SectionTitle2>ポートフォリオ（このサイト）</SectionTitle2>
								<p>Astro + Reactを使用して作成しました。Cloudflare Pagesでホスティングしています。</p>
							</div>
							<PortfolioWeb url="https://aki.wtf/" />
						</div>
						<div>
							<div>
								<SectionTitle2>ブログ</SectionTitle2>
								<p>Astroを使用して作成しました。Cloudflare Pagesでホスティングしています。</p>
							</div>
							<PortfolioWeb url="https://blog.aki.wtf/" />
						</div>
					</>
				)}
				{selectTab === "chrome" && (
					<>
						<div>
							<div>
								<SectionTitle2>Keybinds for Google Chat</SectionTitle2>
								<p>Google ChatのキーバインドをカスタマイズするChrome拡張機能です。</p>
							</div>
							<PortfolioEmbed url="https://chrome.google.com/webstore/detail/kabocfciobpmopkcbiphmgdljpdlighk" />
						</div>
						<div>
							<div>
								<SectionTitle2>Convert and Download Image</SectionTitle2>
								<p>画像の拡張子を変換した上で保存することができるChrome拡張機能です。</p>
							</div>
							<PortfolioEmbed url="https://chrome.google.com/webstore/detail/kinldkcfdohpgpedpglhcfjenoaklhkk" />
						</div>
						<div>
							<div>
								<SectionTitle2>Print for Google Apps Script Page</SectionTitle2>
								<p>
									Google Apps Script製のウェブページを正常に印刷できるようにするChrome拡張機能です。
								</p>
							</div>
							<PortfolioEmbed url="https://chrome.google.com/webstore/detail/gacknebdjgldkfjibmbkkdbkihomoiaj" />
						</div>
						<div>
							<div>
								<SectionTitle2>カーソルを追従する四角いの</SectionTitle2>
								<p>
									全ウェブページでマウスカーソルにオブジェクトがついてきたり、リンクで形が変わったりする娯楽Chrome拡張機能です。
								</p>
							</div>
							<PortfolioEmbed url="https://chrome.google.com/webstore/detail/nlfopomlpjjjlafgigcmmkjeaghbbjpn" />
						</div>
					</>
				)}
				{selectTab === "mctexture" && (
					<>
						<div>
							<div>
								<SectionTitle2>Kawaii Piglin</SectionTitle2>
								<p>ピグリンをかわいい女の子にする3Dリソースパックです。</p>
							</div>
							<PortfolioEmbed url="https://a-k-i.booth.pm/items/4469914" />
						</div>
						<div>
							<div>
								<SectionTitle2>Paper Airplane Trident</SectionTitle2>
								<p>トライデントを紙飛行機にする3Dリソースパックです。</p>
							</div>
							<PortfolioEmbed url="https://a-k-i.booth.pm/items/4470965" />
						</div>
					</>
				)}
			</div>
		</div>
	);
};
