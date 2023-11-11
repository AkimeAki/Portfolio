/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
	children: React.ReactNode;
}

export const ContentWrapper = ({ children }: Props): JSX.Element => {
	return (
		<section
			css={css`
				display: flex;
				flex-direction: column;
				gap: 10px;

				ul,
				ol {
					padding-block-start: 0;
					padding-block-end: 0;
					padding-inline-start: 40px;
					margin-inline-start: 0;
					margin-inline-end: 0;
				}

				p {
					a {
						margin-left: 5px;
						margin-right: 5px;
						color: #951034;

						@media (prefers-color-scheme: dark) {
							color: #56c7ff;
						}
					}
				}
			`}
		>
			{children}
		</section>
	);
};
