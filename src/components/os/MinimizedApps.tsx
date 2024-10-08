"use client";

import { css } from "@kuma-ui/core";
import MinimizedAppIcon from "@/components/os/MinimizedAppIcon";
import { useStore } from "@nanostores/react";
import { minimizeWindowList } from "@/atom";
import { appList } from "@/lib/app-select";

export default function () {
	const $minimizeWindowList = useStore(minimizeWindowList);

	return (
		<div
			className={css`
				display: flex;
				gap: 10px;
				margin-left: 20px;

				@media (max-width: 720px) {
					display: none;
				}
			`}
		>
			{$minimizeWindowList.map((id) => (
				<MinimizedAppIcon id={id} iconPath={appList[id].image.path} isPixel={appList[id].image.isPixel} />
			))}
		</div>
	);
}