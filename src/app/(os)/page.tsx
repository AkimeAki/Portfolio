"use client";

import { osLoading } from "@/atom";
import Windows from "@/components/os/Windows";
import useWindow from "@/lib/useWindow";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";

export const runtime = "edge";

export default function () {
	const { openWindow } = useWindow();
	const $osLoading = useStore(osLoading);

	useEffect(() => {
		if (!$osLoading) {
			setTimeout(() => {
				openWindow("intro", false);
			}, 1000);
		}
	}, [$osLoading]);

	return <Windows />;
}
