import type { ReactNode } from "react";
import type { toolColorList } from "@/data/tool-color-label";
import { css } from "@kuma-ui/core";

export interface Portfolio {
	title: string;
	href?: string;
	buttonTitle?: string;
	iconSrc?: string;
	inCharge?: string;
	category: string;
	tools?: (keyof typeof toolColorList)[];
}

export const portfolioData: ({
	content: ReactNode;
} & Portfolio)[] = [
	{
		title: "アレルギーナビ",
		iconSrc: "/portfolio/allergy-navi.webp",
		href: "https://allergy-navi.com/",
		inCharge: "開発",
		category: "ウェブサービス",
		tools: ["typescript", "nextjs", "kumaui", "coackroachdb", "cloudrun", "workers"],
		content: (
			<>
				<p>アレルギーの方向けのアレルゲン情報サイトです。</p>
				<p>みんなでアレルギー情報を持ち寄りましょう。飲食店のみんな、アレルギー対応忘れないでね。</p>
			</>
		)
	},
	{
		title: "どっとや",
		iconSrc: "/portfolio/dotya.webp",
		href: "https://pixel.gives/",
		inCharge: "開発",
		category: "ウェブサービス",
		tools: ["typescript", "astro", "react", "pandacss", "emotion", "microcms", "pages"],
		content: (
			<>
				<p>ドット絵の素材配布サイトです。</p>
				<p>ドット屋さんってことです。無料ですけど。</p>
			</>
		)
	},
	{
		title: "SimpleV",
		href: "https://simple-v.shikiiro.net/",
		iconSrc: "/portfolio/simplev.webp",
		inCharge: "開発",
		category: "ウェブサービス",
		tools: ["typescript", "astro", "react", "emotion", "pages"],
		content: (
			<>
				<p>
					配信用のシンプルな立ち絵を表示できるサービスです。あなたの声に合わせて立ち絵を切り替えることができます。
				</p>
				<p>これであなたもVTuberのVくらいにはなれましたね。</p>
			</>
		)
	},
	{
		title: "ポートフォリオ（このサイト）",
		href: "https://shikiiro.net/",
		inCharge: "開発",
		category: "ウェブサイト",
		tools: ["typescript", "nextjs", "kumaui", "threejs", "pages"],
		content: (
			<>
				<p>このサイトです。ポートフォリオ作ってみました。</p>
				<p>めっちゃ凝ったよ！楽しんで！</p>
			</>
		)
	},
	{
		title: "某バンドのHP",
		inCharge: "開発",
		category: "ウェブサイト",
		tools: ["javascript", "php", "wordpress", "starrental"],
		content: (
			<>
				<p>とあるバンドのHPをWordPressでテーマ作成から作りました。</p>
				<p>（諸事情でURLの公開はしたくないので、個別でお問い合わせしてくれれば教えます。）</p>
			</>
		)
	},
	{
		title: "カーソルを追従する四角いの",
		iconSrc: "/portfolio/rectangle-follows-cursor.webp",
		href: "https://chromewebstore.google.com/detail/nlfopomlpjjjlafgigcmmkjeaghbbjpn",
		inCharge: "開発",
		category: "Chrome 拡張機能",
		buttonTitle: "Chrome ウェブストアで見る",
		tools: ["typescript", "react", "mui"],
		content: (
			<>
				<p>マウスの後ろから四角いのが付いてくるChrome拡張機能です。重いので入れないほうが良いです。</p>
				<p>
					よほど自分のPCにスペックがあって、Googleのサーバーと張り合える自信があっても入れないほうが良いです。
				</p>
			</>
		)
	},
	{
		title: "拡張子を変更して画像を保存",
		iconSrc: "/portfolio/change-format.webp",
		href: "https://chromewebstore.google.com/detail/kinldkcfdohpgpedpglhcfjenoaklhkk",
		inCharge: "開発",
		category: "Chrome 拡張機能",
		buttonTitle: "Chrome ウェブストアで見る",
		tools: ["typescript", "react", "mui"],
		content: (
			<>
				<p>画像の拡張子（フォーマット）を変換した上で保存することができるChrome拡張機能です。</p>
				<p>便利です。</p>
			</>
		)
	},
	{
		title: "Google Apps Script製ページ用印刷",
		iconSrc: "/portfolio/gas-print.webp",
		href: "https://chromewebstore.google.com/detail/gacknebdjgldkfjibmbkkdbkihomoiaj",
		inCharge: "開発",
		category: "Chrome 拡張機能",
		buttonTitle: "Chrome ウェブストアで見る",
		tools: ["javascript"],
		content: (
			<>
				<p>
					Google Apps
					Script製のウェブページを正常に印刷できるようにするChrome拡張機能です。ニッチな層を指してます。
				</p>
				<p>君だよ君、会社でGAS製サイトを作って印刷して皆に配る必要がある君だよ。</p>
			</>
		)
	},
	{
		title: "DevContainer Install Local Extensions",
		iconSrc: "/portfolio/devcontainer-local.webp",
		href: "https://marketplace.visualstudio.com/items?itemName=AkimeAki.devcontainer-install-local-extensions",
		inCharge: "開発",
		category: "VSCode 拡張機能",
		buttonTitle: "Visual Studio Marketplaceで見る",
		tools: ["typescript"],
		content: (
			<>
				<p>Dev Containerを使った時にローカルの拡張機能全部使いてぇよって人におすすめの拡張機能です。</p>
				<p>
					開発コンテナにローカルにインストールされている拡張機能をインストールする設定「dev.containers.defaultExtensionsIfInstalledLocally」に自動的にローカルにインストールされている全ての拡張機能を設定します。この機能、、、デフォで良くないか？
				</p>
			</>
		)
	},
	{
		title: "すずはな / Suzuhana / 스즈히나 / 铃花 (JP/EN/KR/CN)",
		iconSrc: "/portfolio/steam.webp",
		href: "https://steamcommunity.com/sharedfiles/filedetails/?id=2910319000",
		inCharge: "アニメーション",
		category: "動画編集",
		buttonTitle: "Steam ワークショップで見る",
		tools: ["aviutl"],
		content: (
			<>
				<p>すずはなさんのコア・バトルページを追加するLibrary Of RuinaのMODです。</p>
				<p>一部演出のアニメーションだけお手伝いさせていただきました。</p>
			</>
		)
	},
	{
		title: "Kawaii Piglin",
		iconSrc: "/portfolio/piglin.webp",
		href: "https://a-k-i.booth.pm/items/4469914",
		inCharge: "モデリング",
		category: "Minecraft リソースパック",
		buttonTitle: "BOOTHでダウンロードする",
		tools: ["cubikstudio"],
		content: (
			<>
				<p>Minecraft: Java Edition用の3Dリソースパックです。ピグリンがかわいくなります。</p>
				<p>ピグリンがかわいいね。</p>
			</>
		)
	},
	{
		title: "Paper Airplane Trident",
		iconSrc: "/portfolio/trident.webp",
		href: "https://a-k-i.booth.pm/items/4470965",
		inCharge: "モデリング",
		category: "Minecraft リソースパック",
		buttonTitle: "BOOTHでダウンロードする",
		tools: ["cubikstudio"],
		content: (
			<>
				<p>Minecraft: Java Edition用の3Dリソースパックです。トライデントが紙飛行機になります。</p>
				<p>飛ぶぜ</p>
			</>
		)
	},
	{
		title: "Thread Keeper",
		iconSrc: "/portfolio/threadkeeper.webp",
		href: "https://discord.com/oauth2/authorize?client_id=1302954112668798996&permissions=17179869184&integration_type=0&scope=bot",
		inCharge: "開発",
		category: "Discord Bot",
		buttonTitle: "Discordサーバーに導入する",
		tools: ["typescript", "discordjs"],
		content: (
			<>
				<p>Discordサーバーのスレッドを常にアクティブにし続けるBotです。</p>
				<p>君のスレッドを守りたい。</p>
			</>
		)
	},
	{
		title: "ロゴの規約など収集所",
		iconSrc: "/portfolio/logo-hiroba.webp",
		href: "https://logo.shikiiro.net/",
		inCharge: "開発",
		category: "ウェブサービス",
		tools: ["typescript", "astro", "pandacss", "pages"],
		content: (
			<>
				<p>ロゴの規約など適当に集めてます。</p>
			</>
		)
	},
	{
		title: "孅いウェブエンジニアブログ",
		iconSrc: "/portfolio/kayowai.webp",
		href: "https://blog.shikiiro.net/",
		inCharge: "開発, ブログ執筆",
		category: "ウェブサイト",
		tools: ["typescript", "astro", "microcms", "pages"],
		content: (
			<>
				<p>自分の技術ブログです。</p>
				<p>技術に関する備忘録書いてます。</p>
			</>
		)
	},
	{
		title: "Aki Coffee☕ - AIが背景画像を生成するブログ",
		href: "https://coffee.shikiiro.net/",
		inCharge: "開発, ブログ執筆",
		category: "ウェブサイト",
		tools: ["typescript", "astro", "microcms", "pages", "chatgpt"],
		content: (
			<>
				<p>たまに更新する自分の日常ブログです。背景画像が面白いです。</p>
			</>
		)
	},
	{
		title: "YouTubeチャンネルのエンディング",
		iconSrc: "/portfolio/youtube.webp",
		href: "https://www.youtube.com/watch?v=AzuWH9S4jRk",
		inCharge: "動画編集",
		category: "動画編集",
		buttonTitle: "YouTubeで見る",
		tools: ["premierepro", "aftereffects"],
		content: (
			<>
				<p>YouTubeをイメージして、自分のチャンネルで使うエンディングを作成しました。</p>
				<iframe
					src="https://www.youtube.com/embed/AzuWH9S4jRk?start=23"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className={css`
						aspect-ratio: 16/9;
						border: none;
						width: 100%;
						max-width: 560px;
					`}
				/>
			</>
		)
	},
	{
		title: "ニコニコ動画のエンディング",
		iconSrc: "/portfolio/niconico.webp",
		href: "https://www.youtube.com/watch?v=9-wqOhxLYyw",
		inCharge: "動画編集",
		category: "動画編集",
		buttonTitle: "YouTubeで見る",
		tools: ["premierepro", "aftereffects"],
		content: (
			<>
				<p>ニコニコ動画をイメージして、自分のチャンネルで使うエンディングを作成しました。</p>
				<iframe
					src="https://www.youtube.com/embed/9-wqOhxLYyw?start=21"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className={css`
						aspect-ratio: 16/9;
						border: none;
						width: 100%;
						max-width: 560px;
					`}
				/>
			</>
		)
	},
	{
		title: "YouTubeチャンネルのエンディング",
		iconSrc: "/portfolio/youtube.webp",
		href: "https://www.youtube.com/watch?v=bxIPbOl98f0",
		inCharge: "動画編集",
		category: "動画編集",
		buttonTitle: "YouTubeで見る",
		tools: ["aviutl"],
		content: (
			<>
				<p>YouTubeをイメージして、自分のチャンネルで使うエンディングを作成しました。2</p>
				<iframe
					src="https://www.youtube.com/embed/bxIPbOl98f0?start=0"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className={css`
						aspect-ratio: 16/9;
						border: none;
						width: 100%;
						max-width: 560px;
					`}
				/>
			</>
		)
	},
	{
		title: "@akimeaki/null-to-undefined",
		iconSrc: "/portfolio/npm.webp",
		href: "https://www.npmjs.com/package/@akimeaki/null-to-undefined",
		inCharge: "開発",
		category: "JavaScriptライブラリ",
		buttonTitle: "npmで見る",
		tools: ["typescript"],
		content: (
			<>
				<p>nullをundefinedにするライブラリです。</p>
				<p>自分用に作ったやつを公開しました。</p>
			</>
		)
	},
	{
		title: "@akimeaki/check-browser",
		iconSrc: "/portfolio/npm.webp",
		href: "https://www.npmjs.com/package/@akimeaki/check-browser",
		inCharge: "開発",
		category: "JavaScriptライブラリ",
		buttonTitle: "npmで見る",
		tools: ["typescript"],
		content: (
			<>
				<p>
					ユーザーエージェントからブラウザとブラウザのバージョンとブラウザのタイプとOSを判定するライブラリです。
				</p>
				<p>自分用に作ったやつを公開しました。</p>
			</>
		)
	},
	{
		title: "知人のHP Astro化",
		inCharge: "開発",
		category: "ウェブサイト",
		tools: ["typescript", "astro"],
		content: (
			<>
				<p>知人のHPをAstro化したり、若干処理を改修したりしました。</p>
				<p>（URLは秘密です♡）</p>
			</>
		)
	},
	{
		title: "某MinecraftサーバーのHP",
		inCharge: "開発",
		category: "ウェブサイト",
		tools: ["javascript", "php", "wordpress", "starrental"],
		content: (
			<>
				<p>とあるMinecraftサーバーのHPをWordPressテーマから作成してました。</p>
				<p>サーバーは無くなりました...😿</p>
			</>
		)
	}
];
