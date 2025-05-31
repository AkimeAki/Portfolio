import { metaHead } from "@/libs/meta";
import type { Metadata } from "next";

export const metadata: Metadata = metaHead({
	noindex: true
});

export default function ({ children }: React.PropsWithChildren) {
	return <>{children}</>;
}
