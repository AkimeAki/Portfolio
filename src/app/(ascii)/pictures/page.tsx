import { SetEmojiPath } from "@/components/atoms/EmojiPath";
import { picturesData } from "@/data/pictures";
import { appData } from "@/data/app";
import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import type { Metadata } from "next";
import { InlineStyle } from "@/components/atoms/InlineStyle";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: appData.pictures.pageTitle,
	isFullTitle: true,
	description: "彩季が描いたイラスト集です。"
});

export default function () {
	return (
		<>
			<InlineStyle
				css={`
					body {
						overflow-y: scroll;
					}
				`}
			/>
			<SetEmojiPath path="pictures" />
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
