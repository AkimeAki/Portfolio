import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { getPortfolio } from "@/libs/nilto";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	const vscodeExtensionData = await getPortfolio({ type: "vscode_extension" });

	return vscodeExtensionData.map((data) => ({
		id: String(data._id)
	}));
}

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ({ params }: Props) {
	const { id } = await params;
	const vscodeExtensionData = (await getPortfolio({ type: "vscode_extension", id: id }))[0];

	return <PortfolioPage backUrl="/window/vscode" data={vscodeExtensionData} linkText="Marketplaceで見る" />;
}
