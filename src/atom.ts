import { atom } from "nanostores";

export const isTouchDevice = (): boolean => {
	if (typeof window !== "undefined") {
		return (
			"ontouchstart" in window || navigator.maxTouchPoints > 0 || window.matchMedia("(pointer:coarse)").matches
		);
	}

	return false;
};

export const openedAppSortList = atom<string[]>([]);
export const pinedWindowList = atom<string[]>([]);
export const minimizeWindowList = atom<string[]>([]);

export const osReady = atom<boolean>(false);

export const isTouch = atom<boolean>(isTouchDevice());

export const runningCommands = atom<string[]>([]);
