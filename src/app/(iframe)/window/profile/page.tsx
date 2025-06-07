import { SetAppId } from "@/components/iframe/SetAppId";
import { ProfileContent } from "./_ProfileContent";
import { InlineStyle } from "@/components/commons/InlineStyle";

export const dynamic = "error";

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
			<SetAppId id="profile" />
			<ProfileContent />
		</>
	);
}
