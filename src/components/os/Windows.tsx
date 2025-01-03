"use client";

import Window from "@/components/os/Window";
import { openAppSortList, osLoading } from "@/atom";
import { appList } from "@/libs/app-select";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import useWindow from "@/libs/useWindow";

interface Props {
	defaultWindow?: string;
}

export default function ({ defaultWindow }: Props) {
	const { openWindow } = useWindow();
	const $openAppSortList = useStore(openAppSortList);
	const $osLoading = useStore(osLoading);
	const [loading, setLoading] = useState<boolean>(true);

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
		if (!$osLoading) {
			setTimeout(() => {
				setLoading(false);
			}, 1200);
		}
	}, [$osLoading]);

	return (
		<>
			{!loading &&
				$openAppSortList.toSorted().map((appId) => {
					const Component = appList[appId].component;

					return (
						<Window
							key={appId}
							title={appList[appId].title}
							id={appId}
							resize={appList[appId].resize}
							size={appList[appId].size}
							spSize={appList[appId].spSize}
							viewPinButton={appList[appId].viewPinButton}
							defaultPosition={appList[appId].defaultPosition}
							defaultPin={appList[appId].defaultPin !== undefined ? appList[appId].defaultPin : false}
							touchWindow={appList[appId].touchWindow !== undefined ? appList[appId].touchWindow : false}
						>
							<Component />
						</Window>
					);
				})}
		</>
	);
}
