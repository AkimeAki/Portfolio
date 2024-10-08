"use client";

import { css } from "@kuma-ui/core";
import { useEffect } from "react";

export default () => {
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		if ((window as any).twttr !== undefined && (window as any).twttr.widgets !== undefined) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(window as any).twttr.widgets.load();
		}
	}, []);

	return (
		<div
			className={css`
				width: 100%;
				height: 100%;
			`}
		>
			<iframe
				src="https://misskey.io/embed/user-timeline/9bjv3n9376"
				data-misskey-embed-id="v1_minecraft_is_god"
				loading="lazy"
				referrerPolicy="strict-origin-when-cross-origin"
				className={css`
					border: none;
					width: 100%;
					max-width: 500px;
					height: 300px;
					color-scheme: light dark;
				`}
			/>
			<script defer src="https://misskey.io/embed.js" />
		</div>
	);
};
