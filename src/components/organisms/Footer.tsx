/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Footer = (): JSX.Element => {
	return (
		<footer
			css={css`
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 100px;
			`}
		>
			<p
				css={css`
					color: white;
					font-size: 20px;
				`}
			>
				&copy; 彩季
			</p>
			<div
				css={css`
					display: flex;
					gap: 10px;

					a {
						border-radius: 50%;
						display: block;
						overflow: hidden;
						font-size: 0;

						img {
							width: 45px;
							aspect-ratio: 1/1;
						}
					}
				`}
			>
				<a href="https://www.youtube.com/channel/UCHV3Taosn76pn9_ip1u7Zkg" target="_blank">
					<img src="/img/icon/circle/youtube.png" alt="YouTubeアイコン" />
				</a>
				<a href="https://twitter.com/Akime_Aki" target="_blank">
					<img src="/img/icon/circle/twitter.png" alt="Twitterアイコン" />
				</a>
				<a href="https://x.com/Akime_Aki" target="_blank">
					<img src="/img/icon/circle/x.png" alt="Xアイコン" />
				</a>
			</div>
		</footer>
	);
};
