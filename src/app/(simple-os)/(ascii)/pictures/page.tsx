import { SetEmojiPath } from "@/components/atoms/EmojiPath";
import { appList } from "@/libs/app-select";
import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: appList.pictures.pageTitle,
	isFullTitle: true,
	description: "彩季が描いたイラスト集です。"
});

const picturesData: {
	url: string;
	file: string;
	alt?: string;
}[] = [
	{
		url: "https://www.pixiv.net/artworks/129680562",
		file: "voice-teto.webp",
		alt: "重音テト"
	}
];

export default function () {
	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: /* css */ `
						body {
							overflow-y: scroll;
						}
					`
				}}
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
