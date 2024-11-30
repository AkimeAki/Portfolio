import { seoHead } from "@/lib/seo";
import { css } from "@kuma-ui/core";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = seoHead({});

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props) {
	return (
		<>
			<div>{children}</div>
		</>
	);
}
