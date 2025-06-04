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
						<div
							key={index}
							className={css`
								display: flex;
								flex-direction: column;
								gap: 5px;
							`}
						>
							<a href={data.url} target="_blank" rel="noreferrer">
								<img
									src={`/pictures/${data.file}`}
									alt={data.title}
									className={css`
										border-radius: 8px;
										aspect-ratio: 1/1;
										width: 100%;
										height: auto;
									`}
								/>
							</a>
							<h3
								className={css`
									user-select: none;
									pointer-events: none;
									width: 100%;
									text-align: center;
									font-size: 18px;
									color: white;
								`}
							>
								{data.title}
							</h3>
						</div>
					);
				})}
			</div>
		</>
	);
}
