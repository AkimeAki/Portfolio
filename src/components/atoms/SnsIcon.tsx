/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

interface Props {
	icon: string;
	name: string;
	children: React.ReactNode;
	url: string;
}

export const SnsIcon = ({ icon, name, children, url }: Props): JSX.Element => {
	return (
		<Link
			css={css`
				text-decoration: none;
				display: block;
				transition-duration: 200ms;
				transition-property: filter;
				color: white;

				&:hover {
					filter: drop-shadow(0px 0px 2px rgba(85, 85, 85, 0.6));
				}
			`}
			to={url}
			target="_blank"
		>
			<img
				css={css`
					display: block;
					width: 80px;
					aspect-ratio: 1/1;
					object-fit: contain;
					margin: 0 auto;
				`}
				src={`/img/icon/white/${icon}.png`}
				alt={`${name}アイコン`}
			/>
			<div
				css={css`
					font-size: 25px;
					text-align: center;
				`}
			>
				{name}
			</div>
			<div
				css={css`
					text-align: center;
					word-break: keep-all;
					overflow-wrap: anywhere;
					font-size: 15px;
				`}
			>
				{children}
			</div>
		</Link>
	);
};
