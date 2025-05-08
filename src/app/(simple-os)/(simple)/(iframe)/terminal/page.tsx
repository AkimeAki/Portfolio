import { TerminalContent } from "./_TerminalContent";

export const dynamic = "force-static";

export default function () {
	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: /* css */ `
						body {
							background-color: #0c0c0c;
						}
					`
				}}
			/>
			<TerminalContent />
		</>
	);
}
