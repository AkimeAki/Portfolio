/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const NotFound = (): JSX.Element => {
	return (
		<div
			css={css`
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
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
					width: 100px;
					mask-image: url(/img/ghost.svg);
					mask-repeat: no-repeat;
					mask-position: center;
					aspect-ratio: 1/1;
					background-color: white;
				`}
			/>
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
				<div>4</div>
				<div>0</div>
				<div>4</div>
			</div>
		</div>
	);
};
