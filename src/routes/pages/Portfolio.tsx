/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SectionTitle, SectionTitle2 } from "@/components/atoms/SectionTitle";
import { PortfolioWeb, PortfolioYouTube } from "@/components/atoms/Portfolio";
import { Button } from "@/components/atoms/Button";
import { useEffect, useState } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { getListContents } from "@/libs/microcms";
import type { MicroCMSPortfolio } from "@/libs/microcms";
import type { MicroCMSListResponse } from "microcms-js-sdk";

export const Portfolio = (): JSX.Element => {
	const [selectTab, setSelectTab] = useState<"movie" | "web" | "chrome" | "mctexture" | "discord">("movie");
	const [portfolioContents, setPortfolioContents] = useState<MicroCMSListResponse<MicroCMSPortfolio>>({
		contents: [],
		totalCount: 0,
		limit: 0,
		offset: 0
	});
	const [loading, setLoading] = useState<boolean>(true);
	const [bodyHeight, setBodyHeight] = useState<number>(0);

	useEffect(() => {
		const getContents = async (): Promise<void> => {
			setLoading(true);
			setBodyHeight(document.body.clientHeight);
			const contents = await getListContents<MicroCMSPortfolio>("portfolio", {
				filters: `category[equals]${selectTab}`,
				orders: "publishedAt"
			});
			setPortfolioContents(contents);
			setLoading(false);
		};

		void getContents();
	}, [selectTab]);

	useEffect(() => {
		(window as any).iframely?.load();
	}, [portfolioContents]);

	return (
		<MainLayout>
			<div>
				<SectionTitle>作ったもの</SectionTitle>
				<p>作ったもの置いてます。</p>
			</div>
			<div
				css={css`
					display: flex;
					gap: 20px;
					flex-wrap: wrap;

					@media screen and (max-width: 900px) {
						gap: 10px;

						button {
							font-size: 15px;
						}
					}
				`}
			>
				<Button
					onClick={() => {
						setSelectTab("movie");
					}}
					selected={selectTab === "movie"}
				>
					動画
				</Button>
				<Button
					onClick={() => {
						setSelectTab("web");
					}}
					selected={selectTab === "web"}
				>
					ウェブサイト
				</Button>
				<Button
					onClick={() => {
						setSelectTab("chrome");
					}}
					selected={selectTab === "chrome"}
				>
					Chrome 拡張機能
				</Button>
				<Button
					onClick={() => {
						setSelectTab("mctexture");
					}}
					selected={selectTab === "mctexture"}
				>
					Minecraft リソースパック
				</Button>
				<Button
					onClick={() => {
						setSelectTab("discord");
					}}
					selected={selectTab === "discord"}
				>
					Discord Bot
				</Button>
			</div>
			<div
				css={css`
					display: flex;
					flex-wrap: wrap;
					row-gap: 50px;
					column-gap: 30px;

					& > div {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						width: calc(50% - 15px);
						gap: 20px;

						@media screen and (max-width: 900px) {
							width: 100%;
						}
					}
				`}
			>
				{loading ? (
					<p
						css={css`
							height: ${bodyHeight}px;
						`}
					>
						読み込み中...
					</p>
				) : (
					portfolioContents.contents.map((content) => (
						<div key={content.id}>
							<div>
								<SectionTitle2>{content.title}</SectionTitle2>
								<div dangerouslySetInnerHTML={{ __html: content.description }} />
							</div>
							{content.content.map((content, index) => (
								<div key={index}>
									{content.fieldId === "youtube" && (
										<PortfolioYouTube url={`${content.ytid}?start=${content.ms}`} />
									)}
									{content.fieldId === "iframe" && <PortfolioWeb url={content.url} />}
									{content.fieldId === "card" && (
										<div dangerouslySetInnerHTML={{ __html: content.editor }} />
									)}
									{content.fieldId === "image" && <img src={content.image.url} />}
								</div>
							))}
						</div>
					))
				)}
			</div>
		</MainLayout>
	);
};
