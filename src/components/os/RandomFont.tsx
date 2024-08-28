"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
	text: string;
}

export default function ({ text }: Props) {
	const [textArray] = useState<string[]>(text.split(""));
	const element = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const timerIds: NodeJS.Timeout[] = [];
		const fonts = [
			'"游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic"',
			'"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro"',
			'"Meiryo", "メイリオ"',
			'"HG行書体"',
			'"HGS創英角ﾎﾟｯﾌﾟ体"',
			'"Wide Latin"',
			'"Impact"'
		];

		const maxTime = 1000;
		const minTime = 700;

		if (element.current !== null) {
			const textLength = element.current.children.length;
			for (let i = 0; i < textLength; i++) {
				const randomTime = Math.floor(Math.random() * (maxTime - minTime) + minTime);

				const id = setInterval(() => {
					if (Math.floor(Math.random() * 5) === 1) {
						(element.current!.children[i] as HTMLSpanElement).style.fontFamily =
							fonts[Math.floor(Math.random() * fonts.length)];
					}
				}, randomTime);

				timerIds.push(id);
			}
		}

		return () => {
			timerIds.forEach((timerId) => {
				clearInterval(timerId);
			});
		};
	}, []);

	return (
		<span ref={element}>
			{textArray.map((char, index) => {
				return <span key={index}>{char}</span>;
			})}
		</span>
	);
}
