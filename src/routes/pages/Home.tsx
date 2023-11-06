/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Home = (): JSX.Element => {
	return (
		<div
			css={css`
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 10px;
				height: 100%;
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
				<div>A</div>
				<div>k</div>
				<div>i</div>
			</div>
		</div>
	);
};
