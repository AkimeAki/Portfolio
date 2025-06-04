"use client";

import { css } from "@kuma-ui/core";
import MinimizedAppIcon from "@/components/desktop/taskbar/MinimizedAppIcon";
import { useStore } from "@nanostores/react";
import { minimizeWindowList, openedAppSortList } from "@/atom";
import { appData } from "@/data/app";
import { useEffect, useState } from "react";

export function MinimizedAppArea() {
	const $openedAppSortList = useStore(openedAppSortList);
	const [openedAppList, setOpenedAppList] = useState<string[]>([]);
	const $minimizeWindowList = useStore(minimizeWindowList);

	// アプリを開いた順のリストを作成
	useEffect(() => {
		setOpenedAppList((prevAppList) => {
			const openedAppList: string[] = [];
			const closedAppList: string[] = [];

			for (const app of $openedAppSortList) {
				if (!prevAppList.includes(app)) {
					openedAppList.push(app);
				}
			}

			for (const app of prevAppList) {
				if (!$openedAppSortList.includes(app)) {
					closedAppList.push(app);
				}
			}

			const mergedList = [...prevAppList, ...openedAppList];
			const uniqueList = mergedList.filter(
				(app, index) => mergedList.indexOf(app) === index && !closedAppList.includes(app)
			);
			const newAppList = uniqueList;

			return newAppList;
		});
	}, [$openedAppSortList]);

	return (
		<div
			className={css`
				display: flex;
				gap: 10px;
				margin-left: 20px;
			`}
		>
			{openedAppList.map((id) => (
				<MinimizedAppIcon
					key={id}
					id={id}
					iconPath={appData[id].image.path}
					isPixel={appData[id].image.isPixel}
					isOpen={$openedAppSortList.at(-1) === id && !$minimizeWindowList.includes(id)}
				/>
			))}
		</div>
	);
}
