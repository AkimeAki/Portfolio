import { SetAppId } from "@/components/iframe/SetAppId";
import { AIBlogContent } from "./_AIBlogContent";

export const dynamic = "error";
export const dynamicParams = false;

export default function () {
	return (
		<>
			<SetAppId id="aiblog" />
			<AIBlogContent />
		</>
	);
}
