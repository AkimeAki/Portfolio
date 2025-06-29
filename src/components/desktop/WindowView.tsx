"use client";

import { Window } from "@/components/desktop/Window";
import { isOSReady } from "@/atom";
import { APPS_DATA } from "@/data/app";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { useWindowManager } from "@/context/WindowManagerContext";

interface Props {
	defaultAppId?: string;
}

export function WindowView({ defaultAppId }: Props) {
	const $isOSReady = useStore(isOSReady);
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

	useEffect(() => {
		if ($isOSReady) {
			setTimeout(() => {
				setReady(true);
			}, 2200);
		}
	}, [$isOSReady]);

	useEffect(() => {
		function resize() {
			const appWindows = document.querySelectorAll<HTMLDivElement>("[data-window]");
			for (const appWindow of appWindows) {
				const rect = appWindow.getBoundingClientRect();
				const outOfBounds =
					rect.left < 0 || rect.top < 0 || rect.right > window.innerWidth || rect.bottom > window.innerHeight;

				if (outOfBounds) {
					const appId = appWindow.dataset.appId;
					if (appId !== undefined) {
						dispatch({ type: "CLOSE", payload: { id: appId } });
					}
				}
			}
		}

		window.addEventListener("resize", resize);

		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

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
