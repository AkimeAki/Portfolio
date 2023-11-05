/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Footer = (): JSX.Element => {
	return (
		<footer
			css={css`
				display: flex;
				align-items: center;
				height: 100px;
			`}
		>
			<p
				css={css`
					color: white;
					font-size: 20px;
				`}
			>
				&copy; 彩季
			</p>
		</footer>
	);
};
