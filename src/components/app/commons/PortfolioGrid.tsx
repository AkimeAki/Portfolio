"use client";

import { css, cx } from "@kuma-ui/core";
import { PortfolioBadge } from "@/components/app/commons/PortfolioBadge";
import type { PortfolioSchema } from "@/libs/nilto";
import { useEffect, useState } from "react";
import { PortfolioPage } from "@/components/app/commons/PortfolioPage";
import { Loading } from "@/components/app/commons/Loading";

interface Props {
	hoverText?: string;
	target?: string;
	data: () => Promise<PortfolioSchema[]>;
	aspect?: string;
	backFunction?: () => void;
}

export function PortfolioGrid({ hoverText = "", data: promiseData, aspect, backFunction }: Props) {
	const [data, setData] = useState<PortfolioSchema[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [selectId, setSelectId] = useState<string | null>(null);

	useEffect(() => {
		setIsLoading(true);
		(async () => {
			const rowData = await promiseData();

			const data = [
				...rowData.filter((row) => row.created_at === ""),
				...rowData
					.filter((row) => row.created_at !== "")
					.toSorted((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
			];

			setData(data);
			setIsLoading(false);
		})();
	}, []);

	useEffect(() => {
		if (selectId !== null) {
			window.history.pushState({ app: "portfolio" }, "", `/portfolio/item/${selectId}`);
		}
	}, [selectId]);

	useEffect(() => {
		function syncUrlToState() {
			setSelectId(null);
		}

		window.addEventListener("popstate", syncUrlToState);

		return () => {
			window.removeEventListener("popstate", syncUrlToState);
		};
	}, []);

	return (
		<>
			{isLoading ? (
				<Loading />
			) : selectId === null ? (
				<div
					className={css`
						width: 100%;
						height: 100%;
						overflow-y: scroll;
					`}
				>
					<div
						className={css`
							max-width: 1100px;
							margin: 0 auto;
							width: 100%;
							padding: 30px;

							@media (max-width: 720px) {
								padding: 10px;
							}
						`}
					>
						<div
							className={css`
								display: grid;
								grid-template-columns: 1fr 1fr 1fr;
								gap: 20px;

								@container (max-width: 800px) {
									grid-template-columns: 1fr 1fr;
								}
							`}
						>
							{data.map((item) => {
								return (
									<div
										key={item._id}
										className={css`
											display: flex;
											flex-direction: column;
											gap: 5px;
											width: 100%;
										`}
									>
										<button
											type="button"
											onClick={() => {
												setSelectId(String(item._id));
											}}
											className={css`
												position: relative;
												display: block;
												border: none;
												width: 100%;

												&:hover {
													img {
														filter: brightness(0.5);
													}

													span {
														opacity: 1;
													}
												}
											`}
											onMouseEnter={(e) => {
												if (
													!(e.target instanceof HTMLImageElement) ||
													item.hover_eyecatch === undefined
												) {
													return;
												}

												e.target.src = `${item.hover_eyecatch.url}?width=560`;
											}}
											onMouseLeave={(e) => {
												if (
													!(e.target instanceof HTMLImageElement) ||
													item.hover_eyecatch === undefined ||
													item.eyecatch === undefined
												) {
													return;
												}

												e.target.src = `${item.eyecatch.url}?width=560&format=webp`;
											}}
										>
											<span
												className={css`
													position: absolute;
													top: 50%;
													left: 50%;
													transform: translate(-50%, -50%);
													opacity: 0;
													user-select: none;
													pointer-events: none;
													width: 100%;
													font-weight: bold;
													text-align: center;
													font-size: 18px;
													color: white;
													transition-duration: 200ms;
													transition-property: opacity;
													z-index: 1;
													font-family: "BestTenCRT";
												`}
											>
												{hoverText}
											</span>
											<img
												src={
													item.eyecatch !== undefined
														? `${item.eyecatch?.url}?width=340&format=webp`
														: "/portfolio/no-image.png"
												}
												alt={item.title}
												style={{ "--aspect": aspect } as React.CSSProperties}
												className={cx(
													css`
														width: 100%;
														height: 100%;
														object-fit: cover;
														vertical-align: bottom;
														transition-duration: 200ms;
														transition-property: filter;
														aspect-ratio: 3/2;
														user-select: none;
													`,
													aspect !== undefined &&
														css`
															aspect-ratio: var(--aspect);
															object-fit: contain;
														`
												)}
											/>
											{(item.type === "work" || item.is_fanmade) && (
												<div
													className={css`
														display: flex;
														align-items: center;
														gap: 5px;
														position: absolute;
														bottom: 10px;
														right: 10px;
														z-index: 1;
													`}
												>
													{item.type === "work" && <PortfolioBadge type="work" />}
													{item.is_fanmade && <PortfolioBadge type="fanmade" />}
												</div>
											)}
										</button>
										<h3
											className={css`
												user-select: none;
												pointer-events: none;
												width: 100%;
												text-align: center;
												font-size: 18px;
												color: white;
												word-break: auto-phrase;
												overflow-wrap: anywhere;
												font-family: "BestTenCRT";
												line-height: 1.3;
												user-select: none;

												@container (max-width: 720px) {
													font-size: 16px;
												}
											`}
										>
											{item.title}
										</h3>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			) : (
				<>
					{(() => {
						const targetData = data.find((data) => String(data._id) === selectId);
						if (targetData !== undefined) {
							return (
								<PortfolioPage
									data={targetData}
									linkText={targetData.url_text}
									backFunction={backFunction}
								/>
							);
						}

						return "";
					})()}
				</>
			)}
		</>
	);
}
