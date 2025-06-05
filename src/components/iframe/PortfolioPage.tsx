"use client";

import { ModelView } from "@/components/iframe/ModelView";
import { BackArrow } from "@/components/commons/BackArrow";
import { PortfolioBadge } from "@/components/iframe/PortfolioBadge";
import { cx } from "@/libs/merge-kuma";
import type { PortfolioData } from "@/types/portfolio";
import { css } from "@kuma-ui/core";
import { toolColorList } from "@/data/tool-color-label";
import { ColorLabel } from "@/components/commons/ColorLabel";
import { DateTime } from "luxon";

interface Props {
	back?: {
		text: string;
		url: string;
	};
	data: PortfolioData[string];
	linkText?: string;
}

export function PortfolioPage({ back, data, linkText }: Props) {
	return (
		<>
			{back !== undefined && <BackArrow href={back.url} text={back.text} />}
			<div
				className={css`
					margin-top: 30px;
					display: flex;
					flex-direction: column;
					gap: 50px;
				`}
			>
				<h2
					className={css`
						text-align: center;
						font-size: 30px;
						color: #edf8af;
						font-family: "BestTenCRT";
					`}
				>
					{data.title}
				</h2>
				{data.type === "work" && (
					<div
						className={css`
							display: flex;
							justify-content: center;
						`}
					>
						<PortfolioBadge type="work" />
					</div>
				)}
				<p
					className={css`
						text-align: center;
						white-space: pre-line;
						line-height: 1.4;
					`}
				>
					{data.detail}
				</p>
				{data.url?.startsWith("https://www.youtube.com") ? (
					<div
						className={css`
							text-align: center;
						`}
					>
						<iframe
							src={data.url}
							title={data.title}
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
					</div>
				) : (
					data.modelPath === undefined && (
						<a
							href={data.url}
							target="_blank"
							className={cx(
								css`
									position: relative;
									display: block;
									border: none;
									width: 100%;
									max-width: 560px;
									margin: 0 auto;
								`,
								data.url !== undefined &&
									css`
										&:hover {
											img {
												filter: brightness(0.5);
											}

											span {
												opacity: 1;
											}
										}
									`
							)}
							rel="noreferrer"
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
								`}
							>
								{linkText ?? ""}
							</span>
							<img
								src={data.imagePath ?? "/portfolio/no-image.png"}
								alt={data.title}
								className={css`
									width: 100%;
									height: 100%;
									object-fit: cover;
									vertical-align: bottom;
									transition-duration: 200ms;
									transition-property: filter;
								`}
							/>
						</a>
					)
				)}
				{data.modelPath !== undefined && (
					<>
						<div
							className={css`
								margin-bottom: 50px;
								text-align: left;
								line-height: 1.3;
							`}
						>
							<p>回転：左クリック or 1本指でタッチ</p>
							<p>移動：右クリック or 2本指でタッチ</p>
							<p>拡大縮小：マウスホイール or 2本指でつまんで移動</p>
						</div>
						<div
							className={css`
								text-align: center;
							`}
						>
							<ModelView modelPath={data.modelPath} />
						</div>
					</>
				)}
				{data.createdAt !== undefined && (
					<div
						className={css`
							display: flex;
							flex-direction: column;
							gap: 10px;
							max-width: 560px;
							width: 100%;
							margin: 0 auto;
						`}
					>
						<h3
							className={css`
								color: #edf8af;
								margin-bottom: 10px;
								font-family: "BestTenCRT";
							`}
						>
							制作日：
						</h3>
						<span
							className={cx(css`
								color: #d8d8d8;
							`)}
						>
							{`${DateTime.fromISO(data.createdAt).year}年${DateTime.fromISO(data.createdAt).month}月${DateTime.fromISO(data.createdAt).day}日`}
						</span>
					</div>
				)}
				{data.credit !== undefined && (
					<div
						className={css`
							display: flex;
							flex-direction: column;
							gap: 10px;
							max-width: 560px;
							width: 100%;
							margin: 0 auto;
						`}
					>
						<h3
							className={css`
								color: #edf8af;
								margin-bottom: 10px;
								font-family: "BestTenCRT";
							`}
						>
							クレジット
						</h3>
						{data.credit.map((credit, index) => {
							return (
								<span
									key={index}
									className={cx(
										css`
											color: #d8d8d8;
										`,
										credit.name === "彩季" &&
											css`
												color: #ffffff;
											`
									)}
								>
									<span>{credit.position}: </span>
									<a
										href={credit.url}
										target="_blank"
										rel="noreferrer"
										className={cx(
											credit.url !== undefined &&
												css`
													&:hover {
														text-decoration: underline;
													}
												`
										)}
									>
										{credit.name}
									</a>
								</span>
							);
						})}
					</div>
				)}
				{data.client !== undefined && (
					<div
						className={css`
							display: flex;
							flex-direction: column;
							gap: 10px;
							max-width: 560px;
							width: 100%;
							margin: 0 auto;
						`}
					>
						<h3
							className={css`
								color: #edf8af;
								margin-bottom: 10px;
								font-family: "BestTenCRT";
							`}
						>
							クライアント
						</h3>
						<span
							className={css`
								color: #d8d8d8;
							`}
						>
							<a
								href={data.client.url}
								target="_blank"
								rel="noreferrer"
								className={cx(
									data.client.url !== undefined &&
										css`
											&:hover {
												text-decoration: underline;
											}
										`
								)}
							>
								{data.client.name}
							</a>
						</span>
					</div>
				)}
				{data.tools !== undefined && (
					<div
						className={css`
							display: flex;
							flex-direction: column;
							gap: 10px;
							max-width: 560px;
							width: 100%;
							margin: 0 auto;
						`}
					>
						<h3
							className={css`
								color: #edf8af;
								margin-bottom: 10px;
								font-family: "BestTenCRT";
							`}
						>
							使用ツール
						</h3>
						<div
							className={css`
								display: flex;
								gap: 5px;
							`}
						>
							{data.tools.map((tool, index) => {
								return (
									<ColorLabel
										bgColor={toolColorList[tool].bgColor}
										color={toolColorList[tool].color}
										key={index}
									>
										{toolColorList[tool].name}
									</ColorLabel>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</>
	);
}
