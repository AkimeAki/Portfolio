import { SetAppId } from "@/components/iframe/SetAppId";
import { InlineStyle } from "@/components/commons/InlineStyle";
import { WebService } from "./_WebService";

export const dynamic = "force-static";

export default function () {
	return (
		<>
			<WebService />
		</>
	);
}
