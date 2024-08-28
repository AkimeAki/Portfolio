"use client";

import Window from "@/components/os/Window";
import { openAppSortList, osLoading } from "@/atom";
import { appList, sortList } from "@/lib/app-select";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";

interface Props {
	defaultWindow?: string;
}

export default function ({ defaultWindow }: Props) {
	const $openAppSortList = useStore(openAppSortList);
	const $osLoading = useStore(osLoading);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (defaultWindow !== undefined) {
			openAppSortList.set(sortList(defaultWindow, $openAppSortList));
		}
	}, []);

	useEffect(() => {
		const back = () => {
			if (location.pathname !== "/") {
				openAppSortList.set(sortList(location.pathname.replace("/", ""), $openAppSortList));
			} else {
				openAppSortList.set([]);
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
				$openAppSortList.map((appId) => {
					const Component = appList[appId].component;

					return (
						<Window key={appId} title={appList[appId].title} id={appId}>
							<Component />
						</Window>
					);
				})}
		</>
	);
}
