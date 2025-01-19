import { css } from "@kuma-ui/core";

interface Props {
	children: React.ReactNode;
	bgColor: string;
	color: string;
}

export default function ({ children, bgColor, color }: Props) {
	return (
		<span
			style={{ backgroundColor: bgColor, color }}
			className={css`
				display: inline-block;
				font-size: 16px;
				padding: 2px 10px 6px;
				border-radius: 6px;
				line-height: 1;

				@media (max-width: 720px) {
					font-size: 12px;
				}

				body[data-os="android"] & {
					padding: 2px 10px 4px;
				}
			`}
		>
			{children}
		</span>
	);
}
