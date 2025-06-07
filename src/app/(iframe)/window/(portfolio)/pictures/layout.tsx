import { SetAppId } from "@/components/iframe/SetAppId";
import type { PropsWithChildren } from "react";

export const dynamic = "error";

export default function ({ children }: PropsWithChildren) {
	return (
		<>
			<SetAppId id="portfolio/pictures" />
			{children}
		</>
	);
}
