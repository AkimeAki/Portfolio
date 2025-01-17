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
			`}
		>
			<PortfolioArea
				title={"アレルギーナビ（制作中）"}
				iconSrc="/portfolio/allergy-navi.png"
				href="https://allergy-navi.com/"
			>
				<p>アレルギーの方向けのアレルゲン情報サイトです。</p>
				<p>みんなでアレルギー情報を持ち寄りましょう。飲食店のみんな、アレルギー対応忘れないでね。</p>
			</PortfolioArea>
			<PortfolioArea title={"どっとや"} iconSrc="/portfolio/dotya.png" href="https://pixel.gives/">
				<p>ドット絵の素材配布サイトです。</p>
				<p>ドット屋さんってことです。無料ですけど。</p>
			</PortfolioArea>
			<PortfolioArea title={"SimpleV"} href="https://simple-v.aki.wtf/">
				<p>
					配信用のシンプルな立ち絵を表示できるサービスです。あなたの声に合わせて立ち絵を切り替えることができます。
				</p>
				<p>これであなたもVTuberのVくらいにはなれましたね。</p>
			</PortfolioArea>
			<PortfolioArea
				title={"カーソルを追従する四角いの"}
				iconSrc="/portfolio/rectangle-follows-cursor.png"
				href="https://chromewebstore.google.com/detail/nlfopomlpjjjlafgigcmmkjeaghbbjpn"
				buttonTitle={"Chrome ウェブストアで見る"}
			>
				<p>マウスの後ろから四角いのが付いてくるChrome拡張機能です。重いので入れないほうが良いです。</p>
				<p>
					よほど自分のPCにスペックがあって、Googleのサーバーと張り合える自信があっても入れないほうが良いです。
				</p>
			</PortfolioArea>
			<PortfolioArea
				title={"拡張子を変更して画像を保存"}
				iconSrc="/portfolio/change-format.png"
				href="https://chromewebstore.google.com/detail/kinldkcfdohpgpedpglhcfjenoaklhkk"
				buttonTitle={"Chrome ウェブストアで見る"}
			>
				<p>画像の拡張子（フォーマット）を変換した上で保存することができるChrome拡張機能です。</p>
				<p>便利です。</p>
			</PortfolioArea>
			<PortfolioArea
				title={"Google Apps Script製ページ用印刷"}
				iconSrc="/portfolio/gas-print.png"
				href="https://chromewebstore.google.com/detail/gacknebdjgldkfjibmbkkdbkihomoiaj"
				buttonTitle={"Chrome ウェブストアで見る"}
			>
				<p>
					Google Apps
					Script製のウェブページを正常に印刷できるようにするChrome拡張機能です。ニッチな層を指してます。
				</p>
				<p>君だよ君、会社でGAS製サイトを作って印刷して皆に配る必要がある君だよ。</p>
			</PortfolioArea>
			<PortfolioArea
				title={"DevContainer Install Local Extensions"}
				iconSrc="/portfolio/devcontainer-local.png"
				href="https://marketplace.visualstudio.com/items?itemName=AkimeAki.devcontainer-install-local-extensions"
				buttonTitle={"Visual Studio Marketplaceで見る"}
			>
				<p>Dev Containerを使った時にローカルの拡張機能全部使いてぇよって人におすすめの拡張機能です。</p>
				<p>
					開発コンテナにローカルにインストールされている拡張機能をインストールする設定「dev.containers.defaultExtensionsIfInstalledLocally」に自動的にローカルにインストールされている全ての拡張機能を設定します。この機能、、、デフォで良くないか？
				</p>
			</PortfolioArea>
			<PortfolioArea
				title={"Kawaii Piglin"}
				iconSrc="/portfolio/piglin.jpg"
				href="https://a-k-i.booth.pm/items/4469914"
				buttonTitle={"BOOTHでダウンロードする"}
			>
				<p>Minecraft: Java Edition用の3Dリソースパックです。ピグリンがかわいくなります。</p>
				<p>ピグリンがかわいいね。</p>
			</PortfolioArea>
			<PortfolioArea
				title={"Paper Airplane Trident"}
				iconSrc="/portfolio/trident.jpg"
				href="https://a-k-i.booth.pm/items/4470965"
				buttonTitle={"BOOTHでダウンロードする"}
			>
				<p>Minecraft: Java Edition用の3Dリソースパックです。トライデントが紙飛行機になります。</p>
				<p>飛ばせ</p>
			</PortfolioArea>
			<PortfolioArea
				title={"Thread Keeper"}
				href="https://discord.com/oauth2/authorize?client_id=1302954112668798996&permissions=17179869184&integration_type=0&scope=bot"
				buttonTitle={"Discordサーバーに導入する"}
				iconSrc="/portfolio/threadkeeper.webp"
			>
				<p>Discordサーバーのスレッドを常にアクティブにし続けるBotです。</p>
				<p>君のスレッドを守りたい。</p>
			</PortfolioArea>
		</div>
	);
}
