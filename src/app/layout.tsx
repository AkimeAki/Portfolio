import { KumaRegistry } from "@kuma-ui/next-plugin/registry";
import "@/global.scss";
import CheckUserAgent from "@/components/CheckUserAgent";

export const runtime = "edge";

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props) {
	return (
		<html lang="ja">
			<body data-script="invalid">
				<script
					dangerouslySetInnerHTML={{
						__html: 'document.body.dataset.script="valid";'
					}}
				/>
				<KumaRegistry>
					<>
						<CheckUserAgent />
						{children}
					</>
				</KumaRegistry>
			</body>
		</html>
	);
}
