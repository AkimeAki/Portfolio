"use client";

import { useEffect } from "react";
import { useWindowManager } from "@/context/WindowManagerContext";
import { APPS_DATA } from "@/data/app";
import { pageTitle } from "@/libs/meta";
import { useUpdateEffect } from "@/hooks/useUpdateEffect";

export function URLStateSyncer() {
	const { state, dispatch } = useWindowManager();

	// 開いているアプリとURLを同期
	useUpdateEffect(() => {
		const pathSegments = location.pathname.split("/").filter(Boolean);
		const pathAppId = pathSegments[0];

		// パス変更をするアプリ一覧を取得
		const changePathApps = [...state.apps].filter(([_id, app]) => {
			return app.appData.url?.enableChangePath === undefined || app.appData.url.enableChangePath;
		});

		// パス変更をするアプリがないときはトップページにする
		if (changePathApps.length === 0) {
			window.history.pushState(null, "", "/");
			document.title = pageTitle;
			return;
		}

		const appId = state.sortOrder.at(-1);

		if (pathAppId === appId) {
			return;
		}

		const appToOpen = APPS_DATA.find((app) => app.id === appId);

		if (appToOpen !== undefined) {
			if (appToOpen.url?.enableChangePath === undefined || appToOpen.url.enableChangePath) {
				const path = appToOpen.url?.path ?? `/${appId}`;
				window.history.pushState(null, "", path);
				if (appToOpen.title !== undefined) {
					document.title = `${appToOpen.title} - ${pageTitle}`;
				} else {
					document.title = pageTitle;
				}
			}
		}
	}, [state.sortOrder, state.apps]);

	// 戻る、進むボタンでURLと状態を同期
	useEffect(() => {
		function syncUrlToState(e: PopStateEvent) {
			const pathSegments = location.pathname.split("/").filter(Boolean);
			const appId = pathSegments[0];

			// ポートフォリオは専用処理があるので除外
			if (e.state?.app === "portfolio") {
				return;
			}

			if (appId === undefined) {
				dispatch({ type: "CLOSE_ALL" });
				return;
			}

			const currentTopAppId = state.sortOrder.at(-1);

			if (appId === currentTopAppId) {
				return;
			}

			const appToOpen = APPS_DATA.find((app) => app.id === appId);
			if (appToOpen !== undefined) {
				dispatch({ type: "OPEN", payload: { app: appToOpen } });
			}
		}

		window.addEventListener("popstate", syncUrlToState);

		return () => {
			window.removeEventListener("popstate", syncUrlToState);
		};
	}, []);

	return null;
}
