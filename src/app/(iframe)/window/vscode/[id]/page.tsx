import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { vscodeExtensionData } from "@/data/vscode";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	return Object.keys(vscodeExtensionData).map((id) => ({
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
				back={{ url: "/window/vscode", text: "作ったVSCode 拡張機能一覧に戻る" }}
				data={vscodeExtensionData[id]}
				linkText={"Marketplaceで見る"}
			/>
		</>
	);
}
