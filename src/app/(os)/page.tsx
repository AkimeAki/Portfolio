"use client";

import { osLoading } from "@/atom";
import Windows from "@/components/os/Windows";
import useWindow from "@/libs/useWindow";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";

export const dynamic = "force-static";

export default function () {
	const { openWindow } = useWindow();
	const $osLoading = useStore(osLoading);

	useEffect(() => {
		if (!$osLoading) {
			setTimeout(() => {
				openWindow("intro", false);

				if (!window.matchMedia("(max-width: 950px)").matches) {
					setTimeout(() => {
						openWindow("newVideo", false);
					}, 200);
				}
			}, 1000);
		}
	}, [$osLoading]);

	return <Windows />;
}
