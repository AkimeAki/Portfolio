import { atom } from "nanostores";

const isTouchDevice = (): boolean => {
	if (typeof window !== "undefined") {
		return (
			"ontouchstart" in window || navigator.maxTouchPoints > 0 || window.matchMedia("(pointer:coarse)").matches
		);
	} else {
		return false;
	}
};

export const openAppSortList = atom<string[]>([]);

export const osLoading = atom<boolean>(true);

export const isTouch = atom<boolean>(isTouchDevice());
