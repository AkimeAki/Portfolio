/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SectionTitle, SectionTitle2 } from "@/components/atoms/SectionTitle";
import { Link } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { ContentWrapper } from "@/components/molecules/ContentWrapper";
import { BackImageStyle } from "@/components/atoms/BackImageStyle";

const tableStyle = css`
	th {
		text-align: left;
		width: 150px;
		vertical-align: top;
	}

	@media screen and (max-width: 550px) {
		* {
			font-size: 16px;
		}

		th {
			display: block;
		}

		td {
			display: block;
			padding-left: 30px;
		}
	}
`;

export const About = (): JSX.Element => {
	return (
		<MainLayout>
			<ContentWrapper>
				<SectionTitle>私について</SectionTitle>
				<p>動画編集するタイプのウェブエンジニアです。</p>
			</ContentWrapper>
			<ContentWrapper>
				<SectionTitle>作ったもの</SectionTitle>
				<p>
					作ったものは<Link to="/portfolio">作ったものページ</Link>に載せています。
				</p>
			</ContentWrapper>
			<ContentWrapper>
				<SectionTitle>お仕事</SectionTitle>
				<p>動画編集もしくは、ウェブ制作の依頼受け付けています。</p>
				<p>
					<Link to="mailto:aki@magic-pla.net">✉ aki@magic-pla.net</Link>
					か、
					<Link
						css={BackImageStyle("/img/icon/white/twitter.png", 30, 30, -20)}
						to="https://x.com/Akime_Aki"
						target="_blank"
					>
						X (Twitter)
					</Link>
					のDMなど連絡が取れるもので連絡くれると嬉しいです。
				</p>
				<p>
					詳しくは<Link to="/works">お仕事ページ</Link>をご覧ください。
				</p>
			</ContentWrapper>
			<SectionTitle>経験ある技術とか</SectionTitle>
			<ContentWrapper>
				<SectionTitle2>言語など</SectionTitle2>
				<table css={tableStyle}>
					<tbody>
						<tr>
							<th>ちょっとわかる：</th>
							<td>JavaScript, TypeScript, HTML, CSS, SCSS</td>
						</tr>
						<tr>
							<th>なんとかわかる：</th>
							<td>日本語, PHP, SQL</td>
						</tr>
						<tr>
							<th>存在は知ってる：</th>
							<td>English</td>
						</tr>
					</tbody>
				</table>
			</ContentWrapper>
			<ContentWrapper>
				<SectionTitle2>ライブラリなど</SectionTitle2>
				<table css={tableStyle}>
					<tbody>
						<tr>
							<th>ちょっとわかる：</th>
							<td>
								<span css={BackImageStyle("/img/icon/white/nodejs.png", 30, -30, 20)}>Node.js</span>,
								React, Next, Astro, discord.js, Express
							</td>
						</tr>
						<tr>
							<th>なんとかわかる：</th>
							<td>Deno, Laravel, NW.js</td>
						</tr>
					</tbody>
				</table>
			</ContentWrapper>
			<ContentWrapper>
				<SectionTitle2>インフラなど</SectionTitle2>
				<table css={tableStyle}>
					<tbody>
						<tr>
							<th>ちょっとわかる：</th>
							<td>Vercel, Netlify</td>
						</tr>
						<tr>
							<th>なんとかわかる：</th>
							<td>Google Cloud, Cloudflare, Firebase, PlanetScale</td>
						</tr>
						<tr>
							<th>存在は知ってる：</th>
							<td>Amazon Web Services</td>
						</tr>
					</tbody>
				</table>
			</ContentWrapper>
			<ContentWrapper>
				<SectionTitle2>ツールなど</SectionTitle2>
				<table css={tableStyle}>
					<tbody>
						<tr>
							<th>ちょっとわかる：</th>
							<td>
								Visual Studio Code,{" "}
								<span css={BackImageStyle("/img/icon/white/aviutl.png", 30, 50, -20)}>AviUtl</span>,
								WordPress, microCMS, Docker, Git, GitHub
							</td>
						</tr>
						<tr>
							<th>なんとかわかる：</th>
							<td>Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop, MySQL</td>
						</tr>
					</tbody>
				</table>
			</ContentWrapper>
		</MainLayout>
	);
};
