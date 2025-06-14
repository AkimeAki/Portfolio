"use client";

import { useEffect, useRef } from "react";
import { useWindowManager } from "@/context/WindowManagerContext";
import { APPS_DATA } from "@/data/app";
import { pageTitle } from "@/libs/meta";

export function URLStateSyncer() {
	const { state, dispatch } = useWindowManager();
	const isFirstRender = useRef(true);

	useEffect(() => {
		const pathSegments = location.pathname.split("/").filter(Boolean);
		const pathAppId = pathSegments[0];

		const changePathApps = [...state.apps].filter(([_id, app]) => {
			return app.appData.url?.enableChangePath === undefined || app.appData.url.enableChangePath;
		});

		if (changePathApps.length === 0 && !isFirstRender.current) {
			window.history.pushState(null, "", "/");
			document.title = pageTitle;
			isFirstRender.current = false;
			return;
		}

		isFirstRender.current = false;

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

	useEffect(() => {
		function syncUrlToState(e: PopStateEvent) {
			const pathSegments = location.pathname.split("/").filter(Boolean);
			const appId = pathSegments[0];

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
