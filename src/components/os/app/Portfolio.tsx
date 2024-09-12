import { css } from "@kuma-ui/core";
import PortfolioArea from "@/components/os/PortfolioArea";

export default function () {
	return (
		<div
			className={css`
				padding: 20px;
				display: flex;
				flex-direction: column;
				gap: 30px;
				max-width: 1000px;
				width: 100%;
				margin: 0 auto;
			`}
		>
			<PortfolioArea
				title={"アレルギーナビ（制作中）"}
				description={<p>アレルギーの方向けのアレルゲン情報サイトです。</p>}
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
				description={<p>ドット絵の素材配布サイトです。</p>}
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
					<p>
						配信用のシンプルな立ち絵を表示できるサービスです。あなたの声に合わせて立ち絵を切り替えることができます。
					</p>
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
				description={<p>マウスの後ろから四角いのが付いてくるChrome拡張機能です。</p>}
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
				description={<p>画像の拡張子（フォーマット）を変換した上で保存することができるChrome拡張機能です。</p>}
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
				description={<p>Google Apps Script製のウェブページを正常に印刷できるようにするChrome拡張機能です。</p>}
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
				title={"YouTube用エンディング1"}
				description={<p>Adobe Premiere ProとAdobe After Effectsを使用しました。</p>}
			>
				<iframe
					className={css`
						width: 100%;
						aspect-ratio: 16/9;
					`}
					src="https://www.youtube.com/embed/AzuWH9S4jRk?si=INpmJPgza2PxDvkC&amp;start=23"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				/>
			</PortfolioArea>
			<PortfolioArea
				title={"ニコニコ動画用エンディング"}
				description={<p>Adobe Premiere ProとAdobe After Effectsを使用しました。</p>}
			>
				<iframe
					className={css`
						width: 100%;
						aspect-ratio: 16/9;
					`}
					src="https://www.youtube.com/embed/9-wqOhxLYyw?si=mtzggzLUcGhl3ojI&amp;start=23"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				/>
			</PortfolioArea>
			<PortfolioArea title={"YouTube用エンディング2"} description={<p>AviUtlで作成しました。</p>}>
				<iframe
					className={css`
						width: 100%;
						aspect-ratio: 16/9;
					`}
					src="https://www.youtube.com/embed/bxIPbOl98f0?si=FFl5yrfdjUGUClgY"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				/>
			</PortfolioArea>
			<PortfolioArea
				title={"DevContainer Install Local Extensions"}
				description={
					<>
						<p>Dev Containerを使った時にローカルの拡張機能全部使いてぇよって人におすすめの拡張機能です。</p>
						<p>
							開発コンテナにローカルにインストールされている拡張機能をインストールする設定「dev.containers.defaultExtensionsIfInstalledLocally」に自動的にローカルにインストールされている全ての拡張機能を設定します。
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
