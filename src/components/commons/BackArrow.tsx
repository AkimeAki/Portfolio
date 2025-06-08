"use client";

import { css, cx } from "@kuma-ui/core";
import Link from "next/link";

interface Props {
	text: string;
	href?: string;
	onClick?: () => void;
}

export function BackArrow({ text, href, onClick }: Props) {
	const Component = href !== undefined ? Link : "button";

	return (
		<Component
			href={href ?? "/"}
			onClick={onClick}
			className={css`
				display: inline-flex;
				gap: 5px;
				transform: translateY(-50%);
				user-select: none;
				white-space: nowrap;
				font-family: "BestTenCRT";
				font-size: 16px;
				background-color: transparent;

				@container (max-width: 600px) {
					top: 50px;
				}

				&:hover {
					color: #edf8af;

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
		</Component>
	);
}
