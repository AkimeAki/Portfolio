"use client";

import { pinWindowList, openAppSortList, minimizeWindowList } from "@/atom";
import { useStore } from "@nanostores/react";
import { appData } from "@/data/app";
import { pageTitle } from "@/libs/meta";
import { sortList } from "@/libs/app-select";

export default function () {
	const $openAppSortList = useStore(openAppSortList);
	const $pinWindowList = useStore(pinWindowList);
	const $minimizeWindowList = useStore(minimizeWindowList);

	const openWindow = (id: string, isChangeHistory = true) => {
		const list = openAppSortList.get();

		if (appData[id].changeHistory) {
			if (isChangeHistory) {
				const sortResult = sortList(id, list);
				if (JSON.stringify(sortResult) !== JSON.stringify(list)) {
					history.pushState({}, "", `/${id}`);
				}
			}

			document.title = appData[id].pageTitle;
		}

		openAppSortList.set(sortList(id, list));
	};

	const pinWindow = (id: string) => {
		let result = [...$pinWindowList];

		if (!result.includes(id)) {
			result.push(id);
		} else {
			result = result.filter((item) => {
				return item !== id;
			});

			result = [...result, id];
		}

		pinWindowList.set(result);
	};

	const unpinWindow = (id: string) => {
		let result = [...$pinWindowList];

		if (result.includes(id)) {
			result = result.filter((item) => {
				return item !== id;
			});
		}

		pinWindowList.set(result);
	};

	const closeWindow = (closeId: string, isChangeHistory = true) => {
		// 閉じたいウィンドウ以外のウィンドウリスト（履歴変更するもののみ）
		const resetAppChangeHistoryList = $openAppSortList.filter((id) => {
			return id !== closeId && appData[id].changeHistory;
		});

		if (isChangeHistory) {
			if (resetAppChangeHistoryList.length === 0) {
				// 開くアプリがないとき
				history.pushState({}, "", "/");
				document.title = pageTitle;
			} else {
				history.pushState({}, "", `/${resetAppChangeHistoryList[0]}`);
				document.title = appData[resetAppChangeHistoryList[0]].pageTitle;
			}
		}

		// 閉じたいウィンドウ以外のウィンドウリスト（すべて）
		const resetAppList = $openAppSortList.filter((id) => {
			return id !== closeId;
		});

		openAppSortList.set(resetAppList);
	};

	const minimizeWindow = (id: string) => {
		let result = [...$minimizeWindowList];

		if (!result.includes(id)) {
			result.push(id);
		} else {
			result = result.filter((item) => {
				return item !== id;
			});

			result = [...result, id];
		}

		minimizeWindowList.set(result);
	};

	const releaseMinimizedWindow = (id: string) => {
		let result = [...$minimizeWindowList];

		if (result.includes(id)) {
			result = result.filter((item) => {
				return item !== id;
			});
		}

		minimizeWindowList.set(result);
	};

	return { openWindow, closeWindow, pinWindow, unpinWindow, minimizeWindow, releaseMinimizedWindow };
}
