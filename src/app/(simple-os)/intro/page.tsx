import { appList } from "@/libs/app-select";
import { metaHead } from "@/libs/meta";
import { Metadata } from "next";
import { IntroContent } from "./_IntroContent";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: appList["intro"].pageTitle,
	isFullTitle: true,
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
