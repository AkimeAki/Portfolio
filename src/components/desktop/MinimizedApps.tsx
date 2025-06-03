"use client";

import { css } from "@kuma-ui/core";
import MinimizedAppIcon from "@/components/desktop/MinimizedAppIcon";
import { useStore } from "@nanostores/react";
import { minimizeWindowList } from "@/atom";
import { appData } from "@/data/app";

export default function () {
	const $minimizeWindowList = useStore(minimizeWindowList);

	return (
		<div
			className={css`
				display: flex;
				gap: 10px;
				margin-left: 20px;
			`}
		>
			{$minimizeWindowList.map((id) => (
				<MinimizedAppIcon
					key={id}
					id={id}
					iconPath={appData[id].image.path}
					isPixel={appData[id].image.isPixel}
				/>
			))}
		</div>
	);
}
