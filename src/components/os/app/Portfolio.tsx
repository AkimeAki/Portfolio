import { css } from "@kuma-ui/core";
import PortfolioArea from "@/components/os/PortfolioArea";

export default function () {
	return (
		<div
			className={css`
				padding: 30px;
				display: flex;
				flex-direction: column;
				gap: 150px;
				max-width: 1000px;
				width: 100%;
				margin: 0 auto;

				@container (max-width: 900px) {
					gap: 80px;
				}
			`}
		>
			<PortfolioArea
				title={"アレルギーナビ（制作中）"}
				description={
					<>
						<p>アレルギーの方向けのアレルゲン情報サイトです。</p>
						<p>みんなでアレルギー情報を持ち寄りましょう。飲食店のみんな、アレルギー対応忘れないでね。</p>
					</>
				}
				href="https://allergy-navi.com/"
			>
				<img
					className={css`
						width: 100%;
					`}
					src="/portfolio/allergy-navi.png"
				/>
			</PortfolioArea>
			<PortfolioArea
				title={"どっとや"}
				description={
					<>
						<p>ドット絵の素材配布サイトです。</p>
						<p>ドット屋さんってことです。無料ですけど。</p>
					</>
				}
				href="https://pixel.gives/"
			>
				<img
					className={css`
						width: 100%;
					`}
					src="/portfolio/dotya.png"
				/>
			</PortfolioArea>
			<PortfolioArea
				title={"SimpleV"}
				description={
					<>
						<p>
							配信用のシンプルな立ち絵を表示できるサービスです。あなたの声に合わせて立ち絵を切り替えることができます。
						</p>
						<p>これであなたもVTuberのVくらいにはなれましたね。</p>
					</>
				}
				href="https://simple-v.aki.wtf/"
			>
				<img
					className={css`
						width: 100%;
					`}
					src="/portfolio/simplev.png"
				/>
			</PortfolioArea>
			<PortfolioArea
				title={"カーソルを追従する四角いの"}
				description={
					<>
						<p>マウスの後ろから四角いのが付いてくるChrome拡張機能です。重いので入れないほうが良いです。</p>
						<p>
							よほど自分のPCにスペックがあって、Googleのサーバーと張り合える自信があっても入れないほうが良いです。
						</p>
					</>
				}
				href="https://chromewebstore.google.com/detail/nlfopomlpjjjlafgigcmmkjeaghbbjpn"
				buttonTitle={"Chrome ウェブストアで見る"}
			>
				<img
					className={css`
						width: 100%;
					`}
					src="/portfolio/rectangle-follows-cursor.png"
				/>
			</PortfolioArea>
			<PortfolioArea
				title={"拡張子を変更して画像を保存"}
				description={
					<>
						<p>画像の拡張子（フォーマット）を変換した上で保存することができるChrome拡張機能です。</p>
						<p>便利です。</p>
					</>
				}
				href="https://chromewebstore.google.com/detail/kinldkcfdohpgpedpglhcfjenoaklhkk"
				buttonTitle={"Chrome ウェブストアで見る"}
			>
				<img
					className={css`
						width: 100%;
					`}
					src="/portfolio/change-format.png"
				/>
			</PortfolioArea>
			<PortfolioArea
				title={"Google Apps Script製ページ用印刷"}
				description={
					<>
						<p>
							Google Apps
							Script製のウェブページを正常に印刷できるようにするChrome拡張機能です。ニッチな層を指してます。
						</p>
						<p>君だよ君、会社でGAS製サイトを作って印刷して皆に配る必要がある君だよ。</p>
					</>
				}
				href="https://chromewebstore.google.com/detail/gacknebdjgldkfjibmbkkdbkihomoiaj"
				buttonTitle={"Chrome ウェブストアで見る"}
			>
				<img
					className={css`
						width: 100%;
					`}
					src="/portfolio/gas-print.png"
				/>
			</PortfolioArea>
			<PortfolioArea
				title={"DevContainer Install Local Extensions"}
				description={
					<>
						<p>Dev Containerを使った時にローカルの拡張機能全部使いてぇよって人におすすめの拡張機能です。</p>
						<p>
							開発コンテナにローカルにインストールされている拡張機能をインストールする設定「dev.containers.defaultExtensionsIfInstalledLocally」に自動的にローカルにインストールされている全ての拡張機能を設定します。この機能、、、デフォで良くないか？
						</p>
					</>
				}
				href="https://marketplace.visualstudio.com/items?itemName=AkimeAki.devcontainer-install-local-extensions"
				buttonTitle={"Visual Studio Marketplaceで見る"}
			>
				<img
					className={css`
						width: 100%;
					`}
					src="/portfolio/devcontainer-local.png"
				/>
			</PortfolioArea>
		</div>
	);
}
