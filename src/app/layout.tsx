import { KumaRegistry } from "@kuma-ui/next-plugin/registry";
import "@/global.scss";

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props) {
	return (
		<html lang="ja">
			<body>
				<KumaRegistry>{children}</KumaRegistry>
			</body>
		</html>
	);
}
