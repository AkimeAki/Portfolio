"use client";

import { css } from "@kuma-ui/core";
import { useEffect, useRef, useState } from "react";
import TaskbarAppIcon from "@/components/os/taskbar/TaskbarAppIcon";

export default function () {
	const [imagePath, setImagePath] = useState<string>("/emoji/1.png");
	const [ready, setReady] = useState<boolean>(false);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const buttonElement = useRef<HTMLDivElement>(null);
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

	return (
		<>
			<div
				ref={areaElement}
				className={[
					css`
						position: fixed;
						bottom: 80px;
						left: 10px;
						width: 450px;
						max-height: 550px;
						height: calc(100% - 90px);
						background-color: #ad2b46;
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

						@media (max-width: 720px) {
							top: 0;
							left: 0;
							bottom: auto;
							max-width: 100%;
							width: 100%;
							height: calc(100% - 70px);
							max-height: 100%;
						}
					`,
					isOpen
						? css`
								opacity: 1;
								user-select: auto;
								pointer-events: all;
								transform: translateY(0);
							`
						: ""
				].join(" ")}
			>
				<h2
					className={css`
						color: white;
						font-size: 20px;
					`}
				>
					その他各種SNS（よく使う順）
					<div
						className={css`
							font-size: 14px;
							color: white;
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
					<span
						className={css`
							display: none;

							@media (max-width: 720px) {
								display: block;
							}
						`}
					>
						<TaskbarAppIcon
							iconPath="/icon/niconico.webp"
							alt={"ニコニコ動画"}
							href="https://www.nicovideo.jp/user/98282698"
							text="ニコニコ動画"
						/>
					</span>
					<TaskbarAppIcon
						href="https://bsky.app/profile/aki.wtf"
						iconPath="/icon/bluesky.webp"
						alt="Bluesky"
						text="Bluesky"
					/>
					<TaskbarAppIcon
						href="https://misskey.io/@_aki"
						iconPath="/icon/misskeyio.webp"
						alt="Misskey.io"
						text="Misskey.io"
					/>
					<TaskbarAppIcon
						href="https://misskey.io/@aki.wtf@bsky.brid.gy"
						iconPath="/icon/misskeyio.webp"
						alt="Misskey.io"
						text="Blueskyと同じ"
					/>
					<TaskbarAppIcon
						href="https://mixi.social/@Akii"
						iconPath="/icon/mixi2.webp"
						alt="mixi2"
						text="mixi2"
					/>
					<TaskbarAppIcon
						href="https://a-k-i.booth.pm/"
						iconPath="/icon/booth.webp"
						alt="BOOTH"
						text="BOOTH"
					/>
					<TaskbarAppIcon
						href="https://steamcommunity.com/id/Aki___/myworkshopfiles/"
						iconPath="/icon/steam.webp"
						alt="Steamワークショップ"
						text="Steam ﾜｰｸｼｮｯﾌﾟ"
					/>
					<TaskbarAppIcon
						href="https://suzuri.jp/Aki___"
						iconPath="/icon/suzuri.webp"
						alt="SUZURI"
						text="SUZURI"
					/>
					<TaskbarAppIcon
						href="https://fiicen.jp/field/Akii"
						iconPath="/icon/fiicen.webp"
						alt="Fiicen"
						text="Fiicen"
					/>
					<TaskbarAppIcon
						href="https://www.pixiv.net/users/64086928"
						iconPath="/icon/pixiv.webp"
						alt="pixiv"
						text="pixiv"
					/>
					<TaskbarAppIcon
						href="https://www.hoyolab.com/accountCenter/postList?id=8411789"
						iconPath="/icon/hoyolab.webp"
						alt="HoYoLab"
						text="HoYoLab"
					/>
				</div>
			</div>
			<div
				ref={buttonElement}
				onClick={() => {
					setIsOpen((prev) => {
						return !prev;
					});
				}}
				className={[
					css`
						display: flex;
						justify-content: center;
						align-items: center;
						width: 40px;
						height: 40px;
						background-color: #f44458;
						border-style: solid;
						border-width: 2px;
						border-color: transparent;
						cursor: pointer;
						transition-duration: 200ms;
						transition-property: background-color;

						@media (max-width: 720px) {
							border-radius: 50%;
						}

						@media (hover: hover) {
							&:hover {
								border-color: #c6dd95;
							}
						}
					`,
					isOpen
						? css`
								background-color: #c6dd95;
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
			</div>
		</>
	);
}
