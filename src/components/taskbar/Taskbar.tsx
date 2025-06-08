"use client";

import { osReady } from "@/atom";
import TaskbarIcon from "@/components/taskbar/TaskbarIcon";
import TaskbarClock from "@/components/taskbar/TaskbarClock";
import TaskbarStart from "@/components/taskbar/TaskbarStart";
import { css, cx } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { MinimizedAppArea } from "@/components/taskbar/MinimizedAppArea";
import { linkData } from "@/data/links";
import { memo } from "react";

const TaskbarIconMemo = memo(() => {
	return (
		<>
			{Object.keys(linkData)
				.filter(
					(link) =>
						link === "x" ||
						link === "youtube" ||
						link === "twitch" ||
						link === "niconico" ||
						link === "github"
				)
				.map((link, index) => (
					<span
						key={link}
						style={{ order: index + 1 }}
						className={cx(
							link === "niconico" &&
								css`
									@container (max-width: 720px) {
										display: none;
									}
								`
						)}
					>
						<TaskbarIcon
							iconPath={`/icon/${link}.webp`}
							alt={`${linkData[link].name}`}
							href={linkData[link].url}
						/>
					</span>
				))}
			<span
				className={css`
					order: 6;

					@container (max-width: 720px) {
						display: none;
					}
				`}
			>
				<MinimizedAppArea />
			</span>
		</>
	);
});

export default function () {
	const $osReady = useStore(osReady);

	return (
		<div
			style={{ animationName: !$osReady ? "" : "taskbar-signal" }}
			className={css`
				position: absolute;
				bottom: 0;
				left: 0;
				height: 70px;
				width: 100%;
				opacity: 0;
				z-index: calc(infinity - 1);
				animation-duration: 70ms;
				animation-delay: 1000ms;
				animation-fill-mode: forwards;
				animation-iteration-count: 5;
				animation-timing-function: linear;
				user-select: none;
				pointer-events: none;

				@keyframes taskbar-signal {
					100% {
						opacity: 1;
						pointer-events: all;
					}
				}
			`}
		>
			<div
				style={{ animationName: !$osReady ? "" : "taskbar-view" }}
				className={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 0;
					height: 100%;
					animation-duration: 300ms;
					animation-delay: 1000ms;
					animation-fill-mode: forwards;
					animation-iteration-count: 1;
					animation-timing-function: ease-in-out;

					@keyframes taskbar-view {
						100% {
							width: 100%;
						}
					}
				`}
			>
				<div
					className={css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						backdrop-filter: blur(2px);
						background-color: transparent;

						&:before {
							position: absolute;
							top: 0;
							left: 0;
							display: block;
							content: "";
							width: 100%;
							height: calc(100% - 2px);
							background-color: #ed3256;
							border-top: 2px solid #bb2a4a;
							opacity: 0.7;
						}
					`}
				/>
				<div
					className={css`
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						display: flex;
						align-items: center;
						padding: 0 20px;
						gap: 20px;
						z-index: 1;

						@container (max-width: 720px) {
							justify-content: center;
						}
					`}
				>
					<span
						className={css`
							@container (max-width: 720px) {
								order: 3;
							}
						`}
					>
						<TaskbarStart />
					</span>
					<TaskbarIconMemo />
				</div>
				<div
					className={css`
						position: fixed;
						top: 0;
						left: 0;
						width: 100%;
						height: 26px;
						background-color: #ed3256;
						border-bottom: 2px solid #bb2a4a;
						opacity: 0.7;
						display: none;

						@container (max-width: 720px) {
							display: block;
						}
					`}
				/>
				<TaskbarClock />
			</div>
		</div>
	);
}
