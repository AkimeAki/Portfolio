/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SectionTitle, SectionTitle2 } from "@/components/atoms/SectionTitle";
import { PortfolioWeb, PortfolioYouTube } from "@/components/atoms/Portfolio";
import { Button } from "@/components/atoms/Button";
import { useEffect, useState } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { getListContents } from "@/libs/microcms";
import type { MicroCMSCategory, MicroCMSPortfolio } from "@/libs/microcms";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import { ContentWrapper } from "@/components/molecules/ContentWrapper";
import { BackImageStyle } from "@/components/atoms/BackImageStyle";

export const Portfolio = (): JSX.Element => {
	const [selectTab, setSelectTab] = useState<string>("movie");
	const [portfolioContents, setPortfolioContents] = useState<MicroCMSListResponse<MicroCMSPortfolio>>({
		contents: [],
		totalCount: 0,
		limit: 0,
		offset: 0
	});
	const [loading, setLoading] = useState<boolean>(true);
	const [bodyHeight, setBodyHeight] = useState<number>(0);
	const [tabs, setTabs] = useState<MicroCMSListResponse<MicroCMSCategory>>({
		contents: [],
		totalCount: 0,
		limit: 0,
		offset: 0
	});

	useEffect(() => {
		const getTabs = async (): Promise<void> => {
			setLoading(true);
			const categories = await getListContents<MicroCMSCategory>("categories", {
				orders: "publishedAt"
			});
			setTabs(categories);
			setLoading(false);
		};

		void getTabs();
	}, []);

	useEffect(() => {
		let ignore = false;

		const getContents = async (): Promise<void> => {
			setLoading(true);
			setBodyHeight(document.body.clientHeight);
			const contents = await getListContents<MicroCMSPortfolio>("portfolio", {
				filters: `category[equals]${selectTab}`,
				orders: "publishedAt"
			});
			if (!ignore) {
				setPortfolioContents(contents);
				setLoading(false);
			}
		};

		void getContents();

		return () => {
			ignore = true;
		};
	}, [selectTab]);

	useEffect(() => {
		(window as any).iframely?.load();
	}, [portfolioContents]);

	return (
		<MainLayout>
			<ContentWrapper>
				<SectionTitle>作ったもの</SectionTitle>
				<p>作ったもの置いてます。</p>
			</ContentWrapper>
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
				{tabs.contents.map((content) => (
					<>
						{content.id === "discord" ? (
							<Button
								key={content.id}
								onClick={() => {
									setSelectTab(content.id);
								}}
								selected={selectTab === content.id}
								style={BackImageStyle("/img/icon/white/discord.png", -50, 50, -20)}
							>
								{content.name}
							</Button>
						) : content.id === "chrome" ? (
							<Button
								key={content.id}
								onClick={() => {
									setSelectTab(content.id);
								}}
								selected={selectTab === content.id}
								style={BackImageStyle("/img/icon/white/chrome.png", 30, -30, 20)}
							>
								{content.name}
							</Button>
						) : (
							<Button
								key={content.id}
								onClick={() => {
									setSelectTab(content.id);
								}}
								selected={selectTab === content.id}
							>
								{content.name}
							</Button>
						)}
					</>
				))}
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
