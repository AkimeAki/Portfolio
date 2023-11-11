/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
	children: React.ReactNode;
}

export const MainLayout = ({ children }: Props): JSX.Element => {
	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;
				gap: 30px;

				p {
					line-height: 1.8;
				}
			`}
		>
			{children}
		</div>
	);
};
