import { SetAppId } from "@/components/iframe/SetAppId";
import type { PropsWithChildren } from "react";

export const dynamic = "error";
export const dynamicParams = false;

export default function ({ children }: PropsWithChildren) {
	return (
		<>
			<SetAppId id="portfolio/models" />
			{children}
		</>
	);
}
