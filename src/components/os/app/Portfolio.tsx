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
				description={"アレルギーの方向けのアレルゲン情報サイトです。"}
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
				description={"ドット絵の素材配布サイトです。"}
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
				title={"カーソルを追従する四角いの"}
				description={"マウスの後ろから四角いのが付いてくるChrome拡張機能です。"}
				href="https://chromewebstore.google.com/detail/nlfopomlpjjjlafgigcmmkjeaghbbjpn"
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
				description={"画像の拡張子（フォーマット）を変換した上で保存することができるChrome拡張機能です。"}
				href="https://chromewebstore.google.com/detail/kinldkcfdohpgpedpglhcfjenoaklhkk"
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
				description={"Google Apps Script製のウェブページを正常に印刷できるようにするChrome拡張機能です。"}
				href="https://chromewebstore.google.com/detail/gacknebdjgldkfjibmbkkdbkihomoiaj"
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
				description={"Adobe Premiere ProとAdobe After Effectsを使用しました。"}
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
				description={"Adobe Premiere ProとAdobe After Effectsを使用しました。"}
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
			<PortfolioArea title={"YouTube用エンディング2"} description={"AviUtlで作成しました。"}>
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
		</div>
	);
}
