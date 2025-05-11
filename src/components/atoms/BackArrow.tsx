import { cx } from "@/libs/merge-kuma";
import { css } from "@kuma-ui/core";
import Link from "next/link";

interface Props {
	text: string;
	href: string;
}

export function BackArrow({ text, href }: Props) {
	return (
		<Link
			href={href}
			className={css`
				display: inline-flex;
				gap: 5px;
				transform: translateY(-50%);
				user-select: none;
				white-space: nowrap;

				@media (max-width: 600px) {
					top: 50px;
				}

				span {
					font-family: "BestTenCRT";
					font-size: 16px;
				}

				&:hover {
					span {
						color: #edf8af;
					}

					.back-arrow {
						transform: translateX(-5px);
					}
				}
			`}
		>
			<span
				className={cx(
					"back-arrow",
					css`
						transition-duration: 400ms;
						transition-property: transform, opacity;
					`
				)}
			>
				←
			</span>
			<span>{text}</span>
		</Link>
	);
}
