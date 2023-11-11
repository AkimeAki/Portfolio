/** @jsxImportSource @emotion/react */
import { SectionTitle, SectionTitle2 } from "@/components/atoms/SectionTitle";
import { MainLayout } from "@/layouts/MainLayout";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const tableStyle = css`
	border: 1px solid white;
	border-collapse: collapse;

	thead {
		th,
		td {
			font-weight: 700;
		}
	}

	tbody {
		th,
		td {
			text-align: left;
		}
	}

	th,
	td {
		border: 2px solid white;
		padding: 10px 20px;

		@media screen and (max-width: 600px) {
			font-size: 15px;
			padding: 5px 10px;
		}
	}
`;

export const Works = (): JSX.Element => {
	return (
		<MainLayout>
			<div>
				<SectionTitle>お仕事</SectionTitle>
				<p>
					動画編集もしくは、ウェブ制作の依頼受け付けています。
					<br />
					（デザインは苦手です。用意していただけるととても助かります。）
				</p>
				<p>
					<Link to="mailto:aki@magic-pla.net">✉ aki@magic-pla.net</Link>
					か、
					<Link to="https://x.com/Akime_Aki" target="_blank">
						X (Twitter)
					</Link>
					のDMなど連絡が取れるもので連絡くれると嬉しいです。
				</p>
				<p>予算や納期の相談などお待ちしています。</p>
			</div>
			<div>
				<SectionTitle>金額目安</SectionTitle>
				<p>あくまで目安なので、金額は上下する可能性があります。</p>
				<p>また、金額調整、例に書いた要件以外も対応可能なので、気軽にご相談ください。</p>
				<p>
					<SectionTitle2>動画編集（例）</SectionTitle2>
				</p>
				<p>
					<table css={tableStyle}>
						<thead>
							<tr>
								<th>内容</th>
								<th>金額</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>
									1時間の配信や録画を10分動画に編集
									<ul>
										<li>カット、テロップ、効果音付与</li>
									</ul>
								</th>
								<td>9,000円/本</td>
							</tr>
							<tr>
								<th>
									用意した台本に沿ったゆっくりボイスを使用した動画制作
									<ul>
										<li>ゆっくりボイス、テロップ、効果音付与</li>
									</ul>
								</th>
								<td>12,000円/本</td>
							</tr>
						</tbody>
					</table>
				</p>
				<p>
					<SectionTitle2>ウェブ制作（例）</SectionTitle2>
				</p>
				<p>
					<table css={tableStyle}>
						<thead>
							<tr>
								<th>内容</th>
								<th>金額</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>静的なウェブサイト制作</th>
								<td>10,000円/ページ</td>
							</tr>
							<tr>
								<th>ウェブ制作後のホスティング</th>
								<td>8,000円/サイト</td>
							</tr>
							<tr>
								<th>Chrome拡張機能制作</th>
								<td>2,000円/機能</td>
							</tr>
							<tr>
								<th>Discord Bot制作</th>
								<td>5,000円/機能</td>
							</tr>
						</tbody>
					</table>
				</p>
			</div>
			<div>
				<SectionTitle>出来そうなこと</SectionTitle>
				<p>
					<SectionTitle2>動画編集</SectionTitle2>
				</p>
				<p>
					<ul>
						<li>ゲーム実況の動画編集</li>
						<li>配信の切り抜き作成</li>
					</ul>
				</p>
				<p>
					<SectionTitle2>ウェブ制作</SectionTitle2>
				</p>
				<p>
					<ul>
						<li>WordPressのテーマ作成</li>
						<li>HTML, CSS, JavaScriptなどを用いたコーディング</li>
						<li>ReactやNextなどを用いたウェブ制作</li>
						<li>Discord Botの作成</li>
						<li>Chrome拡張機能の作成</li>
						<li>ヘッドレスCMSへの移行など</li>
					</ul>
				</p>
			</div>
		</MainLayout>
	);
};
