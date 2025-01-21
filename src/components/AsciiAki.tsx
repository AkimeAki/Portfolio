"use client";

import { css } from "@kuma-ui/core";
import { useEffect, useRef, useState } from "react";

const loadImage = (src: string): Promise<HTMLImageElement> => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve(img);
		img.onerror = (e) => reject(e);
		img.src = src;
	});
};

const createHtml = (textList: string[][], className: string = "") => {
	let html = "";
	textList.forEach((textLine) => {
		html += `<div class="${className}">`;
		textLine.forEach((text) => {
			html += text;
		});
		html += "</div>";
	});

	return html;
};

const asciiViewTime = 500;

export default function () {
	const [ready, setReady] = useState<boolean>(false);
	const element = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setReady(true);
	}, []);

	useEffect(() => {
		let unmounted = false;

		if (ready) {
			(async () => {
				if (element.current !== null) {
					const asciiArea = element.current;

					const asciiTextLength = 75;
					const asciiTextHeight = 45;

					const textList: string[][] = [];
					for (let i = 0; i < asciiTextHeight; i++) {
						const text = [];
						for (let j = 0; j < asciiTextLength; j++) {
							text.push(" ");
						}
						textList.push(text);
					}

					asciiArea.innerHTML = createHtml(textList, "ascii-loading");
					await new Promise((resolve) => setTimeout(resolve, 1000));
					const style = document.createElement("style");

					const asciiViewDelayMax = 400;
					[...Array(asciiTextHeight)].forEach((_, i) => {
						const random = Math.random() * (asciiViewDelayMax - 0) + 0;
						style.innerHTML += /* css */ `
							.ascii-view:nth-child(${i + 1}) {
								animation-delay: ${random}ms;
							}
						`;
					});
					asciiArea.insertAdjacentElement("beforebegin", style);

					const asciiWidth = asciiArea.offsetWidth;
					const asciiHeight = asciiArea.offsetHeight;

					const canvas = document.createElement("canvas");
					canvas.width = asciiWidth;
					canvas.height = asciiHeight;
					const ctx = canvas.getContext("2d");
					if (ctx !== null) {
						const image = await loadImage("/ascii/main.png");
						const imgAspect = image.naturalWidth / image.naturalHeight;

						const maxFPS = 30;
						let lastUpdateTime = performance.now();
						let positionX = 0;
						let oldPositonY = -1;
						const startTime = new Date().getTime();
						const tick = (): void => {
							if (unmounted) {
								return;
							}
							requestAnimationFrame(tick);

							const now = performance.now();
							const deltaTime = now - lastUpdateTime;

							if (deltaTime < 1000 / maxFPS) {
								return;
							}

							lastUpdateTime = now - (deltaTime % (1000 / maxFPS));

							ctx.clearRect(0, 0, canvas.width, canvas.height);

							const moveMargin = 40;
							positionX += 1;

							const currentTime = new Date().getTime();
							if (currentTime - startTime < asciiViewTime + asciiViewDelayMax + 10) {
								positionX = 0;
							}

							let top = 0;
							let left = 0;
							let width = 0;
							let height = 0;
							if (imgAspect >= asciiWidth / asciiHeight) {
								// 横長
								left = 0;
								width = asciiWidth;
								height = asciiWidth / imgAspect;
								top = (asciiHeight - moveMargin * 2 - height) / 2;
							} else {
								// 縦長
								top = moveMargin;
								height = asciiHeight - moveMargin * 2;
								width = height * imgAspect;
								left = (asciiWidth - width) / 2;
							}

							const radians = (Math.PI / 180) * positionX;
							const positionY = Math.floor(Math.sin(radians) * moveMargin);

							if (radians * (180 / Math.PI) >= 360) {
								positionX = 0;
								return;
							}

							if (positionY === oldPositonY) {
								return;
							}

							oldPositonY = positionY;

							ctx.drawImage(
								image,
								0,
								0,
								image.naturalWidth,
								image.naturalHeight,
								left,
								top + positionY,
								width,
								height
							);

							textList.length = 0;
							for (let i = 0; i < asciiTextHeight; i++) {
								const textLine = [];
								for (let j = 0; j < asciiTextLength; j++) {
									const imageData = ctx.getImageData(
										(asciiWidth / asciiTextLength) * j,
										(asciiHeight / asciiTextHeight) * i,
										asciiWidth / asciiTextLength,
										asciiHeight / asciiTextHeight
									);

									let totalBrightness = 0;
									let pixelCount = 0;
									for (let k = 0; k < imageData.data.length; k += 4) {
										const r = imageData.data[k];
										const g = imageData.data[k + 1];
										const b = imageData.data[k + 2];

										const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

										totalBrightness += brightness;
										pixelCount++;
									}

									const brightness = totalBrightness / pixelCount;
									if (brightness > 200) {
										textLine.push("@");
									} else if (brightness > 180) {
										textLine.push("O");
									} else if (brightness > 160) {
										textLine.push("=");
									} else if (brightness > 120) {
										textLine.push(":");
									} else if (brightness > 100) {
										textLine.push("*");
									} else {
										textLine.push(" ");
									}
								}
								textList.push(textLine);
							}

							if (currentTime - startTime < asciiViewTime + asciiViewDelayMax + 10) {
								asciiArea.innerHTML = createHtml(textList, "ascii-view");
							} else {
								asciiArea.innerHTML = createHtml(textList, "ascii-ready");
							}
						};

						tick();
					}
				}
			})();
		}

		return () => {
			unmounted = true;
		};
	}, [ready]);

	return (
		<div>
			<div
				ref={element}
				style={{ "--ascii-view-time": `${asciiViewTime}ms` } as React.CSSProperties}
				className={css`
					display: flex;
					flex-direction: column;
					align-items: flex-start;

					div {
						font-size: 10px;
						font-family: "CascadiaMonoNF";
						white-space: pre;
						line-height: 1;
						animation-duration: var(--ascii-view-time);
						animation-fill-mode: forwards;
						animation-iteration-count: 1;
						animation-timing-function: ease-out;
					}

					.ascii-loading {
						transform: translateY(-100vh);
						opacity: 0;
					}

					.ascii-view {
						transform: translateY(-100vh);
						opacity: 0;
						animation-name: view-ascii;
					}

					.ascii-ready {
						transform: translateY(0);
						opacity: 1;
					}

					@keyframes view-ascii {
						100% {
							transform: translateY(0);
							opacity: 1;
						}
					}
				`}
			/>
		</div>
	);
}
