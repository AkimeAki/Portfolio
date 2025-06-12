"use client";

import type React from "react";
import { createContext, useContext, useReducer, type Dispatch } from "react";
import type { App } from "@/data/app";

export interface WindowState {
	id: string;
	status: "opened" | "minimized";
	isPinned: boolean;
	isFocused: boolean;
	appData: App;
}
export interface WindowManagerSate {
	apps: Map<string, WindowState>;
	sortOrder: string[];
}
export type WindowAction =
	| { type: "OPEN"; payload: { app: App } }
	| { type: "CLOSE"; payload: { id: string } }
	| { type: "CLOSE_ALL" }
	| { type: "SELECT"; payload: { id: string } }
	| { type: "MINIMIZE"; payload: { id: string } }
	| { type: "TOGGLE_PIN"; payload: { id: string } };

function windowManagerReducer(state: WindowManagerSate, action: WindowAction): WindowManagerSate {
	switch (action.type) {
		case "OPEN": {
			const newApps = new Map(state.apps);
			const appToOpen = action.payload.app;

			// 既に開いている場合は選択するだけ
			if (newApps.has(appToOpen.id)) {
				return windowManagerReducer(state, { type: "SELECT", payload: { id: appToOpen.id } });
			}

			newApps.set(appToOpen.id, {
				id: appToOpen.id,
				status: "opened",
				isFocused: false,
				isPinned: false,
				appData: appToOpen
			});

			// 選択されたものだけフォーカスする
			newApps.forEach((app, id) => {
				app.isFocused = id === appToOpen.id;
			});

			return {
				apps: newApps,
				sortOrder: [...state.sortOrder.filter((id) => id !== appToOpen.id), appToOpen.id] // IDを最後尾に追加して最前面に
			};
		}

		case "SELECT": {
			const idToSelect = action.payload.id;
			if (!state.apps.has(idToSelect)) {
				return state;
			}

			const newApps = new Map(state.apps);
			// 選択されたものだけフォーカスする
			newApps.forEach((app, id) => {
				app.isFocused = id === idToSelect;
				if (id === idToSelect) {
					app.status = "opened";
				}
			});

			return {
				apps: newApps,
				sortOrder: [...state.sortOrder.filter((id) => id !== idToSelect), idToSelect]
			};
		}

		case "MINIMIZE": {
			const idToMinimize = action.payload.id;
			if (!state.apps.has(idToMinimize)) {
				return state;
			}

			const newApps = new Map(state.apps);
			// 選択されたものだけ最小化
			newApps.forEach((app, id) => {
				if (id === idToMinimize) {
					app.status = "minimized";
					app.isFocused = false;
				}
			});

			return {
				apps: newApps,
				sortOrder: state.sortOrder
			};
		}

		case "TOGGLE_PIN": {
			const idTooglePin = action.payload.id;
			if (!state.apps.has(idTooglePin)) {
				return state;
			}

			const newApps = new Map(state.apps);
			// 選択されたものの固定状態を変更
			newApps.forEach((app, id) => {
				if (id === idTooglePin) {
					app.isPinned = !app.isPinned;
				}
			});

			return {
				apps: newApps,
				sortOrder: state.sortOrder
			};
		}

		case "CLOSE": {
			const newApps = new Map(state.apps);
			newApps.delete(action.payload.id);
			return {
				apps: newApps,
				sortOrder: state.sortOrder.filter((id) => id !== action.payload.id)
			};
		}

		case "CLOSE_ALL": {
			const newApps = new Map(state.apps);
			newApps.clear();
			return {
				apps: newApps,
				sortOrder: []
			};
		}

		default:
			return state;
	}
}

const WindowStateContext = createContext<WindowManagerSate | null>(null);
const WindowDispatchContext = createContext<Dispatch<WindowAction> | null>(null);

const initialState: WindowManagerSate = {
	apps: new Map(),
	sortOrder: []
};

export function WindowManagerProvider({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(windowManagerReducer, initialState);

	return (
		<WindowStateContext.Provider value={state}>
			<WindowDispatchContext.Provider value={dispatch}>{children}</WindowDispatchContext.Provider>
		</WindowStateContext.Provider>
	);
}

export function useWindowManager() {
	const state = useContext(WindowStateContext);
	const dispatch = useContext(WindowDispatchContext);
	if (state === null || dispatch === null) {
		throw new Error("useWindowManagerはWindowManagerProviderの中で使用しなさ～い");
	}
	return { state, dispatch };
}
