"use client";

import Window from "@/components/os/Window";
import { openAppSortList } from "@/atom";
import { appList } from "@/atom";
import { sortList } from "@/lib/app-select";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";

interface Props {
	defaultWindow?: string;
}

export default function ({ defaultWindow }: Props) {
	const $openAppSortList = useStore(openAppSortList);
	const $appList = useStore(appList);

	useEffect(() => {
		if (defaultWindow !== undefined) {
			openAppSortList.set(sortList(defaultWindow, $openAppSortList));
		}
	}, []);

	return (
		<>
			{$openAppSortList.map((appId) => {
				const Component = $appList[appId].component;

				return (
					<Window key={appId} title={$appList[appId].title} id={appId}>
						<Component />
					</Window>
				);
			})}
		</>
	);
}
