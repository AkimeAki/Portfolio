import { SetAppId } from "@/components/iframe/SetAppId";

export const dynamic = "force-static";

export default function () {
	return (
		<>
			<SetAppId id="bluesky" />
			<script
				async
				src="https://bst.heion.net/timeline.js"
				data-handle="aki.wtf"
				data-theme="light"
				data-width="420"
				data-height="500"
				data-lang="ja"
			/>
		</>
	);
}
