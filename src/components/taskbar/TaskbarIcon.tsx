import { css } from "@kuma-ui/core";

interface Props {
	href: string;
	alt: string;
	iconPath: string;
}

export function TaskbarIcon({ href, alt, iconPath }: Props) {
	return (
		<a
			href={href}
			target="_blank"
			tabIndex={0}
			className={css`
				display: block;
				width: 40px;
				height: 40px;
				background-color: #f44458;
				border-style: solid;
				border-width: 3px;
				border-color: transparent;

				@container (max-width: 720px) {
					border-radius: 50%;
				}

				@media (hover: hover) {
					&:hover {
						border-color: var(--theme-green);
					}
				}

				&:focus {
					border-color: var(--theme-green);
				}
			`}
			rel="noreferrer"
		>
			<img
				src={iconPath}
				alt={alt}
				className={css`
					display: block;
					width: 100%;
					height: 100%;
				`}
				loading="eager"
				data-loading-image
			/>
		</a>
	);
}
