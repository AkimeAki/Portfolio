"use client";

import { css } from "@kuma-ui/core";
import { useEffect, useRef, useState } from "react";

const introFullText =
	"ホームページを開いていただきありがとうございます。彩季（あき）と申します。\nゆっくり実況、生配信、ウェブサービス制作など気まぐれにやってます🐱\nこのサイトにはいくつかおもしろ要素があるので楽しんで行ってください。";

export function IntroContent() {
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
			const segmenter = new Intl.Segmenter("ja-JP");
			const introTextList = Array.from(segmenter.segment(introFullText));

			for (let i = 0; i < introTextList.length; i++) {
				let text = "";
				for (let j = 0; j <= i; j++) {
					text += introTextList[j].segment;
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
				color: #181818;
				white-space: pre-wrap;
				word-break: break-all;
				padding: 5px 10px;
				cursor: text;
				line-height: 1.6;
				font-size: 15px;
			`}
		/>
	);
}
