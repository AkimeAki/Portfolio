import { isTouch } from "@/atom";
import { useWindowManager } from "@/context/WindowManagerContext";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";

export function MinimizeButton({ id }: { id: string }) {
	const { dispatch } = useWindowManager();
	const $isTouch = useStore(isTouch);

	return (
		<div
			onClick={() => {
				dispatch({ type: "MINIMIZE", payload: { id } });
			}}
			style={{ display: $isTouch ? "none" : "flex" }}
			className={css`
				align-items: center;
				justify-content: center;
				position: relative;
				width: 27px;
				height: 27px;
				border-radius: 50%;

				&:before {
					display: block;
					content: "";
					width: 13px;
					height: 13px;
					border-bottom-color: #c6dd9a;
					border-bottom-style: solid;
					border-bottom-width: 2px;
				}

				&:hover {
					background-color: #c6dd9a;

					&:before {
						border-color: #060303;
					}
				}
			`}
		/>
	);
}
