import { metaHead } from "@/libs/meta";
import { Metadata } from "next";

export const metadata: Metadata = metaHead({});

export default function ({ children }: React.PropsWithChildren) {
	return <>{children}</>;
}
