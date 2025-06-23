"use client";

import { PortfolioProvider, usePortfolio } from "@/context/PortfolioContext";
import { componentMap } from "@/data/portfolio";
import { portfolioCategoryMap } from "@/data/portfolio-def";
import { css, cx } from "@kuma-ui/core";
import { useEffect, useRef, type PropsWithChildren } from "react";

interface SideNavProps {
	onClick: () => void;
	indent?: number;
	selected?: boolean;
}

function SideNav({ onClick, children, indent = 0, selected = false }: PropsWithChildren<SideNavProps>) {
	return (
		<span
			onClick={onClick}
			style={{ "--indent": `${String(indent)}em` } as React.CSSProperties}
			data-selected={selected}
			className={cx(
				"select-category-nav",
				css`
					padding: 5px 13px 10px;
					padding-left: calc(13px + var(--indent));
					cursor: pointer;
					font-size: 16px;
					user-select: none;
					word-break: auto-phrase;
					overflow-wrap: anywhere;
					font-family: "BestTenCRT";

					body[data-os="android"] & {
						padding-bottom: 8px;
					}

					body[data-browser="safari"] & {
						padding-bottom: 8px;
					}

					@container (max-width: 960px) {
						padding: 0 13px 5px;
						white-space: nowrap;
						display: flex;
						align-items: center;

						body[data-os="android"] & {
							padding-bottom: 10px;
						}

						body[data-browser="safari"] & {
							padding-bottom: 10px;
						}
					}

					&:hover {
						background-color: #e9e9e9;
						color: #646464;
					}
				`,
				selected &&
					css`
						background-color: #e9e9e9;
						color: #646464;
					`
			)}
		>
			{children}
		</span>
	);
}

function _Portfolio() {
	const { category, setCategory } = usePortfolio();
	const componentId = portfolioCategoryMap[category].componentId;
	const Component = componentMap[componentId];
	const asideRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const aside = asideRef.current;
		if (!aside) {
			return;
		}

		if (window.matchMedia("(max-width: 960px)").matches) {
			const selectedNav = aside.querySelector<HTMLSpanElement>(`.select-category-nav[data-selected="true"]`);
			if (selectedNav === null) {
				return;
			}

			aside.scroll({
				left: selectedNav.offsetLeft,
				behavior: "smooth"
			});
		}
	}, [category]);

	return (
		<>
			<div
				className={css`
					height: 50px;
					border-bottom: 4px solid #4b4b4b;
					display: flex;
					align-items: center;
					padding: 0 15px 6px;
					font-size: 20px;
					color: #edf8af;
					font-family: "BestTenCRT";

					body[data-os="android"] & {
						padding-bottom: 3px;
					}

					body[data-browser="safari"] & {
						padding-bottom: 3px;
					}
				`}
			>
				{portfolioCategoryMap[category].title}
			</div>
			<div
				className={css`
					display: flex;
					height: calc(100% - 50px);

					@container (max-width: 960px) {
						flex-direction: column;
					}
				`}
			>
				<aside
					ref={asideRef}
					className={css`
						display: flex;
						flex-direction: column;
						width: 200px;
						border-right: 2px solid #4b4b4b;
						overflow-y: scroll;

						@container (max-width: 960px) {
							width: 100%;
							flex-direction: row;
							overflow-y: hidden;
							overflow-x: scroll;
							height: 50px;
						}
					`}
				>
					<SideNav
						selected={category === "root"}
						onClick={() => {
							setCategory("root");
						}}
					>
						作ったもの
					</SideNav>
					<SideNav
						indent={1}
						selected={category === "webservice"}
						onClick={() => {
							setCategory("webservice");
						}}
					>
						ウェブサービス
					</SideNav>
					<SideNav
						indent={1}
						selected={category === "website"}
						onClick={() => {
							setCategory("website");
						}}
					>
						ウェブサイト
					</SideNav>
					<SideNav
						indent={1}
						selected={category === "illust"}
						onClick={() => {
							setCategory("illust");
						}}
					>
						イラスト
					</SideNav>
					<SideNav
						indent={1}
						selected={category === "model"}
						onClick={() => {
							setCategory("model");
						}}
					>
						3Dモデル
					</SideNav>
					<SideNav
						indent={1}
						selected={category === "movie"}
						onClick={() => {
							setCategory("movie");
						}}
					>
						映像
					</SideNav>
					<SideNav
						indent={1}
						selected={category === "chrome_extension"}
						onClick={() => {
							setCategory("chrome_extension");
						}}
					>
						Chrome拡張機能
					</SideNav>
					<SideNav
						indent={1}
						selected={category === "vscode_extension"}
						onClick={() => {
							setCategory("vscode_extension");
						}}
					>
						VSCode拡張機能
					</SideNav>
					<SideNav
						indent={1}
						selected={category === "minecraft_resourcepack"}
						onClick={() => {
							setCategory("minecraft_resourcepack");
						}}
					>
						Minecraft リソースパック
					</SideNav>
					<SideNav
						indent={1}
						selected={category === "discord_bot"}
						onClick={() => {
							setCategory("discord_bot");
						}}
					>
						Discord Bot
					</SideNav>
					<SideNav
						selected={category === "other"}
						onClick={() => {
							setCategory("other");
						}}
					>
						その他
					</SideNav>
				</aside>
				<main
					className={css`
						width: calc(100% - (200px + 2px));
						height: 100%;

						@container (max-width: 960px) {
							width: 100%;
							height: calc(100% - 50px);
						}
					`}
				>
					<Component />
				</main>
			</div>
		</>
	);
}

export function Portfolio() {
	return (
		<div
			className={css`
				flex-direction: column;
				display: flex;
				height: 100%;
				container-type: inline-size;
			`}
		>
			<PortfolioProvider>
				<_Portfolio />
			</PortfolioProvider>
		</div>
	);
}
