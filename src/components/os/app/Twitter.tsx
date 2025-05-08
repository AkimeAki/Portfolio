"use client";

import { css } from "@kuma-ui/core";
import { useEffect } from "react";

export default () => {
	useEffect(() => {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		if ((window as any).twttr !== undefined && (window as any).twttr.widgets !== undefined) {
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
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
			<a
				className={[
					"twitter-timeline",
					css`
						text-decoration: none;
						width: 100%;
						height: 100%;
					`
				].join(" ")}
				href="https://twitter.com/Akime_Aki?ref_src=twsrc%5Etfw"
				data-chrome="noheader nofooter"
				data-theme="dark"
			>
				読込中...
			</a>
			<script async src="https://platform.twitter.com/widgets.js" />
		</div>
	);
};
