"use client";

import { useEffect, useRef } from "react";
import { useWindowManager } from "@/context/WindowManagerContext";
import { APPS_DATA } from "@/data/app";

export function URLStateSyncer() {
	const { state, dispatch } = useWindowManager();
	const init = useRef(true);

	useEffect(() => {
		const pathSegments = location.pathname.split("/").filter(Boolean);
		const pathAppId = pathSegments[0];

		const changePathApps = [...state.apps].filter(([_id, app]) => {
			return app.appData.url?.enableChangePath === undefined || app.appData.url.enableChangePath;
		});

		if (changePathApps.length === 0 && !init.current) {
			window.history.pushState(null, "", "/");
			init.current = false;
			return;
		}

		init.current = false;

		const appId = state.sortOrder.at(-1);

		if (pathAppId === appId) {
			return;
		}

		const appToOpen = APPS_DATA.find((app) => app.id === appId);

		if (appToOpen !== undefined) {
			if (appToOpen.url?.urlStateFunction !== undefined) {
				appToOpen.url.urlStateFunction();
			} else {
				if (appToOpen.url?.enableChangePath === undefined || appToOpen.url.enableChangePath) {
					window.history.pushState(null, "", `/${appId}`);
				}
			}
		}
	}, [state.sortOrder, state.apps]);

	useEffect(() => {
		function syncUrlToState() {
			const pathSegments = location.pathname.split("/").filter(Boolean);
			const appId = pathSegments[0];

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
