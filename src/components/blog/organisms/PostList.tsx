import { formatDate } from "@/libs/format-date";
import { Blog } from "@/types/blog";
import { css, Link } from "@kuma-ui/core";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";

interface Props {
	posts: (Blog & MicroCMSContentId & MicroCMSDate)[];
	title?: string;
}

export default function ({ posts, title }: Props) {
	return (
		<>
			{title !== undefined && (
				<h2
					className={css`
						margin-bottom: 20px;
						font-size: 20px;
					`}
				>
					{title}
				</h2>
			)}
			<div
				className={css`
					display: grid;
					grid-template-columns: 1fr 1fr 1fr 1fr;
					gap: 20px;

					@media (max-width: 970px) {
						grid-template-columns: 1fr 1fr 1fr;
					}

					@media (max-width: 800px) {
						grid-template-columns: 1fr 1fr;
					}

					@media (max-width: 700px) {
						grid-template-columns: 1fr 1fr;
					}

					@media (max-width: 600px) {
						grid-template-columns: 1fr;
					}
				`}
			>
				{posts.map((post) => (
					<div
						key={post.id}
						className={css`
							position: relative;
							box-shadow: 0 0 3px #ccc;
							background-color: white;

							&:hover {
								box-shadow: 0 0 5px #ff9a9a;
							}
						`}
					>
						<img
							src={
								post.thumbnail !== undefined
									? `${post.thumbnail.url}?fm=webp&w=300`
									: "/blog/default-thumbnail.png"
							}
							className={css`
								width: 100%;
								aspect-ratio: 75/47;
								object-fit: cover;
							`}
						/>
						<div
							className={css`
								display: flex;
								flex-direction: column;
								gap: 20px;
								padding: 10px;
							`}
						>
							<div
								className={css`
									display: flex;
									align-items: center;
									gap: 5px;
								`}
							>
								<time
									className={css`
										font-size: 15px;
										padding-bottom: 2px;
									`}
									dateTime={post.publishedAt ?? post.createdAt}
								>
									{formatDate(post.publishedAt ?? post.createdAt)}
								</time>
								{post.category !== undefined && (
									<Link
										href={`/blog/categories/${post.category.id}`}
										style={{ "--_background": post.category.color } as React.CSSProperties}
										className={css`
											--_foreground-threshold: 0.7;
											--_foreground: oklch(
												from var(--_background)
													round(up, var(--_foreground-threshold) / l - 1, 1) 0 h
											);

											display: block;
											background-color: var(--_background);
											color: var(--_foreground);
											border-style: solid;
											border-color: transparent;
											border-width: 1px;

											font-size: 12px;
											padding: 2px 6px 3px;
											border-radius: 8px;
											position: relative;
											z-index: 1;

											&:hover {
												color: var(--_background);
												background-color: var(--_foreground);
												border-color: var(--_background);
											}
										`}
									>
										{post.category.name}
									</Link>
								)}
							</div>
							<h2
								className={css`
									font-size: 16px;
									line-height: 1.6;
								`}
							>
								{post.title}
							</h2>
						</div>
						<Link
							href={`/blog/posts/${post.id}`}
							className={css`
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
							`}
						/>
					</div>
				))}
			</div>
		</>
	);
}
