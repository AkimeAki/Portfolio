import { css } from "@kuma-ui/core";

interface Props {
	href: string;
	alt: string;
	iconPath: string;
	text?: string;
}

export function TaskbarStartIcon({ href, alt, iconPath, text = "" }: Props) {
	return (
		<div
			className={css`
				position: relative;
				width: 45px;
				height: 45px;
			`}
		>
			<a
				href={href}
				target="_blank"
				className={css`
					display: block;
					width: 45px;
					height: 45px;
					background-color: #f44458;
					border-style: solid;
					border-width: 2px;
					border-color: transparent;
					border-radius: 50%;
					filter: drop-shadow(0px 1px 1px #52161c) drop-shadow(0px 1px 1px #52161c)
						drop-shadow(0px 1px 1px #52161c);

					@media (hover: hover) {
						&:hover {
							border-color: #c6dd95;
						}
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
						user-select: none;
						pointer-events: none;
					`}
					loading="eager"
					data-loading-image
				/>
			</a>
			<span
				className={css`
					position: absolute;
					top: 50px;
					left: 50%;
					transform: translateX(-50%);
					white-space: pre;
					color: white;
					font-size: 10px;
					text-align: center;
					line-height: 1.3;
				`}
			>
				{text}
			</span>
		</div>
	);
}
