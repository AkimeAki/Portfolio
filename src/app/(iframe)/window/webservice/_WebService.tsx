"use client";

import { webServiceData } from "@/data/webservice";
import { css } from "@kuma-ui/core";
import Link from "next/link";

export function WebService() {
	return (
		<div
			className={css`
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				gap: 20px;

				@media (max-width: 800px) {
					grid-template-columns: 1fr 1fr;
				}
			`}
		>
			{Object.keys(webServiceData).map((id) => {
				return (
					<Link
						key={id}
						href={`/window/webservice/${id}`}
						className={css`
							position: relative;
							display: block;
							border: none;
							width: 100%;
							max-width: 560px;

							&:hover {
								img {
									filter: brightness(0.5);
								}

								span {
									opacity: 1;
								}
							}
						`}
					>
						<span
							className={css`
								position: absolute;
								top: 50%;
								left: 50%;
								transform: translate(-50%, -50%);
								opacity: 0;
								user-select: none;
								pointer-events: none;
								width: 100%;
								font-weight: bold;
								text-align: center;
								font-size: 18px;
								color: white;
								transition-duration: 200ms;
								transition-property: opacity;
								z-index: 1;
							`}
						>
							{webServiceData[id].title}
						</span>
						<img
							src={webServiceData[id].thumbnailFile}
							alt={webServiceData[id].title}
							className={css`
								width: 100%;
								height: 100%;
								object-fit: cover;
								vertical-align: bottom;
								transition-duration: 200ms;
								transition-property: filter;
							`}
						/>
					</Link>
				);
			})}
		</div>
	);
}
