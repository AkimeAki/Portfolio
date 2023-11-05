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
			<img
				css={css`
					display: block;
					width: 100px;
					aspect-ratio: 1/1;
					filter: brightness(0) invert(1);
				`}
				src="/img/ghost.png"
				alt="アイコン"
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
