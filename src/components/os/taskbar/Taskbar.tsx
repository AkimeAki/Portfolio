"use client";

import { osReady } from "@/atom";
import TaskbarIcon from "@/components/os/taskbar/TaskbarIcon";
import TaskbarClock from "@/components/os/taskbar/TaskbarClock";
import TaskbarAllAppIcon from "@/components/os/taskbar/TaskbarAllAppIcon";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import MinimizedApps from "@/components/os/MinimizedApps";
import { linkList } from "@/data/links";
import { cx } from "@/libs/merge-kuma";

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

						@media (max-width: 720px) {
							justify-content: center;
						}
					`}
				>
					<span
						className={css`
							@media (max-width: 720px) {
								order: 3;
							}
						`}
					>
						<TaskbarAllAppIcon />
					</span>
					{Object.keys(linkList)
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
											@media (max-width: 720px) {
												display: none;
											}
										`
								)}
							>
								<TaskbarIcon
									iconPath={`/icon/${link}.webp`}
									alt={`${linkList[link].name}`}
									href={linkList[link].url}
								/>
							</span>
						))}
					<span
						className={css`
							order: 6;

							@media (max-width: 720px) {
								display: none;
							}
						`}
					>
						<MinimizedApps />
					</span>
				</div>
				<TaskbarClock />
			</div>
		</div>
	);
}
