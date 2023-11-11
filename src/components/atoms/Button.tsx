/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
	children: React.ReactNode;
	selected?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, selected = false, onClick }: Props): JSX.Element => {
	return (
		<button
			onClick={onClick}
			css={css`
				border: none;
				background-color: ${selected ? "#fd9b6d" : "white"};
				border-radius: 100px;
				padding: 5px 20px;
				cursor: pointer;
				border: 2px solid white;
				transition-duration: 200ms;
				transition-property: background-color;
				color: ${selected ? "white" : "#2e2e2e"};

				@media (prefers-color-scheme: dark) {
					background-color: ${selected ? "#6ae369" : "white"};
				}

				&:hover {
					background-color: ${selected ? "#fd9b6d" : "#ffccb4"};

					@media (prefers-color-scheme: dark) {
						background-color: ${selected ? "#6ae369" : "#b5ffb4"};
					}
				}
			`}
		>
			{children}
		</button>
	);
};
