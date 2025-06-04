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
					<div
						key={id}
						className={css`
							display: flex;
							flex-direction: column;
							gap: 5px;
						`}
					>
						<Link
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
							{webServiceData[id].title}
						</h3>
					</div>
				);
			})}
		</div>
	);
}
