import type { PropsWithChildren } from "react";

export const dynamic = "error";

export default function ({ children }: PropsWithChildren) {
	return <>{children}</>;
}
