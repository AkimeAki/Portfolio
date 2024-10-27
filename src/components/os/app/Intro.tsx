"use client";

import { css } from "@kuma-ui/core";
import { useEffect, useRef, useState } from "react";

const introFullText =
	"ホームページを開いていただきありがとうございます。彩季（あき）と申します。\nゆっくり実況、生配信、ウェブサービス制作など気まぐれにやってます🐱\nこのサイトにはいくつかおもしろ要素があるので楽しんで行ってください。";

export default () => {
	const [ready, setReady] = useState<boolean>(false);
	const [introText, setIntroText] = useState<string>("");
	const memoElement = useRef<HTMLDivElement | null>(null);
	const [finishIntro, setFinishIntro] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setReady(true);
		}, 500);
	}, []);

	useEffect(() => {
		const showText = async () => {
			for (let i = 0; i < introFullText.length; i++) {
				let text = "";
				for (let j = 0; j <= i; j++) {
					text += introFullText[j];
				}

				await new Promise((resolve) => setTimeout(resolve, 100));
				setIntroText(text);
			}

			setFinishIntro(true);
		};

		if (ready) {
			showText();
		}
	}, [ready]);

	useEffect(() => {
		if (memoElement.current !== null) {
			memoElement.current.innerHTML = introText;
		}
	}, [introText]);

	return (
		<div
			ref={memoElement}
			contentEditable={finishIntro ? "true" : "false"}
			className={css`
				width: 100%;
				min-height: 100%;
				background-color: #f0eef4;
				color: #181818;
				white-space: pre-wrap;
				word-break: break-all;
				padding: 5px 10px;
				cursor: text;

				* {
					background-color: #f0eef4;
					color: #181818;
					white-space: pre-wrap;
					word-break: break-all;
					cursor: text;
				}

				@media (max-width: 720px) {
					font-size: 13px;
					* {
						font-size: 13px;
					}
				}
			`}
		/>
	);
};
