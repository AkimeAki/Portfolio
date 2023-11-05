/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const PageLoad = (): JSX.Element => {
	return (
		<div
			css={css`
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: #fc9e81;
				z-index: 9999;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 10px;
				user-select: none;
				pointer-events: none;
			`}
		>
			<div
				css={css`
					position: relative;
					width: 100px;
					aspect-ratio: 1/1;
				`}
			>
				<img
					css={css`
						position: absolute;
						top: 0;
						left: 0;
						display: block;
						width: 100%;
						height: 100%;
						filter: brightness(0) invert(1);
					`}
					src="/img/ghost.png"
					alt="ロード画面"
				/>
			</div>
			<div
				css={css`
					display: flex;
					align-items: center;
					justify-content: center;

					div {
						font-family: "Concert One", sans-serif;
						line-height: 1;
						font-size: 70px;
						color: white;
					}
				`}
			>
				<div>A</div>
				<div>k</div>
				<div>i</div>
			</div>
		</div>
	);
};
