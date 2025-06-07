import { SetAppId } from "@/components/iframe/SetAppId";
import { AIBlogContent } from "./_AIBlogContent";

export const dynamic = "error";

export default function () {
	return (
		<>
			<SetAppId id="aiblog" />
			<AIBlogContent />
		</>
	);
}
