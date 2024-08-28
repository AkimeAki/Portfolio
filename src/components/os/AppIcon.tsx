"use client";

import { openAppSortList } from "@/atom";
import { appList, sortList } from "@/lib/app-select";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";

interface Props {
	children: React.ReactNode;
	id: string;
}

export default function ({ children, id }: Props) {
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

				&:hover {
					border-color: #c6dd95;
				}
			`}
		>
			<div
				className={css`
					background-color: red;
					width: 80px;
					height: 80px;
					flex-shrink: 0;
				`}
			/>
			<span
				className={css`
					font-size: 17px;
					font-weight: bold;
					width: 100%;
					text-align: center;
					line-height: 1;
					overflow: hidden;
				`}
			>
				{children}
			</span>
		</div>
	);
}
