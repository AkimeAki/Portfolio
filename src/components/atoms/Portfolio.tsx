/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

export const PortfolioWeb = ({ url }: { url: string }): JSX.Element => {
	const [uniqueKey] = useState<string>(
		new Date().getTime().toString(16) + Math.floor(1000 * Math.random()).toString(16)
	);

	useEffect(() => {
		const resize = (): void => {
			const wrapper = document.querySelector(`.portfolio-web-wrapper-${uniqueKey}`);

			if (wrapper !== null) {
				const iframe = wrapper.querySelector("iframe");
				if (iframe !== null) {
					iframe.style.transform = `scale(${wrapper.clientWidth / 1300})`;
				}
			}
		};

		resize();
		window.addEventListener("resize", resize, false);

		return () => {
			window.removeEventListener("resize", resize, false);
		};
	}, []);

	return (
		<div
			className={`portfolio-web-wrapper-${uniqueKey}`}
			css={css`
				position: relative;
				width: 100%;
				aspect-ratio: 16/9;
				overflow: hidden;
			`}
		>
			<iframe
				css={css`
					aspect-ratio: 16/9;
					transform-origin: 0 0;
					border: none;
					width: 1300px;
				`}
				src={url}
			/>
			<canvas />
			<a
				css={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: 1;
				`}
				href={url}
				target="_blank"
			/>
		</div>
	);
};

export const PortfolioYouTube = ({ url }: { url: string }): JSX.Element => {
	return (
		<iframe
			css={css`
				width: 100%;
				aspect-ratio: 16/9;
				border: none;
			`}
			src={`https://www.youtube.com/embed/${url}`}
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		/>
	);
};
