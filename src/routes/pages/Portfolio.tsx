/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SectionTitle, SectionTitle2 } from "@/components/atoms/SectionTitle";
import { PortfolioWeb, PortfolioYouTube } from "@/components/atoms/Portfolio";

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
			<div>
				<SectionTitle2>YouTube用エンディング</SectionTitle2>
				<PortfolioYouTube url="AzuWH9S4jRk?start=22" />
			</div>
			<div>
				<SectionTitle2>ニコニコ動画用エンディング</SectionTitle2>
				<PortfolioYouTube url="9-wqOhxLYyw?start=22" />
			</div>
			<div>
				<SectionTitle2>YouTube用エンディング2</SectionTitle2>
				<PortfolioYouTube url="bxIPbOl98f0" />
			</div>
			<div>
				<SectionTitle2>ブログ</SectionTitle2>
				<PortfolioWeb url="https://blog.aki.wtf/" />
			</div>
		</div>
	);
};
