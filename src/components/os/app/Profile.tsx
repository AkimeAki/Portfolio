import ColorLabel from "@/components/ColorLabel";
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
					<div
						className={css`
							display: flex;
							align-items: baseline;
							flex-wrap: wrap;
							gap: 5px;
						`}
					>
						<p>言語：</p>
						<ColorLabel bgColor="#d94a2d" color="white">
							HTML
						</ColorLabel>
						<ColorLabel bgColor="#2e49d8" color="white">
							CSS
						</ColorLabel>
						<ColorLabel bgColor="#c66093" color="white">
							SCSS
						</ColorLabel>
						<ColorLabel bgColor="#edd840" color="black">
							JavaScript
						</ColorLabel>
						<ColorLabel bgColor="#3774bd" color="white">
							TypeScript
						</ColorLabel>
					</div>
					<div
						className={css`
							display: flex;
							align-items: baseline;
							flex-wrap: wrap;
							gap: 5px;
						`}
					>
						<p>フレームワークなど：</p>
						<ColorLabel bgColor="#68d3f1" color="black">
							React
						</ColorLabel>
						<ColorLabel bgColor="#000000" color="white">
							Next.js
						</ColorLabel>
						<ColorLabel bgColor="#f2591c" color="white">
							Astro
						</ColorLabel>
						<ColorLabel bgColor="#1c6fab" color="white">
							jQuery
						</ColorLabel>
						<ColorLabel bgColor="#2eadb3" color="white">
							Tailwind CSS
						</ColorLabel>
					</div>
					<div
						className={css`
							display: flex;
							align-items: baseline;
							flex-wrap: wrap;
							gap: 5px;
						`}
					>
						<p>ツール：</p>
						<ColorLabel bgColor="#36a7e8" color="white">
							Visual Studio Code
						</ColorLabel>
						<ColorLabel bgColor="#e54d37" color="white">
							Git
						</ColorLabel>
						<ColorLabel bgColor="#171516" color="white">
							GitHub
						</ColorLabel>
						<ColorLabel bgColor="#5b9358" color="white">
							Node.js
						</ColorLabel>
						<ColorLabel bgColor="#729fb3" color="white">
							WordPress
						</ColorLabel>
						<ColorLabel bgColor="#2a5fe1" color="white">
							Docker
						</ColorLabel>
						<ColorLabel bgColor="#3d45c1" color="white">
							AWS CodeCommit
						</ColorLabel>
						<ColorLabel bgColor="#2a2b2e" color="white">
							microCMS
						</ColorLabel>
					</div>
					<div
						className={css`
							display: flex;
							align-items: baseline;
							flex-wrap: wrap;
							gap: 5px;
						`}
					>
						<p>インフラ：</p>
						<ColorLabel bgColor="#eb9444" color="black">
							Cloudflare Pages
						</ColorLabel>
						<ColorLabel bgColor="#e13842" color="white">
							AWS Amplify
						</ColorLabel>
					</div>
					<h4>どちらかというとできる</h4>
					<div
						className={css`
							display: flex;
							align-items: baseline;
							flex-wrap: wrap;
							gap: 5px;
						`}
					>
						<p>言語：</p>
						<ColorLabel bgColor="#7477aa" color="white">
							PHP
						</ColorLabel>
					</div>
					<div
						className={css`
							display: flex;
							align-items: baseline;
							flex-wrap: wrap;
							gap: 5px;
						`}
					>
						<p>フレームワークなど：</p>
						<ColorLabel bgColor="#f22928" color="white">
							Laravel
						</ColorLabel>
						<ColorLabel bgColor="#5c64ed" color="white">
							discord.js
						</ColorLabel>
						<ColorLabel bgColor="#2a2d37" color="#a1e6f3">
							Electron
						</ColorLabel>
					</div>
					<div
						className={css`
							display: flex;
							align-items: baseline;
							flex-wrap: wrap;
							gap: 5px;
						`}
					>
						<p>DB：</p>
						<ColorLabel bgColor="#4085e6" color="white">
							CockroachDB
						</ColorLabel>
					</div>
					<div
						className={css`
							display: flex;
							align-items: baseline;
							flex-wrap: wrap;
							gap: 5px;
						`}
					>
						<p>ツール：</p>
						<ColorLabel bgColor="#d9d9d9" color="#4981e6">
							Google Search Console
						</ColorLabel>
						<ColorLabel bgColor="#e87622" color="white">
							Google Analytics
						</ColorLabel>
						<ColorLabel bgColor="#4880e8" color="white">
							Google Apps Script
						</ColorLabel>
						<ColorLabel bgColor="#313131" color="white">
							Newt
						</ColorLabel>
					</div>
					<div
						className={css`
							display: flex;
							align-items: baseline;
							flex-wrap: wrap;
							gap: 5px;
						`}
					>
						<p>インフラ：</p>
						<ColorLabel bgColor="#a0002f" color="white">
							Debian
						</ColorLabel>
						<ColorLabel bgColor="#d2451f" color="white">
							Ubuntu
						</ColorLabel>
						<ColorLabel bgColor="#4880e8" color="white">
							Cloud Run
						</ColorLabel>
						<ColorLabel bgColor="#000000" color="white">
							Vercel
						</ColorLabel>
						<ColorLabel bgColor="#5095b7" color="white">
							Netlify
						</ColorLabel>
						<ColorLabel bgColor="#cd6323" color="white">
							AWS Lamda
						</ColorLabel>
					</div>
					<h4>自信なし</h4>
					<div
						className={css`
							display: flex;
							align-items: baseline;
							flex-wrap: wrap;
							gap: 5px;
						`}
					>
						<p>言語：</p>
						<ColorLabel bgColor="white" color="#b0182f">
							Japanese
						</ColorLabel>
					</div>
					<h4>大好き</h4>
					<div
						className={css`
							display: flex;
							align-items: baseline;
							flex-wrap: wrap;
							gap: 5px;
						`}
					>
						<p>ライブラリ：</p>
						<ColorLabel bgColor="#c966b9" color="#ffda6c">
							Emotion
						</ColorLabel>
						<ColorLabel bgColor="#9bbee8" color="black">
							Kuma UI
						</ColorLabel>
					</div>
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
					<div
						className={css`
							display: flex;
							align-items: baseline;
							flex-wrap: wrap;
							gap: 5px;
						`}
					>
						<ColorLabel bgColor="#010100" color="white">
							AviUtl
						</ColorLabel>
						<ColorLabel bgColor="#191919" color="white">
							ゆっくりムービーメーカー3
						</ColorLabel>
					</div>
					<h4>どちらかというとできる</h4>
					<div
						className={css`
							display: flex;
							align-items: baseline;
							flex-wrap: wrap;
							gap: 5px;
						`}
					>
						<ColorLabel bgColor="#030056" color="#9593f3">
							Adobe Premiere Pro
						</ColorLabel>
						<ColorLabel bgColor="#030056" color="#9693f3">
							Adobe After Effect
						</ColorLabel>
						<ColorLabel bgColor="#191919" color="white">
							ゆっくりムービーメーカー4
						</ColorLabel>
					</div>
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
