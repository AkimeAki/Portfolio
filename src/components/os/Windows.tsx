"use client";

import Window from "@/components/os/Window";
import { openAppSortList, osReady } from "@/atom";
import { appList } from "@/libs/app-select";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import useWindow from "@/libs/useWindow";

interface Props {
	defaultWindow?: string;
}

export default function ({ defaultWindow }: Props) {
	const $osReady = useStore(osReady);
	const { openWindow } = useWindow();
	const $openAppSortList = useStore(openAppSortList);
	const [mixOpenAppList, setMixOpenAppList] = useState<string[]>(defaultWindow !== undefined ? [defaultWindow] : []);
	const [ready, setReady] = useState<boolean>(false);

	useEffect(() => {
		if (defaultWindow !== undefined) {
			openWindow(defaultWindow);
		}
	}, []);

	useEffect(() => {
		const back = () => {
			if (location.pathname !== "/") {
				openWindow(location.pathname.replace("/", ""), false);
			} else {
				const result = $openAppSortList.filter((id) => {
					return !appList[id].changeHistory;
				});

				openAppSortList.set(result);
			}
		};

		window.addEventListener("popstate", back);

		return () => {
			window.removeEventListener("popstate", back);
		};
	}, [$openAppSortList]);

	useEffect(() => {
		if ($osReady) {
			setTimeout(() => {
				setReady(true);
			}, 2200);
		}
	}, [$osReady]);

	useEffect(() => {
		setMixOpenAppList($openAppSortList);
	}, [$openAppSortList]);

	return (
		<>
			{mixOpenAppList.toSorted().map((appId) => {
				const Component = appList[appId].component;

				return (
					<Window key={appId} id={appId} appData={appList[appId]} ready={ready}>
						<Component />
					</Window>
				);
			})}
		</>
	);
}
