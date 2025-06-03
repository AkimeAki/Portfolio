import { SetAppId } from "@/components/iframe/SetAppId";
import { css } from "@kuma-ui/core";

export const dynamic = "force-static";

export default function () {
	return (
		<>
			<iframe
				title="Misskey.ioのタイムライン"
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
			<SetAppId id="misskeyio" />
			<script defer src="https://misskey.io/embed.js" />
		</>
	);
}
