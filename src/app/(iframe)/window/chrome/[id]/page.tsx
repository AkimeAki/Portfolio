import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { chromeExtensionData } from "@/data/chrome";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	return Object.keys(chromeExtensionData).map((id) => ({
		id: id
	}));
}

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ({ params }: Props) {
	const { id } = await params;

	return (
		<>
			<PortfolioPage
				back={{ url: "/window/chrome", text: "作ったChrome 拡張機能一覧に戻る" }}
				data={chromeExtensionData[id]}
			/>
		</>
	);
}
