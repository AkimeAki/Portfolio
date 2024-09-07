"use client";

import { useEffect } from "react";
import { isTouch } from "@/atom";

export default function () {
	useEffect(() => {
		const touched = (): void => {
			isTouch.set(true);
		};

		const move = (e: PointerEvent): void => {
			if (e.pointerType === "mouse") {
				isTouch.set(false);
			}

			if (e.pointerType === "touch" || e.pointerType === "pen") {
				isTouch.set(true);
			}
		};

		window.addEventListener("touchstart", touched, false);
		window.addEventListener("pointermove", move, false);

		return () => {
			window.removeEventListener("touchstart", touched);
			window.removeEventListener("pointermove", move);
		};
	}, []);

	return <></>;
}
