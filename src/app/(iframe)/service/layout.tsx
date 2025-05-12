import type { PropsWithChildren } from "react";

export const dynamic = "force-static";

export default function ({ children }: PropsWithChildren) {
	return <>{children}</>;
}
