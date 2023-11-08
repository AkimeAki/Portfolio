/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SectionTitle, SectionTitle2 } from "@/components/atoms/SectionTitle";

const tableStyle = css`
	th {
		text-align: left;
		width: 150px;
		vertical-align: top;
	}

	@media screen and (max-width: 500px) {
		* {
			font-size: 16px;
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
			<div>
				<SectionTitle>技術</SectionTitle>
				<SectionTitle2>言語など</SectionTitle2>
				<table css={tableStyle}>
					<tbody>
						<tr>
							<th>ちょっとわかる：</th>
							<td>JavaScript, TypeScript, HTML, CSS, SCSS</td>
						</tr>
						<tr>
							<th>なんとかわかる：</th>
							<td>日本語, PHP</td>
						</tr>
						<tr>
							<th>存在は知ってる：</th>
							<td>English</td>
						</tr>
					</tbody>
				</table>
				<SectionTitle2>フレームワークなど</SectionTitle2>
				<table css={tableStyle}>
					<tbody>
						<tr>
							<th>ちょっとわかる：</th>
							<td>Node.js, React, Next, Astro</td>
						</tr>
						<tr>
							<th>なんとかわかる：</th>
							<td>Laravel</td>
						</tr>
					</tbody>
				</table>
				<SectionTitle2>ツール</SectionTitle2>
				<table css={tableStyle}>
					<tbody>
						<tr>
							<th>ちょっとわかる：</th>
							<td>Visual Studio Code, AviUtl, WordPress</td>
						</tr>
						<tr>
							<th>なんとかわかる：</th>
							<td>Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
