"use client";

import { css } from "@kuma-ui/core";
import PortfolioArea from "@/components/os/PortfolioArea";
import { Fragment, ReactNode, useState } from "react";
import { cx } from "@/libs/merge-kuma";
import { toolColorList } from "@/color-label";

export interface Portfolio {
	title: string;
	href?: string;
	buttonTitle?: string;
	iconSrc?: string;
	inCharge?: string;
	category: string;
	tools?: (keyof typeof toolColorList)[];
}

const portfolioList: ({
	content: ReactNode;
} & Portfolio)[] = [
	{
		title: "アレルギーナビ（制作中）",
		iconSrc: "/portfolio/allergy-navi.png",
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
		iconSrc: "/portfolio/dotya.png",
		href: "https://pixel.gives/",
		inCharge: "開発",
		category: "ウェブサービス",
		tools: ["typescript", "astro", "react", "pandacss", "emotion", "microcms"],
		content: (
			<>
				<p>ドット絵の素材配布サイトです。</p>
				<p>ドット屋さんってことです。無料ですけど。</p>
			</>
		)
	},
	{
		title: "SimpleV",
		href: "https://simple-v.aki.wtf/",
		inCharge: "開発",
		category: "ウェブサービス",
		tools: ["typescript", "astro", "react", "emotion"],
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
		title: "カーソルを追従する四角いの",
		iconSrc: "/portfolio/rectangle-follows-cursor.png",
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
		iconSrc: "/portfolio/change-format.png",
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
		iconSrc: "/portfolio/gas-print.png",
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
		iconSrc: "/portfolio/devcontainer-local.png",
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
		iconSrc: "/portfolio/steam.png",
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
		iconSrc: "/portfolio/piglin.jpg",
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
		iconSrc: "/portfolio/trident.jpg",
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
		iconSrc: "/portfolio/logo-hiroba.png",
		href: "https://logo.aki.wtf/",
		inCharge: "開発",
		category: "ウェブサービス",
		tools: ["typescript", "astro", "pandacss"],
		content: (
			<>
				<p>ロゴの規約など適当に集めてます。</p>
			</>
		)
	},
	{
		title: "YouTubeチャンネルのエンディング",
		iconSrc: "/portfolio/youtube.png",
		href: "https://www.youtube.com/watch?v=AzuWH9S4jRk",
		inCharge: "動画編集",
		category: "動画編集",
		buttonTitle: "YouTubeで見る",
		tools: ["premierepro", "aftereffects"],
		content: (
			<>
				<p>YouTubeをイメージしてエンディングを作成しました。</p>
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
				></iframe>
			</>
		)
	},
	{
		title: "ニコニコ動画のエンディング",
		iconSrc: "/portfolio/niconico.png",
		href: "https://www.youtube.com/watch?v=9-wqOhxLYyw",
		inCharge: "動画編集",
		category: "動画編集",
		buttonTitle: "YouTubeで見る",
		tools: ["premierepro", "aftereffects"],
		content: (
			<>
				<p>ニコニコ動画をイメージしてエンディングを作成しました。</p>
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
				></iframe>
			</>
		)
	},
	{
		title: "YouTubeチャンネルのエンディング",
		iconSrc: "/portfolio/youtube.png",
		href: "https://www.youtube.com/watch?v=bxIPbOl98f0",
		inCharge: "動画編集",
		category: "動画編集",
		buttonTitle: "YouTubeで見る",
		tools: ["aviutl"],
		content: (
			<>
				<p>YouTubeをイメージしてエンディングを作成しました。2</p>
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
				></iframe>
			</>
		)
	}
];

const categoryList = [
	"全て",
	...Array.from(
		new Set(
			portfolioList.map((portfolio) => {
				return portfolio.category;
			})
		)
	)
];

export default function () {
	const [selectCategory, setSelectCategory] = useState<(typeof categoryList)[number]>("全て");

	return (
		<div
			className={css`
				display: flex;
				flex-direction: column;
				gap: 50px;
				padding: 30px;
				height: 100%;
				overflow-y: scroll;

				@container (max-width: 720px) {
					padding: 12px;
				}
			`}
		>
			<div
				className={css`
					display: flex;
					flex-wrap: wrap;
					gap: 10px;
					max-width: 1000px;
					width: 100%;
					margin: 0 auto;
				`}
			>
				{categoryList.map((category) => {
					return (
						<div
							key={category}
							onClick={() => {
								if (selectCategory !== category) {
									setSelectCategory(category);
								}
							}}
							className={cx(
								css`
									border-radius: 99px;
									background-color: #060303;
									cursor: pointer;
									white-space: nowrap;
									font-size: 15px;
									padding: 6px 15px 10px;
									user-select: none;

									body[data-os="android"] & {
										padding: 6px 15px 8px;
									}
								`,
								selectCategory === category &&
									css`
										background-color: #f14159;
										color: white;
										cursor: default;
									`
							)}
						>
							{category}
						</div>
					);
				})}
			</div>
			<div
				className={css`
					display: flex;
					flex-direction: column;
					gap: 150px;
					max-width: 1000px;
					width: 100%;
					margin: 0 auto;
				`}
			>
				{portfolioList.map((portfolio, index) => {
					if (selectCategory === "全て" || selectCategory === portfolio.category) {
						return (
							<PortfolioArea key={index} {...portfolio}>
								{portfolio.content}
							</PortfolioArea>
						);
					}

					return <Fragment key={index}></Fragment>;
				})}
			</div>
		</div>
	);
}
