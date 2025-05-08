import { IntroContent } from "./_IntroContent";

export const dynamic = "force-static";

export default function () {
	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: /* css */ `
						body {
							background-color: #f0eef4;
						}
					`
				}}
			/>
			<IntroContent />
		</>
	);
}
