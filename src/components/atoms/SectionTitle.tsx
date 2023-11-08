/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
	children: React.ReactNode;
}

export const SectionTitle = ({ children }: Props): JSX.Element => {
	return (
		<h2
			css={css`
				font-weight: 700;
				font-size: 40px;

				@media screen and (max-width: 550px) {
					font-size: 30px;
				}
			`}
		>
			{children}
		</h2>
	);
};

export const SectionTitle2 = ({ children }: Props): JSX.Element => {
	return (
		<h2
			css={css`
				font-weight: 700;
				font-size: 30px;

				@media screen and (max-width: 550px) {
					font-size: 20px;
				}
			`}
		>
			{children}
		</h2>
	);
};
