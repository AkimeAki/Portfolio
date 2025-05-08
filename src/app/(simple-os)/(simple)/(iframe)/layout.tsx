import { metaHead } from "@/libs/meta";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	noindex: true
});

export default function ({ children }: React.PropsWithChildren) {
	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: /* css */ `
						body {
							display: none;
						}

						body[data-iframe="true"] {
							display: block;
						}
					`
				}}
			/>
			{children}
		</>
	);
}
