import { atom } from "nanostores";
import { isTouchDevice } from "@/libs/touch";

export const isOSReady = atom<boolean>(false);
export const isTouch = atom<boolean>(isTouchDevice());
export const runningCommands = atom<string[]>([]);
