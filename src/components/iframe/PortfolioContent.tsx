"use client";

import { portfolioCategoryData } from "@/data/portfolio";
import { cx } from "@/libs/merge-kuma";
import { css } from "@kuma-ui/core";
import { type PropsWithChildren, useEffect, useState } from "react";

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

	function changeCategory(category: string) {
		let path: string | null = "";
		if (category === "root") {
			path = "/portfolio";
		} else {
			path = `/portfolio/${category}`;
		}

		if (path !== null) {
			window.parent.postMessage(
				{
					name: "AkiOSChangePath",
					value: path
				},
				origin
			);
		}

		setSelectCategory(category);
	}

	useEffect(() => {
		const loadLayout = (response: MessageEvent) => {
			if (response.data.name === "AkiOSIframePath" && typeof response.data.value === "string") {
				const pathArray = String(response.data.value)
					.split("/")
					.filter((path) => {
						return path !== "";
					});
				const category = pathArray[1];
				if (category !== undefined) {
					setSelectCategory(category);
				}
			}
		};

		window.addEventListener("message", loadLayout);

		return () => {
			window.removeEventListener("message", loadLayout);
		};
	}, []);

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
							changeCategory("root");
						}}
					>
						作ったもの
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "webservices"}
						onClick={() => {
							changeCategory("webservices");
						}}
					>
						ウェブサービス
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "websites"}
						onClick={() => {
							changeCategory("websites");
						}}
					>
						ウェブサイト
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "pictures"}
						onClick={() => {
							changeCategory("pictures");
						}}
					>
						イラスト
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "models"}
						onClick={() => {
							changeCategory("models");
						}}
					>
						3Dモデル
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "movies"}
						onClick={() => {
							changeCategory("movies");
						}}
					>
						映像
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "chrome_extensions"}
						onClick={() => {
							changeCategory("chrome_extensions");
						}}
					>
						Chrome 拡張機能
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "vscode_extensions"}
						onClick={() => {
							changeCategory("vscode_extensions");
						}}
					>
						VSCode 拡張機能
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "minecraft_resourcepacks"}
						onClick={() => {
							changeCategory("minecraft_resourcepacks");
						}}
					>
						Minecraft リソースパック
					</SideNav>
					<SideNav
						indent={1}
						selected={selectCategory === "discord_bots"}
						onClick={() => {
							changeCategory("discord_bots");
						}}
					>
						Discord Bot
					</SideNav>
					<SideNav
						selected={selectCategory === "others"}
						onClick={() => {
							changeCategory("others");
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
					{typeof Component === "function" ? <Component changeCategory={changeCategory} /> : Component}
				</main>
			</div>
		</div>
	);
}
