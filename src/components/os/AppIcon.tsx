"use client";

import { openAppSortList } from "@/atom";
import { appList, sortList } from "@/lib/app-select";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";

interface Props {
	children: React.ReactNode;
	id: string;
	imgSrc?: string;
}

export default function ({ children, id, imgSrc }: Props) {
	const $openAppSortList = useStore(openAppSortList);

	return (
		<div
			onClick={() => {
				history.pushState({}, "", `/${id}`);
				document.title = appList[id].pageTitle;
				openAppSortList.set(sortList(id, $openAppSortList));
			}}
			className={css`
				display: flex;
				gap: 3px;
				flex-direction: column;
				align-items: center;
				width: 150px;
				cursor: pointer;
				border-style: solid;
				border-color: transparent;
				border-width: 2px;
				padding: 2px;

				@media (hover: hover) {
					&:hover {
						border-color: #c6dd95;
					}
				}

				@media (max-width: 720px) {
					width: auto;
					gap: 6px;
				}
			`}
		>
			<div
				className={css`
					position: relative;
					width: 80px;
					height: 80px;
					flex-shrink: 0;

					@media (max-width: 720px) {
						width: 50px;
						height: 50px;
						border-radius: 50%;
						overflow: hidden;
						background-color: #eaf9a8;
					}
				`}
			>
				{imgSrc !== undefined && (
					<img
						src={imgSrc}
						className={css`
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
							width: 100%;
							height: 100%;
							image-rendering: pixelated;
							filter: drop-shadow(0px 0px 1px white) drop-shadow(0px 0px 1px white)
								drop-shadow(0px 0px 1px white);

							@media (max-width: 720px) {
								width: 80%;
								height: 80%;
							}
						`}
					/>
				)}
			</div>
			<span
				className={css`
					font-size: 17px;
					font-weight: bold;
					width: 100%;
					text-align: center;
					line-height: 1;
					overflow: hidden;

					@media (max-width: 720px) {
						font-size: 15px;
					}
				`}
			>
				{children}
			</span>
		</div>
	);
}
