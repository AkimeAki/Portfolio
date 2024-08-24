/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

interface Props {
	href: string;
	alt: string;
	iconPath: string;
}

export default function ({ href, alt, iconPath }: Props) {
	return (
		<a
			href={href}
			target="_blank"
			css={css`
				display: block;
				width: 40px;
				height: 40px;
				background-color: #f44458;
				border-style: solid;
				border-width: 2px;
				border-color: transparent;

				&:hover {
					border-color: #c6dd95;
				}
			`}
		>
			<img
				src={iconPath}
				alt={alt}
				css={css`
					display: block;
					width: 100%;
					height: 100%;
				`}
			/>
		</a>
	);
}
