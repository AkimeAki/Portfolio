import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import type { Metadata } from "next";
import AsciiAki from "@/components/AsciiAki";

export const metadata: Metadata = metaHead({});

export default function ({ children }: React.PropsWithChildren) {
	return (
		<>
			<main
				className={css`
					max-width: 1100px;
					width: 100%;
					margin: 0 auto;
					padding: 0 30px 60px;

					body[data-layout="os"] & {
						font-family: "BestTenCRT";
						padding: 30px;
						height: 100%;

						@media (max-width: 500px) {
							padding: 15px;
						}
					}
				`}
			>
				{children}
			</main>
			<div
				className={css`
					position: fixed;
					top: 0;
					left: 50%;
					transform: translateX(-50%);
					-webkit-transform: translateX(-50%);
					height: 100%;
					max-width: 1100px;
					width: 100%;
					user-select: none;
					pointer-events: none;
				`}
			>
				<div
					className={css`
						position: absolute;
						transform: scale(0.6);
						-webkit-transform: scale(0.6, 0.6);
						bottom: -50px;
						right: -50px;
						opacity: 0.35;

						* {
							opacity: 1;
							transition-property: opacity;
							transition-duration: 200ms;
						}
					`}
				>
					<AsciiAki />
				</div>
			</div>
		</>
	);
}
