"use client";

import { Window } from "@/components/desktop/Window";
import { osReady } from "@/atom";
import { APPS_DATA } from "@/data/app";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { useWindowManager } from "@/context/WindowManagerContext";

interface Props {
	defaultAppId?: string;
}

export function WindowView({ defaultAppId }: Props) {
	const $osReady = useStore(osReady);
	const [ready, setReady] = useState<boolean>(false);
	const { state, dispatch } = useWindowManager();

	useEffect(() => {
		if (ready) {
			const welcomeApp = APPS_DATA.find((data) => data.id === "welcome");
			if (welcomeApp !== undefined) {
				dispatch({ type: "OPEN", payload: { app: welcomeApp } });
			}

			if (defaultAppId !== undefined) {
				const defaultApp = APPS_DATA.find((data) => data.id === defaultAppId);
				if (defaultApp !== undefined) {
					dispatch({ type: "OPEN", payload: { app: defaultApp } });
				}
			}
		}
	}, [ready]);

	// useEffect(() => {
	// 	const back = () => {
	// 		if (location.pathname !== "/") {
	// 			if (location.pathname.startsWith("/portfolio/")) {
	// 				openWindow("portfolio", false);
	// 			} else {
	// 				openWindow(location.pathname.replace("/", ""), false);
	// 			}
	// 		} else {
	// 			const result = $openedAppSortList.filter((id) => {
	// 				return !appData[id].isEnabledPath;
	// 			});

	// 			openedAppSortList.set(result);
	// 		}
	// 	};

	// 	window.addEventListener("popstate", back);

	// 	return () => {
	// 		window.removeEventListener("popstate", back);
	// 	};
	// }, [$openedAppSortList]);

	useEffect(() => {
		if ($osReady) {
			setTimeout(() => {
				setReady(true);
			}, 2200);
		}
	}, [$osReady]);

	// useEffect(() => {
	// 	setMixOpenAppList($openedAppSortList);
	// }, [$openedAppSortList]);

	return (
		<>
			{[...state.apps].map(([id, state]) => {
				if (state.appData.window.content.type === "component") {
					const Component = state.appData.window.content.component;

					return (
						<Window key={id} id={id} appData={state.appData}>
							<Component />
						</Window>
					);
				}

				return (
					<Window key={id} id={id} appData={state.appData}>
						{"iframe"}
					</Window>
				);
			})}
		</>
	);
}
