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
				imgSrc="/portfolio/allergy-navi.png"
				href="https://allergy-navi.com/"
			/>
			<PortfolioArea
				title={"どっとや"}
				description={"ドット絵の素材配布サイトです。"}
				imgSrc="/portfolio/dotya.png"
				href="https://pixel.gives/"
			/>
			<PortfolioArea
				title={"カーソルを追従する四角いの"}
				description={"マウスの後ろから四角いのが付いてくるChrome拡張機能です。"}
				imgSrc="/portfolio/rectangle-follows-cursor.png"
				href="https://chromewebstore.google.com/detail/nlfopomlpjjjlafgigcmmkjeaghbbjpn"
			/>
			<PortfolioArea
				title={"拡張子を変更して画像を保存"}
				description={"画像の拡張子（フォーマット）を変換した上で保存することができるChrome拡張機能です。"}
				imgSrc="/portfolio/change-format.png"
				href="https://chromewebstore.google.com/detail/kinldkcfdohpgpedpglhcfjenoaklhkk"
			/>
			<PortfolioArea
				title={"Google Apps Script製ページ用印刷"}
				description={"Google Apps Script製のウェブページを正常に印刷できるようにするChrome拡張機能です。"}
				imgSrc="/portfolio/gas-print.png"
				href="https://chromewebstore.google.com/detail/gacknebdjgldkfjibmbkkdbkihomoiaj"
			/>
		</div>
	);
}
