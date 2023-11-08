/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";

export const PortfolioWeb = ({ url }: { url: string }): JSX.Element => {
	return (
		<div
			css={css`
				position: relative;
				width: 650px;
				aspect-ratio: 16/9;
				overflow: hidden;

				@media screen and (max-width: 780px) {
					width: 520px;
				}

				@media screen and (max-width: 635px) {
					width: 390px;
				}

				@media screen and (max-width: 460px) {
					width: 325px;
				}

				@media screen and (max-width: 400px) {
					width: 260px;
				}

				@media screen and (max-width: 328px) {
					width: 195px;
				}
			`}
		>
			<iframe
				css={css`
					width: 1300px;
					aspect-ratio: 16/9;
					transform-origin: 0 0;
					transform: scale(0.5);
					border: none;

					@media screen and (max-width: 780px) {
						transform: scale(0.4);
					}

					@media screen and (max-width: 635px) {
						transform: scale(0.3);
					}

					@media screen and (max-width: 460px) {
						transform: scale(0.25);
					}

					@media screen and (max-width: 400px) {
						transform: scale(0.2);
					}

					@media screen and (max-width: 328px) {
						transform: scale(0.15);
					}
				`}
				src={url}
			/>
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
				max-width: 500px;
				aspect-ratio: 16/9;
				border: none;
			`}
			src={`https://www.youtube.com/embed/${url}`}
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		/>
	);
};

export const PortfolioChromeExtension = ({ id, iframely }: { id: string; iframely: string }): JSX.Element => {
	useEffect(() => {
		(window as any).iframely?.load();
	}, []);

	return (
		<>
			<div className="iframely-embed">
				<div
					className="iframely-responsive"
					css={css`
						height: 160px;
						padding-bottom: 0;
					`}
				>
					<a
						href={`https://chrome.google.com/webstore/detail/${id}`}
						data-iframely-url={`//iframely.net/${iframely}`}
					/>
				</div>
			</div>
		</>
	);
};
