import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import type { Metadata } from "next";

export const metadata: Metadata = metaHead({});

export default function ({ children }: React.PropsWithChildren) {
	return (
		<>
			<main
				className={css`
					body[data-layout="os"] & {
						font-family: "BestTenCRT";
					}
				`}
			>
				{children}
			</main>
		</>
	);
}
