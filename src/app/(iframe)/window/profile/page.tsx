import { ProfileContent } from "./_ProfileContent";
import { InlineStyle } from "@/components/atoms/InlineStyle";

export const dynamic = "force-static";

export default function () {
	return (
		<>
			<InlineStyle
				css={`
					body {
						max-width: 1100px;
						width: 100%;
						margin: 0 auto;
						padding: 30px;
						height: auto;
						color: #e9e9e9;

						@media (max-width: 500px) {
							padding: 15px;
						}
					}
				`}
			/>
			<ProfileContent />
		</>
	);
}
