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
			<script
				async
				src="https://bst.heion.net/timeline.js"
				data-handle="aki.wtf"
				data-theme="light"
				data-width="420"
				data-height="500"
				data-lang="ja"
			/>
		</div>
	);
};
