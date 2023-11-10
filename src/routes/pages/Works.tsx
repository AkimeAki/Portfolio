/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SectionTitle, SectionTitle2 } from "@/components/atoms/SectionTitle";

export const Works = (): JSX.Element => {
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
				<SectionTitle>お仕事</SectionTitle>
				<p>
					動画編集もしくは、ウェブ制作の依頼受け付けています。
					<br />
					（デザインは苦手です。用意していただけるととても助かります。）
				</p>
				<p>✉ aki@magic-pla.net か、TwitterのDMなど連絡が取れるもので連絡くれると嬉しいです。</p>
				<p>
					個人でお仕事を請け負った経験があまりないため、比較的に金額は安価で対応させていただいています。予算や納期の相談などお待ちしています。
				</p>
				<SectionTitle2>出来そうなこと</SectionTitle2>
				<p>動画編集</p>
				<ul>
					<li>ゲーム実況の動画編集</li>
					<li>配信の切り抜き作成</li>
				</ul>
				<p>ウェブ制作</p>
				<ul>
					<li>WordPressのテーマ作成</li>
					<li>HTML, CSS, JavaScriptなどを用いたコーディング</li>
					<li>ReactやNextなどを用いたウェブ制作</li>
					<li>Discord Botの作成</li>
					<li>Chrome拡張機能の作成</li>
					<li>ヘッドレスCMSへの移行など</li>
				</ul>
			</div>
		</div>
	);
};
