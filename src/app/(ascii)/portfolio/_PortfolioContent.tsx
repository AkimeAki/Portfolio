"use client";

import PortfolioArea from "@/components/os/PortfolioArea";
import { portfolioData } from "@/data/portfolio";
import { cx } from "@/libs/merge-kuma";
import { css } from "@kuma-ui/core";
import { Fragment, type ReactNode, useState } from "react";

const categoryList = [
	"全て",
	...Array.from(
		new Set(
			portfolioData.map((portfolio) => {
				return portfolio.category;
			})
		)
	)
];

export function PortfolioContent() {
	const [selectCategory, setSelectCategory] = useState<(typeof categoryList)[number]>("全て");

	return (
		<div
			className={css`
				display: flex;
				flex-direction: column;
				gap: 50px;
			`}
		>
			<div
				className={css`
					display: flex;
					flex-direction: column;
					gap: 5px;
				`}
			>
				<div
					className={css`
						display: flex;
						flex-wrap: wrap;
						gap: 10px;
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
								data-cursor={selectCategory === category ? "default" : "pointer"}
								className={cx(
									css`
										border-radius: 99px;
										background-color: #060303;
										white-space: nowrap;
										font-size: 15px;
										padding: 6px 13px 5px;
										user-select: none;

										body[data-layout="os"] & {
											padding: 6px 13px 10px 15px;
										}

										body[data-layout="os"][data-os="android"] & {
											padding: 6px 13px 8px 15px;
										}

										body[data-layout="os"][data-browser="safari"] && {
											padding: 6px 13px 8px 15px;
										}
									`,
									selectCategory === category &&
										css`
											background-color: #f14159;
											color: white;
										`
								)}
							>
								{category}
							</div>
						);
					})}
				</div>
				<div>
					<p
						className={css`
							text-align: right;
						`}
					>
						{
							portfolioData.filter((portfolio) => {
								return selectCategory === "全て" || selectCategory === portfolio.category;
							}).length
						}
						/{portfolioData.length} 件
					</p>
				</div>
			</div>
			<div
				className={css`
					display: flex;
					flex-direction: column;
					gap: 150px;
				`}
			>
				{portfolioData.map((portfolio, index) => {
					if (selectCategory === "全て" || selectCategory === portfolio.category) {
						return (
							<PortfolioArea key={index} {...portfolio}>
								{portfolio.content}
							</PortfolioArea>
						);
					}

					return <Fragment key={index} />;
				})}
			</div>
		</div>
	);
}
