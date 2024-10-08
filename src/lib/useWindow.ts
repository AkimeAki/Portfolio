"use client";

import { pinWindowList, openAppSortList, minimizeWindowList } from "@/atom";
import { useStore } from "@nanostores/react";
import { appList, sortList } from "@/lib/app-select";
import { pageTitle } from "@/lib/seo";

export default function () {
	const $openAppSortList = useStore(openAppSortList);
	const $pinWindowList = useStore(pinWindowList);
	const $minimizeWindowList = useStore(minimizeWindowList);

	const openWindow = (id: string, isChangeHistory: boolean = true) => {
		if (appList[id].changeHistory) {
			if (isChangeHistory) {
				const sortResult = sortList(id, $openAppSortList);
				if (JSON.stringify(sortResult) !== JSON.stringify($openAppSortList)) {
					history.pushState({}, "", `/${id}`);
				}
			}

			document.title = appList[id].pageTitle;
		}

		openAppSortList.set(sortList(id, $openAppSortList));
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

	const closeWindow = (closeId: string) => {
		// 閉じたいウィンドウ以外のウィンドウリスト（履歴変更するもののみ）
		const resetAppChangeHistoryList = $openAppSortList.filter((id) => {
			return id !== closeId && appList[id].changeHistory;
		});

		if (resetAppChangeHistoryList.length === 0) {
			// 開くアプリがないとき
			history.pushState({}, "", "/");
			document.title = pageTitle;
		} else {
			history.pushState({}, "", `/${resetAppChangeHistoryList[0]}`);
			document.title = appList[resetAppChangeHistoryList[0]].pageTitle;
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
