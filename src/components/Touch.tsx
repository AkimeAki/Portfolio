"use client";

import { useEffect } from "react";
import { isTouch } from "@/atom";
import { isTouchDevice } from "@/libs/touch";

export default function () {
	useEffect(() => {
		if (isTouchDevice()) {
			document.body.dataset.touch = "true";
		} else {
			document.body.dataset.touch = "false";
		}

		const touched = (): void => {
			isTouch.set(true);
			document.body.dataset.touch = "true";
		};

		const move = (e: PointerEvent): void => {
			if (e.pointerType === "mouse") {
				isTouch.set(false);
				document.body.dataset.touch = "false";
			}

			if (e.pointerType === "touch" || e.pointerType === "pen") {
				isTouch.set(true);
				document.body.dataset.touch = "true";
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
