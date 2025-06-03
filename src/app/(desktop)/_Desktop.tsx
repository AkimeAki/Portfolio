"use client";

import Window from "@/components/desktop/Window";
import { openedAppSortList, osReady } from "@/atom";
import { appData } from "@/data/app";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import useWindow from "@/libs/useWindow";

interface Props {
	defaultWindow?: string;
}

export function Desktop({ defaultWindow }: Props) {
	const $osReady = useStore(osReady);
	const { openWindow } = useWindow();
	const $openedAppSortList = useStore(openedAppSortList);
	const [mixOpenAppList, setMixOpenAppList] = useState<string[]>(defaultWindow !== undefined ? [defaultWindow] : []);
	const [ready, setReady] = useState<boolean>(false);

	useEffect(() => {
		if (ready) {
			openWindow("intro", false);

			if (defaultWindow !== undefined) {
				openWindow(defaultWindow);
			}
		}
	}, [ready]);

	useEffect(() => {
		const back = () => {
			if (location.pathname !== "/") {
				openWindow(location.pathname.replace("/", ""), false);
			} else {
				const result = $openedAppSortList.filter((id) => {
					return !appData[id].isEnabledPath;
				});

				openedAppSortList.set(result);
			}
		};

		window.addEventListener("popstate", back);

		return () => {
			window.removeEventListener("popstate", back);
		};
	}, [$openedAppSortList]);

	useEffect(() => {
		if ($osReady) {
			setTimeout(() => {
				setReady(true);
			}, 2200);
		}
	}, [$osReady]);

	useEffect(() => {
		setMixOpenAppList($openedAppSortList);
	}, [$openedAppSortList]);

	return (
		<>
			{mixOpenAppList.toSorted().map((appId) => {
				const Component = appData[appId].component;

				return (
					<Window key={appId} id={appId} appData={appData[appId]} ready={ready}>
						{Component}
					</Window>
				);
			})}
		</>
	);
}
