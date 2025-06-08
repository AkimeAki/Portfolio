import { isTouch } from "@/atom";
import { useWindowManager } from "@/context/WindowManagerContext";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";

export function PinButton({ id }: { id: string }) {
	const { dispatch } = useWindowManager();
	const $isTouch = useStore(isTouch);

	return (
		<div
			onClick={() => {
				if (!$isTouch) {
					dispatch({ type: "TOGGLE_PIN", payload: { id } });
				}
			}}
			style={{ display: $isTouch ? "none" : "flex" }}
			className={css`
				position: relative;
				width: 27px;
				height: 27px;
				border-radius: 50%;

				&:before {
					position: absolute;
					top: 6px;
					left: 50%;
					transform: translateX(-50%);
					display: block;
					content: "";
					width: 8px;
					height: 8px;
					background-color: #c6dd9a;
				}

				&:after {
					position: absolute;
					top: 13px;
					left: 50%;
					transform: translateX(-50%);
					display: block;
					content: "";
					width: 16px;
					height: 5px;
					background-color: #c6dd9a;
				}

				&:hover {
					background-color: #c6dd9a;

					&:before,
					&:after,
					& > div {
						background-color: #060303;
					}

					.slash-pin {
						width: 3px;
						border: none;
					}
				}
			`}
		>
			<div
				className={css`
					position: absolute;
					top: 14px;
					left: 50%;
					transform: translateX(-50%);
					display: block;
					width: 3px;
					height: 9px;
					background-color: #c6dd9a;
				`}
			/>
			{/* {!$pinedWindowList.includes(id) && (
				<div
					className={[
						css`
							position: absolute;
							top: calc(50% + 1px);
							left: 50%;
							transform: translate(-50%, -50%) rotate(-45deg);
							display: block;
							width: 6px;
							height: 24px;
							border: 2px solid #060303;
							z-index: 1;
						`,
						"slash-pin"
					].join(" ")}
				/>
			)} */}
		</div>
	);
}
