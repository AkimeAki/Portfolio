"use client";

import { cx } from "@/libs/merge-kuma";
import { css } from "@kuma-ui/core";
import { CSSProperties, useEffect, useRef, useState } from "react";

interface Props {
	style?: CSSProperties;
	className?: string;
}

export default function ({ children, style, className }: React.PropsWithChildren<Props>) {
	const glitchElement = useRef<HTMLVideoElement>(null);
	const [isReady, setIsReady] = useState<boolean>(false);

	useEffect(() => {
		setIsReady(true);
	}, []);

	useEffect(() => {
		const glitch = () => {
			const random = Math.floor(Math.random() * (10000 - 5000) + 5000);

			if (glitchElement.current !== null) {
				glitchElement.current.style.opacity = "1";

				setTimeout(() => {
					if (glitchElement.current !== null) {
						glitchElement.current.style.opacity = "0";
					}
				}, 500);
			}

			setTimeout(() => {
				glitch();
			}, random);
		};

		if (isReady) {
			glitch();
		}
	}, [isReady]);

	return (
		<div style={style} className={cx(className)}>
			{children}
			<video
				className={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					mix-blend-mode: color-dodge;
					touch-action: none;
					object-fit: cover;
				`}
				src="/effect/noise.mp4"
				autoPlay
				loop
				muted
				preload="no"
				playsInline
			/>
			<video
				className={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					mix-blend-mode: exclusion;
					touch-action: none;
					object-fit: cover;
				`}
				ref={glitchElement}
				src="/effect/glitch.mp4"
				autoPlay
				loop
				muted
				preload="no"
				playsInline
			/>
		</div>
	);
}
