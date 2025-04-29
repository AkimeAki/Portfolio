import { css } from "@kuma-ui/core";

export default function ({ children }: React.PropsWithChildren) {
	return (
		<main
			className={css`
				max-width: 1100px;
				width: 100%;
				margin: 0 auto;
				padding: 0 30px 60px;

				body[data-iframe="true"] & {
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
	);
}
