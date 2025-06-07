"use client";

import { portfolioCategoryData } from "@/data/portfolio";
import { cx } from "@/libs/merge-kuma";
import { css } from "@kuma-ui/core";
import { type PropsWithChildren, useState } from "react";

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
			className={cx(
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

					@media (max-width: 960px) {
						padding: 7px 13px 12px;
						white-space: nowrap;

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

export function PortfolioContent() {
	const [selectCategory, setSelectCategory] = useState<string>("root");
	const Component = portfolioCategoryData[selectCategory].component;

	return (
		<div
			className={css`
				flex-direction: column;
				display: flex;
				height: 100%;
			`}
		>
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
				{portfolioCategoryData[selectCategory].title}
			</div>
			<div
				className={css`
					display: flex;
					flex: 1;

					@media (max-width: 960px) {
						flex-direction: column;
					}
				`}
			>
				<aside
					className={css`
						display: flex;
						flex-direction: column;
						width: 200px;
						border-right: 2px solid #4b4b4b;
						overflow-y: scroll;

						@media (max-width: 960px) {
							width: 100%;
							flex-direction: row;
							overflow-y: hidden;
							overflow-x: scroll;
						}
					`}
				>
					<SideNav
						selected={selectCategory === "root"}
						onClick={() => {
							setSelectCategory("root");
						}}
					>
						作ったもの
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "webservices"}
						onClick={() => {
							setSelectCategory("webservices");
						}}
					>
						ウェブサービス
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "websites"}
						onClick={() => {
							setSelectCategory("websites");
						}}
					>
						ウェブサイト
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "pictures"}
						onClick={() => {
							setSelectCategory("pictures");
						}}
					>
						イラスト
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "models"}
						onClick={() => {
							setSelectCategory("models");
						}}
					>
						3Dモデル
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "movies"}
						onClick={() => {
							setSelectCategory("movies");
						}}
					>
						映像
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "chrome_extensions"}
						onClick={() => {
							setSelectCategory("chrome_extensions");
						}}
					>
						Chrome 拡張機能
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "vscode_extensions"}
						onClick={() => {
							setSelectCategory("vscode_extensions");
						}}
					>
						VSCode 拡張機能
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "minecraft_resourcepacks"}
						onClick={() => {
							setSelectCategory("minecraft_resourcepacks");
						}}
					>
						Minecraft リソースパック
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "discord_bots"}
						onClick={() => {
							setSelectCategory("discord_bots");
						}}
					>
						Discord Bot
					</SideNav>
					<SideNav
						selected={selectCategory === "others"}
						onClick={() => {
							setSelectCategory("others");
						}}
					>
						その他
					</SideNav>
				</aside>
				<main
					className={css`
						flex: 1;
					`}
				>
					{typeof Component === "function" ? <Component setSelectCategory={setSelectCategory} /> : Component}
				</main>
			</div>
		</div>
	);
}
