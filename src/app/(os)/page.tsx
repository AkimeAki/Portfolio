"use client";

import { osReady } from "@/atom";
import Windows from "@/components/os/Windows";
import useWindow from "@/libs/useWindow";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";

export const dynamic = "force-static";

export default function () {
	const { openWindow } = useWindow();
	const $osReady = useStore(osReady);

	useEffect(() => {
		if ($osReady) {
			setTimeout(() => {
				openWindow("intro", false);
			}, 1000);
		}
	}, [$osReady]);

	return <Windows />;
}
