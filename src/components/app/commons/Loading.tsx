import { css } from "@kuma-ui/core";

export function Loading() {
	return (
		<div
			className={css`
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				padding-bottom: 20px;
				font-family: "BestTenCRT";

				@keyframes loading-animation {
					0% {
						transform: translateY(0);
					}

					50% {
						transform: translateY(-3px);
					}

					100% {
						transform: translateY(0);
					}
				}
			`}
		>
			<div
				className={css`
					display: flex;
				`}
			>
				<span>Loading</span>
				<span
					className={css`
						margin-left: 5px;
						animation-name: loading-animation;
						animation-duration: 1000ms;
						animation-iteration-count: infinite;
					`}
				>
					.
				</span>
				<span
					className={css`
						animation-name: loading-animation;
						animation-duration: 1000ms;
						animation-iteration-count: infinite;
						animation-delay: 200ms;
					`}
				>
					.
				</span>
				<span
					className={css`
						animation-name: loading-animation;
						animation-duration: 1000ms;
						animation-iteration-count: infinite;
						animation-delay: 400ms;
					`}
				>
					.
				</span>
			</div>
		</div>
	);
}
