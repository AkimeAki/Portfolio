import { css } from "@kuma-ui/core";

export default function () {
	return (
		<div
			className={css`
				display: flex;
				gap: 50px;
				flex-direction: column;
				padding: 20px;
				max-width: 1000px;
				width: 100%;
				margin: 0 auto;

				h3 {
					font-weight: bold;
					display: table;
					font-size: 18px;
					color: #e73e6b;
					background-color: #d0e79a;
					padding: 5px 25px 7px;
				}
			`}
		>
			<div
				className={css`
					display: flex;
					gap: 30px;
					width: 100%;

					@container (max-width: 900px) {
						flex-direction: column;
					}
				`}
			>
				<div
					className={css`
						flex: 1;
					`}
				>
					<p>
						名前：
						<ruby
							className={css`
								font-size: 20px;
							`}
						>
							彩季
							<rp
								className={css`
									font-size: 14px;
								`}
							>
								(
							</rp>
							<rt
								className={css`
									font-size: 10px;
								`}
							>
								アキ
							</rt>
							<rp>)</rp>
						</ruby>
					</p>
					<p>
						適当にウェブ開発などやってるゆっくり実況者。もしくは、適当にゆっくり実況をやっているウェブエンジニア。
					</p>
					<p>フリーナと重音テトが推しです。ここを見た人は推すことをおすすめします。</p>
				</div>
				<div
					className={css`
						max-width: 300px;
						width: 100%;
					`}
				>
					<img
						className={css`
							width: 100%;
						`}
						src="/profile/aki.png"
					/>
				</div>
			</div>
			<div
				className={css`
					display: flex;
					gap: 30px;
					flex-direction: column;
					align-items: flex-start;
				`}
			>
				<h3>開発系スキル</h3>
				<div
					className={css`
						display: flex;
						gap: 10px;
						flex-direction: column;
						align-items: flex-start;

						h4 {
							font-weight: bold;
						}
					`}
				>
					<h4>比較的できる</h4>
					<p>言語：HTML, CSS, SCSS, JavaScript, TypeScript</p>
					<p>フレームワークなど：React, Next.js, Astro, jQuery</p>
					<p>ツール：Visual Studio Code, Git, GitHub, Node.js, WordPress, Docker</p>
					<p>インフラ：Cloudflare Pages</p>
					<h4>どちらかというとできる</h4>
					<p>言語：PHP</p>
					<p>フレームワークなど：Laravel</p>
					<p>インフラ：Debian, Ubuntu, AWS Amplify, Google Cloud Run, Vercel, Netlify</p>
					<h4>自信なし</h4>
					<p>言語：Japanese</p>
					<h4>大好き</h4>
					<p>ライブラリ：Emotion, Kuma UI</p>
				</div>
			</div>
			<div
				className={css`
					display: flex;
					gap: 30px;
					flex-direction: column;
					align-items: flex-start;
				`}
			>
				<h3>映像系スキル</h3>
				<div
					className={css`
						display: flex;
						gap: 10px;
						flex-direction: column;
						align-items: flex-start;

						h4 {
							font-weight: bold;
						}
					`}
				>
					<h4>比較的できる</h4>
					<p>AviUtl</p>
					<h4>どちらかというとできる</h4>
					<p>Adobe Premiere Pro, Adobe After Effect</p>
					<h4>自信なし</h4>
					<p>日本語</p>
				</div>
			</div>
			<div
				className={css`
					display: flex;
					gap: 10px;
					flex-direction: column;
					align-items: flex-start;
				`}
			>
				<h3>実績</h3>
				<p>
					ないです...。趣味で作ったやつはあるのでこのウィンドウを閉じて「作ったもの」ってとこ見てください...。
				</p>
			</div>
		</div>
	);
}
