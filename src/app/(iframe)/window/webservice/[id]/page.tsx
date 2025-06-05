import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { webServiceData } from "@/data/webservice";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	return Object.keys(webServiceData).map((id) => ({
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
				back={{ url: "/window/webservice", text: "作ったウェブサービス一覧に戻る" }}
				data={webServiceData[id]}
				linkText={webServiceData[id].url !== undefined ? "アクセスする" : "アクセスできません😭"}
			/>
		</>
	);
}
