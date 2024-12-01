"use client";

import { css } from "@kuma-ui/core";
import { useEffect, useState } from "react";

export default () => {
	const [progress, setProgress] = useState<number>(0);

	useEffect(() => {
		setTimeout(() => {
			const id = setInterval(() => {
				setProgress((prev) => {
					const p = (prev += 100 / 5);

					if (p >= 100) {
						clearInterval(id);
					}

					return p;
				});
			}, 1100 / 5);
		}, 200);
	}, []);

	return (
		<>
			<div
				className={css`
					display: flex;
					flex-direction: column;
					gap: 20px;
					width: 100%;
					height: 100%;
					align-items: center;
					justify-content: center;
					padding-bottom: 15px;
				`}
			>
				<div>
					<span>起動中</span>
					<span>.</span>
					<span>.</span>
					<span>.</span>
				</div>
				<div
					className={css`
						position: relative;
						width: 80%;
						height: 30px;
						border: 1px solid #c72a4d;
						padding: 0 20px;
					`}
				>
					<div
						style={{ width: `calc(${Math.min(progress, 100)}% - 4px)` }}
						className={css`
							position: absolute;
							top: 2px;
							left: 2px;
							height: calc(100% - 4px);
							background-color: #caf8af;
							transition-duration: 200ms;
							transition-property: width;
						`}
					/>
				</div>
			</div>
		</>
	);
};
