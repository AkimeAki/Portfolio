import { metaHead } from "@/libs/meta";
import type { Metadata } from "next";
import { IntroContent } from "./_IntroContent";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	noindex: true
});

export default function () {
	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: /* css */ `
						body {
							display: none;
							background-color: #f0eef4;
						}

						body[data-iframe="true"] {
							display: block;
						}
					`
				}}
			/>
			<IntroContent />
		</>
	);
}
