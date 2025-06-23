"use client";

import { css } from "@kuma-ui/core";
import { AppIcon } from "@/components/desktop/AppIcon";
import { usePortfolio } from "@/context/PortfolioContext";
import { PortfolioPage } from "@/components/app/commons/PortfolioPage";
import { getPortfolio, type PortfolioSchema } from "@/libs/nilto";
import { useEffect, useState } from "react";
import { Loading } from "@/components/app/commons/Loading";

export function PortfolioApps() {
	const { setCategory, itemId } = usePortfolio();
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<PortfolioSchema | null>(null);

	useEffect(() => {
		if (itemId === "") {
			return;
		}

		setIsLoading(true);
		(async () => {
			const rowData = await getPortfolio({ id: itemId });

			setData(rowData[0]);
			setIsLoading(false);
		})();
	}, [itemId]);

	return itemId === "" ? (
		<div
			className={css`
				display: flex;
				padding: 15px;
				column-gap: 15px;
				row-gap: 15px;
				flex-wrap: wrap;
				align-items: flex-start;
				align-content: flex-start;

				@container (max-width: 720px) {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr 1fr;
					gap: 0;
					width: 100%;
					height: auto;
					row-gap: 10px;
					padding: 30px 0;
				}
			`}
		>
			<AppIcon
				imgSrc="/app/global.png"
				isPixel
				onClick={() => {
					setCategory("webservice");
				}}
			>
				ウェブサービス
			</AppIcon>
			<AppIcon
				imgSrc="/app/global.png"
				isPixel
				onClick={() => {
					setCategory("website");
				}}
			>
				ウェブサイト
			</AppIcon>
			<AppIcon
				imgSrc="/app/illust.png"
				isPixel
				onClick={() => {
					setCategory("illust");
				}}
			>
				イラスト
			</AppIcon>
			<AppIcon
				imgSrc="/app/cube.png"
				isPixel
				onClick={() => {
					setCategory("model");
				}}
			>
				3Dモデル
			</AppIcon>
			<AppIcon
				imgSrc="/app/tv.png"
				isPixel
				onClick={() => {
					setCategory("movie");
				}}
			>
				映像
			</AppIcon>
			<AppIcon
				imgSrc="/app/blocks.png"
				isPixel
				onClick={() => {
					setCategory("chrome_extension");
				}}
			>
				Chrome 拡張機能
			</AppIcon>
			<AppIcon
				imgSrc="/app/blocks.png"
				isPixel
				onClick={() => {
					setCategory("vscode_extension");
				}}
			>
				VSCode 拡張機能
			</AppIcon>
			<AppIcon
				imgSrc="/app/blocks.png"
				isPixel
				onClick={() => {
					setCategory("minecraft_resourcepack");
				}}
			>
				Minecraft
				<br />
				リソースパック
			</AppIcon>
			<AppIcon
				imgSrc="/app/blocks.png"
				isPixel
				onClick={() => {
					setCategory("discord_bot");
				}}
			>
				Discord Bot
			</AppIcon>
		</div>
	) : (
		<>{isLoading || data === null ? <Loading /> : <PortfolioPage data={data} />}</>
	);
}
