import AkiSignal from "@/components/os/background/AkiSignal";
import type { Metadata } from "next";
import { css } from "@kuma-ui/core";

export const metadata: Metadata = {
	title: "ページが見つかりませんでした"
};

export default function (): JSX.Element {
	return (
		<>
			<div
				className={css`
					position: relative;
					width: 100%;
					height: 100%;
					overflow: hidden;
				`}
			>
				<div
					className={css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background-image: radial-gradient(#555555, #000000);
					`}
				>
					<AkiSignal />
				</div>
			</div>
		</>
	);
}
