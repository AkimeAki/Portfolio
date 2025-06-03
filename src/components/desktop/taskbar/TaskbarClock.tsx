"use client";

import { css } from "@kuma-ui/core";
import { useEffect, useRef } from "react";

export default function () {
	const element = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const id = setInterval(() => {
			const nowDate = new Date();

			const nowYear = nowDate.getFullYear();
			const nowMonth = `00${nowDate.getMonth() + 1}`.slice(-2);
			const nowDay = `00${nowDate.getDate()}`.slice(-2);
			const nowHour = `00${nowDate.getHours()}`.slice(-2);
			const nowMin = `00${nowDate.getMinutes()}`.slice(-2);
			const nowSec = `00${nowDate.getSeconds()}`.slice(-2);

			const dayOfWeek = nowDate.getDay();
			let weekIcon = "";

			switch (dayOfWeek) {
				case 0:
					weekIcon = "☀️";
					break;
				case 1:
					weekIcon = "🌙";
					break;
				case 2:
					weekIcon = "🔥";
					break;
				case 3:
					weekIcon = "💧";
					break;
				case 4:
					weekIcon = "🍃";
					break;
				case 5:
					weekIcon = "☮️";
					break;
				case 6:
					weekIcon = "🛜";
					break;
			}

			if (element.current !== null) {
				element.current.innerHTML = /* html */ `
					<span>${`${nowYear}/${nowMonth}/${nowDay}\n${nowHour}:${nowMin}:${nowSec}`}</span>
					<span class="week-icon">${weekIcon}</span>
				`;
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
				white-space: pre-wrap;
				text-align: right;
				pointer-events: auto;
				z-index: calc(infinity - 1);
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 20px;

				span {
					color: white;
					font-size: 16px;
					line-height: 1;
				}

				.week-icon {
					font-size: 25px;
				}

				@media (max-width: 720px) {
					position: fixed;
					top: 3px;
					left: 50%;
					transform: translateX(-50%);
					white-space: nowrap;
					text-align: center;

					body[data-os="android"] & {
						top: 4px;
					}

					.week-icon {
						font-size: 16px;
					}
				}
			`}
		/>
	);
}
