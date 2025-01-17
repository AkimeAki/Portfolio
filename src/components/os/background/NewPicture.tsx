"use client";

import { osLoading } from "@/atom";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import GlitchWrapper from "@/components/os/GlitchWrapper";
import { useEffect, useState } from "react";

const imageList = [
	"https://r2.aki.wtf/paint/teto1.png",
	"https://r2.aki.wtf/paint/r-planet_pixel.png",
	"https://r2.aki.wtf/paint/aqua_pixel.png"
];

export default function () {
	const $osLoading = useStore(osLoading);
	const [imageNum, setImageNum] = useState<number>(0);
	const [isPixel, setIsPixel] = useState<boolean>(true);
	const [ready, setReady] = useState<boolean>(false);

	useEffect(() => {
		if (!$osLoading) {
			setReady(true);
		}
	}, [$osLoading]);

	useEffect(() => {
		if (/_pixel\.[^.]+$/.test(imageList[imageNum])) {
			setIsPixel(true);
		} else {
			setIsPixel(false);
		}
	}, [imageNum]);

	useEffect(() => {
		const setImage = () => {
			setImageNum((prev) => {
				let next = prev + 1;
				if (next >= imageList.length) {
					next = 0;
				}

				return next;
			});

			setTimeout(() => {
				setImage();
			}, 2000);
		};

		if (ready) {
			setImage();
		}
	}, [ready]);

	return (
		<GlitchWrapper
			style={{
				animationName: ready ? "new-picture-signal" : ""
			}}
			className={css`
				position: absolute;
				top: 180px;
				right: 720px;
				width: 100px;
				aspect-ratio: 1/1;

				user-select: none;
				pointer-events: none;

				filter: brightness(80%);

				animation-duration: 70ms;
				animation-fill-mode: forwards;
				animation-delay: 1600ms;
				animation-iteration-count: 5;
				animation-timing-function: linear;
				opacity: 0;

				@media (max-width: 811px) {
					top: auto;
					bottom: 440px;
					right: 180px;
				}

				@keyframes new-picture-signal {
					100% {
						opacity: 1;
					}
				}
			`}
		>
			<img
				src={imageList[imageNum]}
				style={{ imageRendering: isPixel ? "pixelated" : undefined }}
				className={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					object-fit: cover;
					filter: brightness(110%) blur(2px);
					transform: scale(1.02);
				`}
			/>
			<img
				src={imageList[imageNum]}
				style={{ imageRendering: isPixel ? "pixelated" : undefined }}
				className={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					object-fit: cover;
				`}
			/>
		</GlitchWrapper>
	);
}
