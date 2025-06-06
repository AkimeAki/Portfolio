import { InlineStyle } from "@/components/commons/InlineStyle";
import { SetAppId } from "@/components/iframe/SetAppId";
import { css } from "@kuma-ui/core";
import type { PropsWithChildren } from "react";

export const dynamic = "force-static";

export default function ({ children }: PropsWithChildren) {
	return (
		<>
			<SetAppId id="portfolio/models" />
			{children}
		</>
	);
}
