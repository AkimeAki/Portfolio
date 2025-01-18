"use client";

import { css } from "@kuma-ui/core";
import { useEffect, useRef } from "react";

export default function () {
	const element = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const id = setInterval(() => {
			const nowDate = new Date();

			const nowYear = nowDate.getFullYear();
			const nowMonth = ("00" + (nowDate.getMonth() + 1)).slice(-2);
			const nowDay = ("00" + nowDate.getDate()).slice(-2);
			const nowHour = ("00" + nowDate.getHours()).slice(-2);
			const nowMin = ("00" + nowDate.getMinutes()).slice(-2);
			const nowSec = ("00" + nowDate.getSeconds()).slice(-2);

			if (element.current !== null) {
				element.current.innerHTML = `${nowYear}/${nowMonth}/${nowDay}\n${nowHour}:${nowMin}:${nowSec}`;
			}
		}, 1000);

		return () => {
			clearInterval(id);
		};
	}, []);

	return (
		<div
			ref={element}
			className={css`
				position: absolute;
				top: 50%;
				right: 20px;
				transform: translateY(-50%);
				color: white;
				white-space: pre-wrap;
				font-size: 16px;
				text-align: right;
				line-height: 1;
				pointer-events: auto;
				z-index: calc(infinity - 1);

				@media (max-width: 720px) {
					display: none;
				}
			`}
		/>
	);
}
