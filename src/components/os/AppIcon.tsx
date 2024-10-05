"use client";

import { openAppSortList } from "@/atom";
import { appList, sortList } from "@/lib/app-select";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";

interface Props {
	children: React.ReactNode;
	id?: string;
	imgSrc?: string;
	href?: string;
	isPixel?: boolean;
}

export default function ({ children, id, imgSrc, href, isPixel = false }: Props) {
	const $openAppSortList = useStore(openAppSortList);

	return (
		<div
			onClick={() => {
				if (id !== undefined) {
					history.pushState({}, "", `/${id}`);
					document.title = appList[id].pageTitle;
					openAppSortList.set(sortList(id, $openAppSortList));
				}

				if (href !== undefined) {
					window.open(href, "_blank");
				}
			}}
			className={css`
				display: flex;
				gap: 3px;
				flex-direction: column;
				align-items: center;
				width: 150px;
				border-style: solid;
				border-color: transparent;
				border-width: 1px;
				background-color: transparent;
				padding: 2px;
				transition-duration: 200ms;
				transition-property: bodrer-color, background-color;

				@media (hover: hover) {
					&:hover {
						border-color: #d8fa8e88;
						background-color: #d8fa8e55;

						.app-icon-name {
							color: white;
						}
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
						background-color: #cb284a;
						filter: drop-shadow(0px 1px 1px #52161c) drop-shadow(0px 1px 1px #52161c)
							drop-shadow(0px 1px 1px #52161c);
					}
				`}
			>
				{imgSrc !== undefined && (
					<img
						src={imgSrc}
						className={[
							css`
								position: absolute;
								top: 50%;
								left: 50%;
								transform: translate(-50%, -50%);
								width: 100%;
								height: 100%;
								filter: drop-shadow(0px 0px 1px #f74358) drop-shadow(0px 0px 1px #f74358)
									drop-shadow(0px 0px 1px #f74358);

								@media (max-width: 720px) {
									width: 80%;
									height: 80%;
									border-radius: 50%;
									filter: drop-shadow(0px 0px 1px white) drop-shadow(0px 0px 1px white)
										drop-shadow(0px 0px 1px white);
								}
							`,
							isPixel &&
								css`
									image-rendering: pixelated;
								`
						].join(" ")}
					/>
				)}
				{href !== undefined && (
					<>
						<img
							src="/shortcut.png"
							className={css`
								position: absolute;
								bottom: 10px;
								left: 10px;
								image-rendering: pixelated;

								@media (max-width: 720px) {
									display: none;
								}
							`}
						/>
						<img
							src="/chrome-shortcut.png"
							className={[
								css`
									display: none;
									position: absolute;
									bottom: 0;
									right: 0;

									@media (max-width: 720px) {
										display: block;
									}
								`,
								isPixel &&
									css`
										image-rendering: pixelated;
									`
							].join(" ")}
						/>
					</>
				)}
			</div>
			<span
				className={[
					css`
						font-size: 17px;
						font-weight: bold;
						width: 100%;
						text-align: center;
						line-height: 1;
						margin-bottom: 10px;
						transition-duration: 200ms;
						transition-property: color;

						@media (max-width: 720px) {
							margin-bottom: 0;
							font-size: 15px;
						}

						@media (max-width: 460px) {
							font-size: 12px;
						}
					`,
					"app-icon-name"
				].join(" ")}
			>
				{children}
			</span>
		</div>
	);
}
