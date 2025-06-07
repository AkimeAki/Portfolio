import { css } from "@kuma-ui/core";
import AppIcon from "@/components/desktop/AppIcon";
import { IframeWindow } from "@/components/desktop/IframeWindow";

interface PortfolioCategoryData {
	[key: string]: {
		title: string;
		component: JSX.Element | (({ changeCategory }: { changeCategory: (category: string) => void }) => JSX.Element);
	};
}

export const portfolioCategoryData: PortfolioCategoryData = {
	root: {
		title: "制作実績",
		component: ({ changeCategory }: { changeCategory: (category: string) => void }) => {
			return (
				<div
					className={css`
						display: flex;
						padding: 15px;
						column-gap: 15px;
						row-gap: 15px;
						flex-wrap: wrap;
						align-items: flex-start;
						align-content: flex-start;

						@media (max-width: 720px) {
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
							changeCategory("webservices");
						}}
					>
						ウェブサービス
					</AppIcon>
					<AppIcon
						imgSrc="/app/global.png"
						isPixel
						onClick={() => {
							changeCategory("websites");
						}}
					>
						ウェブサイト
					</AppIcon>
					<AppIcon
						imgSrc="/app/pictures.png"
						isPixel
						onClick={() => {
							changeCategory("pictures");
						}}
					>
						イラスト
					</AppIcon>
					<AppIcon
						imgSrc="/app/models.png"
						isPixel
						onClick={() => {
							changeCategory("models");
						}}
					>
						3Dモデル
					</AppIcon>
					<AppIcon
						imgSrc="/app/movies.png"
						isPixel
						onClick={() => {
							changeCategory("movies");
						}}
					>
						映像
					</AppIcon>
					<AppIcon
						imgSrc="/app/blocks.png"
						isPixel
						onClick={() => {
							changeCategory("chrome_extensions");
						}}
					>
						Chrome 拡張機能
					</AppIcon>
					<AppIcon
						imgSrc="/app/blocks.png"
						isPixel
						onClick={() => {
							changeCategory("vscode_extensions");
						}}
					>
						VSCode 拡張機能
					</AppIcon>
					<AppIcon
						imgSrc="/app/blocks.png"
						isPixel
						onClick={() => {
							changeCategory("minecraft_resourcepacks");
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
							changeCategory("discord_bots");
						}}
					>
						Discord Bot
					</AppIcon>
					<AppIcon
						imgSrc="/app/blocks.png"
						isPixel
						onClick={() => {
							changeCategory("others");
						}}
					>
						その他
					</AppIcon>
				</div>
			);
		}
	},
	webservices: {
		title: "制作実績 / ウェブサービス",
		component: () => {
			return <IframeWindow src="/window/webservices" />;
		}
	},
	websites: {
		title: "制作実績 / ウェブサイト",
		component: () => {
			return <IframeWindow src="/window/websites" />;
		}
	},
	pictures: {
		title: "制作実績 / イラスト",
		component: () => {
			return <IframeWindow src="/window/pictures" />;
		}
	},
	models: {
		title: "制作実績 / 3Dモデル",
		component: () => {
			return <IframeWindow src="/window/models" />;
		}
	},
	movies: {
		title: "制作実績 / ムービー",
		component: () => {
			return <IframeWindow src="/window/movies" />;
		}
	},
	chrome_extensions: {
		title: "制作実績 / Chrome 拡張機能",
		component: () => {
			return <IframeWindow src="/window/chrome_extensions" />;
		}
	},
	vscode_extensions: {
		title: "制作実績 / VSCode 拡張機能",
		component: () => {
			return <IframeWindow src="/window/vscode_extensions" />;
		}
	},
	minecraft_resourcepacks: {
		title: "制作実績 / Minecraft リソースパック",
		component: () => {
			return <IframeWindow src="/window/minecraft_resourcepacks" />;
		}
	},
	discord_bots: {
		title: "制作実績 / Discord Bot",
		component: () => {
			return <IframeWindow src="/window/discord_bots" />;
		}
	},
	others: {
		title: "制作実績 / その他",
		component: () => {
			return <IframeWindow src="/window/others" />;
		}
	}
};
