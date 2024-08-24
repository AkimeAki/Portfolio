/** @jsxImportSource @emotion/react */

import { openAppList } from "@/atom";
import { sortList } from "@/lib/app-select";
import { css } from "@emotion/react";
import { useStore } from "@nanostores/react";
import { useEffect, useRef } from "react";

interface Props {
	title: string;
	children: React.ReactNode;
	id: string;
}

export default function ({ title, children, id }: Props) {
	const $openAppList = useStore(openAppList);
	const windowBarElement = useRef<HTMLDivElement | null>(null);
	const windowElement = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const move = (e: PointerEvent) => {
			if (e.buttons === 1 && windowElement.current !== null && windowBarElement.current !== null) {
				windowElement.current.style.top = windowElement.current.offsetTop + e.movementY + "px";
				windowElement.current.style.left = windowElement.current.offsetLeft + e.movementX + "px";
				windowElement.current.draggable = false;
				windowBarElement.current.setPointerCapture(e.pointerId);
			}
		};

		const mousedown = () => {
			const sortResult = sortList(id, $openAppList);
			if (JSON.stringify(sortResult) !== JSON.stringify($openAppList)) {
				openAppList.set(sortList(id, $openAppList));
				history.pushState("", "", `/${id}`);
			}
		};

		if (windowBarElement.current !== null) {
			windowBarElement.current.addEventListener("pointermove", move);
			windowBarElement.current.addEventListener("mousedown", mousedown);
		}

		return () => {
			if (windowBarElement.current !== null) {
				windowBarElement.current.removeEventListener("pointermove", move);
				windowBarElement.current.removeEventListener("mousedown", mousedown);
			}
		};
	}, [$openAppList]);

	return (
		<div
			ref={windowElement}
			css={css`
				position: absolute;
				top: 0;
				left: 0;
				width: 80%;
				height: calc(90% - 70px);
				border-left: 4px solid #edf8aa;
				border-right: 4px solid #edf8aa;
				border-bottom: 4px solid #edf8aa;
				display: ${$openAppList.includes(id) ? "block" : "none"};
				user-select: auto;
				pointer-events: auto;
				z-index: ${$openAppList.indexOf(id)};
				box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.36);
			`}
		>
			<div
				css={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: #ffffff;
					opacity: 0.95;
				`}
			/>
			<div
				css={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
				`}
			>
				<div
					ref={windowBarElement}
					css={css`
						position: relative;
						height: 50px;
						background-color: #edf8aa;
						display: flex;
						justify-content: space-between;
					`}
				>
					<div
						css={css`
							display: flex;
							height: 100%;
							align-items: center;
							margin-left: 10px;
						`}
					>
						<h2
							css={css`
								line-height: 1;
								font-weight: bold;
								font-size: 20px;
							`}
						>
							{title}
						</h2>
					</div>
					<div
						css={css`
							display: flex;
							height: 100%;
							gap: 10px;
							align-items: center;
							margin-right: 10px;
						`}
					>
						<div
							css={css`
								width: 25px;
								height: 25px;
								background-color: #c82746;
								cursor: pointer;
							`}
						/>
						<div
							css={css`
								width: 25px;
								height: 25px;
								background-color: #c82746;
								cursor: pointer;
							`}
						/>
						<div
							onClick={() => {
								const closeAppList = $openAppList.filter((item) => {
									return item !== id;
								});

								if (closeAppList.length === 0) {
									history.pushState("", "", "/");
								} else {
									history.pushState("", "", `/${closeAppList[0]}`);
								}

								openAppList.set(closeAppList);
							}}
							css={css`
								width: 25px;
								height: 25px;
								background-color: #c82746;
								cursor: pointer;
							`}
						/>
					</div>
				</div>
				<div
					css={css`
						flex: 1;
					`}
				>
					{children}
				</div>
			</div>
		</div>
	);
}
