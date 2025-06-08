import { useWindowManager } from "@/context/WindowManagerContext";
import { css } from "@kuma-ui/core";

export function CloseButton({ id }: { id: string }) {
	const { dispatch } = useWindowManager();

	return (
		<div
			onClick={() => {
				dispatch({ type: "CLOSE", payload: { id } });
			}}
			className={css`
				position: relative;
				width: 27px;
				height: 27px;
				border-radius: 50%;

				&:hover {
					background-color: #c82746;

					&:before,
					&:after {
						background-color: white;
					}
				}

				&:before,
				&:after {
					position: absolute;
					left: 5px;
					display: block;
					content: "";
					width: 17px;
					height: 3px;
					background-color: #c6dd9a;
				}

				&:before {
					top: 12px;
					transform: rotate(45deg);
				}

				&:after {
					bottom: 12px;
					transform: rotate(-45deg);
				}
			`}
		/>
	);
}
