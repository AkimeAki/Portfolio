"use client";

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

		document.body.addEventListener("mouseleave", mouseLeave);
		document.body.addEventListener("mouseenter", mouseEnter);

		return () => {
			document.body.removeEventListener("mouseleave", mouseLeave);
			document.body.removeEventListener("mouseenter", mouseEnter);
		};
	}, []);

	return <></>;
}

interface SetEmojiPathProps {
	emojiPath: string;
	textPath: string;
}
export const SetEmojiPath = ({ emojiPath, textPath }: SetEmojiPathProps) => {
	useEffect(() => {
		document.body.dataset.emojiPath = emojiPath;
		document.body.dataset.textPath = textPath;

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
	}, [emojiPath, textPath]);

	return <></>;
};
