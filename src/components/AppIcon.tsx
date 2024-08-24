/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

interface Props {
	children: React.ReactNode;
	onClick: () => void;
}

export default function ({ children, onClick }: Props) {
	return (
		<div
			onClick={() => {
				onClick();
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
