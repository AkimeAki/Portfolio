import { metaHead } from "@/libs/meta";
import { Metadata } from "next";
import { TerminalContent } from "./_TerminalContent";

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
							background-color: #0c0c0c;
						}

						body[data-iframe="true"] {
							display: block;
						}
					`
				}}
			/>
			<TerminalContent />
		</>
	);
}
