import { css } from "@kuma-ui/core";

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
			className={css`
				display: block;
				width: 40px;
				height: 40px;
				background-color: #f44458;
				border-style: solid;
				border-width: 2px;
				border-color: transparent;

				@media (max-width: 720px) {
					border-radius: 50%;
				}

				@media (hover: hover) {
					&:hover {
						border-color: #c6dd95;
					}
				}
			`}
		>
			<img
				src={iconPath}
				alt={alt}
				className={css`
					display: block;
					width: 100%;
					height: 100%;
				`}
			/>
		</a>
	);
}
