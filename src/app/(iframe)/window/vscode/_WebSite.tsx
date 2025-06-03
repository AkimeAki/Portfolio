"use client";

import AppIcon from "@/components/desktop/AppIcon";
import { css } from "@kuma-ui/core";

export function WebSite() {
	return (
		<div
			className={css`
				display: flex;
				padding: 15px;
				column-gap: 15px;
				row-gap: 15px;
				flex-wrap: wrap;
				align-items: flex-start;
				align-content: flex-start;
			`}
		>
			<AppIcon
				imgSrc="/app/blog.png"
				isPixel
				onClick={() => {
					window.parent.postMessage(
						{
							name: "AkiOSOpenWindow",
							value: "techblog"
						},
						origin
					);
				}}
			>
				技術ブログ
			</AppIcon>
		</div>
	);
}
