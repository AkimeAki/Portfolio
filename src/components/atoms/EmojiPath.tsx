"use client";

import { emojiPathList } from "@/data/emoji-path";
import { useEffect } from "react";

export default function () {
	useEffect(() => {
		const mouseLeave = () => {
			if (document.body.dataset.os === "android" && document.body.dataset.browserType === "firefox") {
				return;
			}

			if (document.body.dataset.emojiPath !== "" && document.body.dataset.emojiPath !== undefined) {
				history.replaceState({}, "", `/${document.body.dataset.textPath}`);
			}
		};

		const mouseEnter = () => {
			if (document.body.dataset.os === "android" && document.body.dataset.browserType === "firefox") {
				return;
			}

			if (document.body.dataset.textPath !== "" && document.body.dataset.textPath !== undefined) {
				history.replaceState({}, "", `/${document.body.dataset.emojiPath}`);
			}
		};

		const contextmenu = () => {
			if (document.body.dataset.os === "android" && document.body.dataset.browserType === "firefox") {
				return;
			}

			if (document.body.dataset.emojiPath !== "" && document.body.dataset.emojiPath !== undefined) {
				history.replaceState({}, "", `/${document.body.dataset.textPath}`);
			}
		};

		document.body.addEventListener("mouseleave", mouseLeave);
		document.body.addEventListener("mouseenter", mouseEnter);
		window.addEventListener("contextmenu", contextmenu);

		return () => {
			document.body.removeEventListener("mouseleave", mouseLeave);
			document.body.removeEventListener("mouseenter", mouseEnter);
			window.removeEventListener("contextmenu", contextmenu);
		};
	}, []);

	return <></>;
}

interface SetEmojiPathProps {
	path: string;
}
export const SetEmojiPath = ({ path }: SetEmojiPathProps) => {
	useEffect(() => {
		const emojiPath = emojiPathList[path].emoji[0];

		document.body.dataset.emojiPath = emojiPath;
		document.body.dataset.textPath = path;

		(() => {
			if (document.body.dataset.os === "android" && document.body.dataset.browserType === "firefox") {
				return;
			}

			history.replaceState({}, "", `/${document.body.dataset.emojiPath}`);
		})();

		return () => {
			document.body.dataset.emojiPath = "";
			document.body.dataset.textPath = "";
		};
	}, [path]);

	return <></>;
};
