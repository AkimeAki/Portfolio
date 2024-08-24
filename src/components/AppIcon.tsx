/** @jsxImportSource @emotion/react */

import { openAppList } from "@/atom";
import { sortList } from "@/lib/app-select";
import { css } from "@emotion/react";
import { useStore } from "@nanostores/react";

interface Props {
	children: React.ReactNode;
	id: string;
}

export default function ({ children, id }: Props) {
	const $openAppList = useStore(openAppList);

	return (
		<div
			onClick={() => {
				history.pushState("", "", `/${id}`);
				openAppList.set(sortList(id, $openAppList));
			}}
			css={css`
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
				css={css`
					background-color: red;
					width: 80px;
					height: 80px;
					flex-shrink: 0;
				`}
			/>
			<span
				css={css`
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
