"use client";

import { emojiPathList } from "@/data/emoji-path";
import { isLoadIframe } from "@/libs/is-load-iframe";
import { useEffect } from "react";

const pathList = [
	...Object.values(emojiPathList)
		.flatMap((p) => p.emoji)
		.flatMap((e) => [e, encodeURIComponent(e)]),
	...Object.keys(emojiPathList)
];

function changePath(to: "text" | "emoji", textPath: string, emojiPath: string) {
	const pathList = location.pathname.split("/");
	let path = "";
	for (let i = 0; i < pathList.length; i++) {
		if (to === "emoji") {
			if (pathList[i] === textPath) {
				pathList[i] = emojiPath;
				path = emojiPath;
				break;
			}
		} else if (to === "text") {
			if (pathList[i] === encodeURIComponent(emojiPath) || pathList[i] === emojiPath) {
				pathList[i] = textPath;
				path = textPath;
				break;
			}
		}
	}

	if (path === "") {
		return;
	}

	const pathname = pathList.join("/");

	history.replaceState({}, "", `${pathname}${location.search}`);
}

export default function () {
	useEffect(() => {
		const getPath = () => {
			return location.pathname.replaceAll(/[/]{2,}/g, "").replace(/^\//, "");
		};

		const mouseLeave = () => {
			if (document.body.dataset.os === "android" && document.body.dataset.browserType === "firefox") {
				return;
			}

			if (document.body.dataset.emojiPath !== "" && document.body.dataset.emojiPath !== undefined) {
				changePath("text", document.body.dataset.textPath ?? "", document.body.dataset.emojiPath ?? "");
			}
		};

		const mouseEnter = () => {
			if (document.body.dataset.os === "android" && document.body.dataset.browserType === "firefox") {
				return;
			}

			if (document.body.dataset.textPath !== "" && document.body.dataset.textPath !== undefined) {
				changePath("emoji", document.body.dataset.textPath ?? "", document.body.dataset.emojiPath ?? "");
			}
		};

		const contextmenu = () => {
			if (document.body.dataset.os === "android" && document.body.dataset.browserType === "firefox") {
				return;
			}

			if (document.body.dataset.emojiPath !== "" && document.body.dataset.emojiPath !== undefined) {
				changePath("text", document.body.dataset.textPath ?? "", document.body.dataset.emojiPath ?? "");
			}
		};

		if (!isLoadIframe()) {
			document.body.addEventListener("mouseleave", mouseLeave);
			document.body.addEventListener("mouseenter", mouseEnter);
			window.addEventListener("contextmenu", contextmenu);
		}

		return () => {
			if (!isLoadIframe()) {
				document.body.removeEventListener("mouseleave", mouseLeave);
				document.body.removeEventListener("mouseenter", mouseEnter);
				window.removeEventListener("contextmenu", contextmenu);
			}
		};
	}, []);

	return <></>;
}

interface SetEmojiPathProps {
	path: string;
}
export const SetEmojiPath = ({ path }: SetEmojiPathProps) => {
	useEffect(() => {
		if (!isLoadIframe()) {
			const emojiPath = emojiPathList[path].emoji[0];

			document.body.dataset.emojiPath = emojiPath;
			document.body.dataset.textPath = path;

			(() => {
				if (document.body.dataset.os === "android" && document.body.dataset.browserType === "firefox") {
					return;
				}

				changePath("emoji", path, emojiPath);
			})();
		}

		return () => {
			if (!isLoadIframe()) {
				document.body.dataset.emojiPath = "";
				document.body.dataset.textPath = "";
			}
		};
	}, [path]);

	return <></>;
};
