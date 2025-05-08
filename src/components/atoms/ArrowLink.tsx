import { cx } from "@/libs/merge-kuma";
import { css } from "@kuma-ui/core";
import Link from "next/link";
import type { HTMLAttributeAnchorTarget } from "react";

interface Props {
	href: string;
	target?: HTMLAttributeAnchorTarget;
	className?: string;
}

export default function ({ children, href, target, className }: React.PropsWithChildren<Props>) {
	return (
		<Link
			href={href}
			target={target}
			className={cx(
				css`
					display: flex;
					gap: 5px;
					font-size: 18px;
					font-weight: bold;

					&:after {
						content: "→";
						transition-duration: 400ms;
						transition-property: transform;
					}

					&:hover {
						&:after {
							transform: translateX(10px);
						}

						color: #edf8af;
						* {
							color: #edf8af;
						}
					}
				`,
				className !== undefined && className
			)}
		>
			{children}
		</Link>
	);
}
