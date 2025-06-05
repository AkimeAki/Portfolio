import { css } from "@kuma-ui/core";

interface Props {
	children: React.ReactNode;
	bgColor: string;
	color: string;
}

export function ColorLabel({ children, bgColor, color }: Props) {
	return (
		<span
			style={{ backgroundColor: bgColor, color }}
			className={css`
				display: inline-block;
				font-size: 16px;
				padding: 3px 8px;
				border-radius: 6px;
				line-height: 1;
				font-family: "BestTenCRT";
				letter-spacing: 0.05em;

				@media (max-width: 720px) {
					font-size: 12px;
				}

				body[data-layout="os"] & {
					padding: 2px 8px 6px 10px;
				}

				body[data-layout="os"][data-os="android"] & {
					padding: 2px 9px 3px 10px;
				}

				body[data-layout="os"][data-browser="safari"] & {
					padding: 2px 9px 3px 10px;
				}
			`}
		>
			{children}
		</span>
	);
}
