import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { getPortfolio } from "@/libs/nilto";

export const dynamic = "error";
export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ id: string }[]> {
	const modelsData = await getPortfolio({ type: "3dmodel" });

	return modelsData.map((data) => ({
		id: String(data._id)
	}));
}

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ({ params }: Props) {
	const { id } = await params;
	const modelData = (await getPortfolio({ type: "3dmodel", id: id }))[0];

	return <PortfolioPage backUrl="/window/models" data={modelData} />;
}
