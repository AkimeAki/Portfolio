import { SetAppId } from "@/components/iframe/SetAppId";
import type { PropsWithChildren } from "react";

export const dynamic = "force-static";

export default function ({ children }: PropsWithChildren) {
	return (
		<>
			<SetAppId id="portfolio/vscode" />
			{children}
		</>
	);
}
