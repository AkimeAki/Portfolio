"use client";

import { css, cx } from "@kuma-ui/core";
import { useWindowManager } from "@/context/WindowManagerContext";

export function MinimizedAppArea() {
	const { state, dispatch } = useWindowManager();

	return (
		<div
			className={css`
				display: flex;
				gap: 10px;
				margin-left: 20px;
			`}
		>
			{[...state.apps].map(([id, state]) => {
				return (
					<button
						key={id}
						type="button"
						onClick={() => {
							dispatch({ type: "SELECT", payload: { id: state.appData.id } });
						}}
						className={cx(
							css`
								display: block;
								width: 40px;
								height: 40px;
								background-color: var(--theme-green);
								border-style: solid;
								border-width: 3px;
								border-color: transparent;

								@media (hover: hover) {
									&:hover {
										border-color: var(--theme-red);
									}
								}
							`,
							state.isFocused &&
								css`
									border-color: var(--theme-red);
								`
						)}
					>
						{state.appData.icon !== undefined && state.appData.icon}
					</button>
				);
			})}
		</div>
	);
}
