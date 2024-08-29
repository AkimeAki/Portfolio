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
				padding: 2px 10px 4px;
				border-radius: 6px;
				line-height: 1;
			`}
		>
			{children}
		</span>
	);
}
