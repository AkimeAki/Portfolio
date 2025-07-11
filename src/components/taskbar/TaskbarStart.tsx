"use client";

import { css, cx } from "@kuma-ui/core";
import { useEffect, useRef, useState } from "react";
import { TaskbarStartIcon } from "@/components/taskbar/TaskbarStartIcon";
import { linkData } from "@/data/links";

export function TaskbarStart() {
	const [imagePath, setImagePath] = useState<string>("/emoji/1.png");
	const [ready, setReady] = useState<boolean>(false);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const buttonElement = useRef<HTMLButtonElement>(null);
	const areaElement = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setReady(true);
	}, []);

	useEffect(() => {
		const click = (e: MouseEvent) => {
			if (buttonElement.current !== null && e.target !== null && areaElement.current !== null) {
				const target = e.target as HTMLElement;
				if (!(areaElement.current.contains(target) || buttonElement.current.contains(target))) {
					setIsOpen(false);
				}
			}
		};

		if (isOpen) {
			document.addEventListener("click", click);
		}

		return () => {
			document.removeEventListener("click", click);
		};
	}, [isOpen]);

	useEffect(() => {
		let unmounted = false;
		const images: string[] = [];
		for (let i = 1; i <= 36; i++) {
			images.push(`/emoji/${i}.png`);
		}

		const changeImage = async () => {
			const random = Math.floor(Math.random() * images.length);
			setImagePath(images[random]);
			await new Promise((resolve) => setTimeout(resolve, 1000));
			if (!unmounted) {
				changeImage();
			}
		};

		if (ready && !isOpen) {
			changeImage();
		}

		return () => {
			unmounted = true;
		};
	}, [ready, isOpen]);

	useEffect(() => {
		const taskbarStartIcons = document.querySelectorAll<HTMLAnchorElement>("[data-taskbar-start-icon]");

		function focus() {
			setIsOpen(true);
		}

		function blur() {
			let isActive = false;
			for (const taskbarStartIcon of taskbarStartIcons) {
				if (taskbarStartIcon.matches(":focus")) {
					isActive = true;
					break;
				}
			}

			if (!isActive) {
				setIsOpen(false);
			}
		}

		for (const taskbarStartIcon of taskbarStartIcons) {
			taskbarStartIcon.addEventListener("focus", focus);
			taskbarStartIcon.addEventListener("blur", blur);
		}

		return () => {
			for (const taskbarStartIcon of taskbarStartIcons) {
				taskbarStartIcon.removeEventListener("focus", focus);
				taskbarStartIcon.removeEventListener("blur", blur);
			}
		};
	}, []);

	return (
		<>
			<div
				ref={areaElement}
				className={cx(
					css`
						position: fixed;
						bottom: 80px;
						left: 10px;
						width: 450px;
						max-height: 550px;
						height: calc(100% - 90px);
						background-color: var(--theme-red);
						user-select: none;
						pointer-events: none;
						opacity: 0;
						padding: 20px;
						display: flex;
						flex-direction: column;
						gap: 20px;
						transform: translateY(calc(100% + 100px));
						border: 2px solid #75182c;
						overflow-y: scroll;
						transition-duration: 200ms;
						transition-property: transform, opacity;
						transition-timing-function: steps(5, start);

						@container (max-width: 720px) {
							top: 0;
							left: 0;
							padding: calc(20px + 26px) 20px 20px;
							bottom: auto;
							max-width: 100%;
							width: 100%;
							height: calc(100% - 70px);
							max-height: 100%;
						}
					`,
					isOpen &&
						css`
							opacity: 1;
							user-select: auto;
							pointer-events: all;
							transform: translateY(0);
						`
				)}
			>
				<h2
					className={css`
						color: white;
						font-size: 20px;
						line-height: 1.6;
					`}
				>
					その他各種SNS（よく使う順）
					<div
						className={css`
							font-size: 14px;
							color: white;
							line-height: 1.6;
						`}
					>
						まったく使わないのもあるよ
					</div>
				</h2>
				<div
					className={css`
						display: flex;
						align-content: flex-start;
						flex-wrap: wrap;
						row-gap: 40px;
						column-gap: 20px;
					`}
				>
					{Object.keys(linkData)
						.filter(
							(link) =>
								!(
									link === "x" ||
									link === "youtube" ||
									link === "twitch" ||
									link === "niconico" ||
									link === "github"
								)
						)
						.map((link) => (
							<span
								key={link}
								className={cx(
									link === "niconico" &&
										css`
											display: none;

											@container (max-width: 720px) {
												display: block;
											}
										`
								)}
							>
								<TaskbarStartIcon
									iconPath={`/icon/${link}.webp`}
									alt={`${linkData[link].name}`}
									text={`${linkData[link].name}`}
									href={linkData[link].url}
								/>
							</span>
						))}
				</div>
			</div>
			<button
				type="button"
				tabIndex={0}
				ref={buttonElement}
				onClick={() => {
					setIsOpen((prev) => {
						return !prev;
					});
				}}
				data-cursor="pointer"
				className={[
					css`
						display: flex;
						justify-content: center;
						align-items: center;
						width: 40px;
						height: 40px;
						background-color: #f44458;
						border-style: solid;
						border-width: 3px;
						border-color: transparent;
						transition-duration: 200ms;
						transition-property: background-color;

						@container (max-width: 720px) {
							border-radius: 50%;
						}

						@media (hover: hover) {
							&:hover {
								border-color: var(--theme-green);
							}
						}

						&:focus-visible {
							border-color: var(--theme-green);
						}
					`,
					isOpen
						? css`
								background-color: var(--theme-green);
							`
						: ""
				].join(" ")}
			>
				<img
					src={imagePath}
					alt={"すべてのSNSを見れるボタン"}
					className={css`
						display: block;
						width: 32px;
						height: 32px;
						image-rendering: pixelated;
						user-select: none;
						pointer-events: none;
					`}
				/>
			</button>
		</>
	);
}
