"use client";

import { useNotification } from "@/hooks/useNotification";
import { css } from "@kuma-ui/core";
import { useEffect, useState } from "react";

export function TaskbarClock() {
	const [weekIcon, setWeekIcon] = useState<string>("");
	const [time, setTime] = useState<string>("");
	const { addMessage } = useNotification();

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

			setTime(`${nowYear}/${nowMonth}/${nowDay}\n${nowHour}:${nowMin}:${nowSec}`);
			setWeekIcon(weekIcon);
		}, 1000);

		return () => {
			clearInterval(id);
		};
	}, []);

	return (
		<div
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

				@container (max-width: 720px) {
					position: fixed;
					top: 3px;
					left: 50%;
					transform: translateX(-50%);
					white-space: nowrap;
					text-align: center;

					body[data-os="android"] & {
						top: 4px;
					}
				}
			`}
		>
			<span
				className={css`
					color: white;
					font-size: 16px;
					line-height: 1;
				`}
			>
				{time}
			</span>
			<span
				onClick={() => {
					addMessage("ゲームなんかやめて\n早く寝なさい");
				}}
				className={css`
					font-size: 25px;
					color: white;
					line-height: 1;

					@container (max-width: 720px) {
						font-size: 16px;
					}
				`}
			>
				{weekIcon}
			</span>
		</div>
	);
}
