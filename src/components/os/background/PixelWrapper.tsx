"use client";

import { css } from "@kuma-ui/core";
import PixelBlock from "@/components/os/background/PixelBlock";

export default function () {
	return (
		<div
			className={css`
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				user-select: none;
				pointer-events: none;
			`}
		>
			<PixelBlock top={-20} right={-20} width={100} height={100} opacity={0.6} />
			<PixelBlock top={8} right={10} width={130} height={30} opacity={0.4} />
			<PixelBlock top={-5} right={-5} width={40} height={130} opacity={0.8} />
			<PixelBlock bottom={8} left={10} width={200} height={30} opacity={0.4} />
			<PixelBlock bottom={-5} left={-5} width={130} height={130} opacity={0.8} />
			<PixelBlock bottom={8} left={10} width={30} height={200} opacity={0.5} />
		</div>
	);
}
