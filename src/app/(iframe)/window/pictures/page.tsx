import { SetEmojiPath } from "@/components/commons/EmojiPath";
import { picturesData } from "@/data/pictures";
import { appData } from "@/data/app";
import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import type { Metadata } from "next";
import { InlineStyle } from "@/components/commons/InlineStyle";
import { SetAppId } from "@/components/iframe/SetAppId";

export const dynamic = "force-static";

export default function () {
	return (
		<>
			<InlineStyle
				css={`
					body {
						max-width: 1100px;
						width: 100%;
						margin: 0 auto;
						padding: 30px;
						height: auto;
						color: #e9e9e9;

						@media (max-width: 500px) {
							padding: 15px;
						}
					}
				`}
			/>
			<SetAppId id="pictures" />
			<h2
				className={css`
					margin-bottom: 30px;
					font-size: 25px;
					font-weight: bold;
					color: #edf8af;
				`}
			>
				描いたイラスト集
			</h2>
			<div
				className={css`
					display: grid;
					grid-template-columns: 1fr 1fr 1fr 1fr;
					gap: 20px;

					@media (max-width: 800px) {
						grid-template-columns: 1fr 1fr 1fr;
					}
				`}
			>
				{picturesData.map((data, index) => {
					return (
						<a href={data.url} target="_blank" key={index} rel="noreferrer">
							<img
								src={`/pictures/${data.file}`}
								alt={data.alt}
								className={css`
									border-radius: 8px;
									aspect-ratio: 1/1;
									width: 100%;
									height: auto;
								`}
							/>
						</a>
					);
				})}
			</div>
		</>
	);
}
