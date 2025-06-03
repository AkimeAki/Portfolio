import { css } from "@kuma-ui/core";

export const dynamic = "force-static";

export default function () {
	return (
		<>
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
		</>
	);
}
