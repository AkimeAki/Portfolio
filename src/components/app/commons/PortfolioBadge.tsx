import { css, cx } from "@kuma-ui/core";

interface Props {
	type: string;
}

export function PortfolioBadge({ type }: Props) {
	return (
		<span
			className={cx(
				css`
					display: inline-block;
					border-radius: 9999px;
					padding: 7px 11px 10px 12px;
					font-size: 14px;
					font-family: "BestTenCRT";
					user-select: none;
					pointer-events: none;

					body[data-os="android"] & {
						padding-bottom: 7px;
					}

					body[data-browser="safari"] & {
						padding-bottom: 7px;
					}

					@container (max-width: 720px) {
						padding: 4px 9px 8px 10px;
						font-size: 12px;

						body[data-os="android"] & {
							padding-bottom: 5px;
						}

						body[data-browser="safari"] & {
							padding-bottom: 5px;
						}
					}
				`,
				type === "work" &&
					css`
						background-color: #ab2944;
						color: white;
					`
			)}
		>
			{type === "work" && "依頼"}
		</span>
	);
}
