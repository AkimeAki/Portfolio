import { isTouch } from "@/atom";
import { css, cx } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import type { Dispatch, SetStateAction } from "react";

export function FullScreenButton({
	isMaxWindow,
	setIsMaxWindow
}: {
	isMaxWindow: boolean;
	setIsMaxWindow: Dispatch<SetStateAction<boolean>>;
}) {
	const $isTouch = useStore(isTouch);

	return (
		<div
			onClick={() => {
				if (!$isTouch) {
					setIsMaxWindow((prev) => {
						return !prev;
					});
				}
			}}
			style={{ display: $isTouch ? "none" : "flex" }}
			className={cx(
				css`
					align-items: center;
					justify-content: center;
					position: relative;
					width: 27px;
					height: 27px;
					border-radius: 50%;

					&:hover {
						background-color: #c6dd9a;

						&:before,
						&:after {
							border-color: #060303;
						}
					}
				`,
				isMaxWindow
					? css`
							&:before,
							&:after {
								display: block;
								content: "";
								border-color: #c6dd9a;
								border-style: solid;
								border-width: 2px;
							}

							&:before {
								transform: translate(2px, 2px);
								width: 8px;
								height: 8px;
							}

							&:after {
								transform: translate(-3px, -3px);
								width: 5px;
								height: 5px;
							}
						`
					: css`
							&:before {
								display: block;
								content: "";
								width: 11px;
								height: 11px;
								border-color: #c6dd9a;
								border-style: solid;
								border-width: 2px;
							}
						`
			)}
		/>
	);
}
