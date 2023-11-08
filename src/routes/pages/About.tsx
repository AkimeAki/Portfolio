/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SectionTitle, SectionTitle2 } from "@/components/atoms/SectionTitle";

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
				<SectionTitle>私について</SectionTitle>
				<p>動画編集するタイプのウェブエンジニアです。</p>
			</div>
			<div>
				<SectionTitle>作品</SectionTitle>
				<p>作ったものはポートフォリオページに載せています。</p>
			</div>
			<div>
				<SectionTitle>お仕事</SectionTitle>
				<p>動画編集もしくは、ウェブ制作の依頼受け付けています。</p>
				<p>✉ aki@magic-pla.net か、TwitterのDMなど連絡が取れるもので連絡くれると嬉しいです。</p>
			</div>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					gap: 20px;
				`}
			>
				<SectionTitle>経験ある技術とか</SectionTitle>
				<div>
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
				</div>
				<div>
					<SectionTitle2>ライブラリなど</SectionTitle2>
					<table css={tableStyle}>
						<tbody>
							<tr>
								<th>ちょっとわかる：</th>
								<td>Node.js, React, Next, Astro, discord.js, Express</td>
							</tr>
							<tr>
								<th>なんとかわかる：</th>
								<td>Deno, Laravel, NW.js</td>
							</tr>
							<tr>
								<th>存在は知ってる：</th>
								<td>Babylon.js</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div>
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
				</div>
				<div>
					<SectionTitle2>ツールなど</SectionTitle2>
					<table css={tableStyle}>
						<tbody>
							<tr>
								<th>ちょっとわかる：</th>
								<td>Visual Studio Code, AviUtl, WordPress, Docker, Git, GitHub</td>
							</tr>
							<tr>
								<th>なんとかわかる：</th>
								<td>Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop, MySQL</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
