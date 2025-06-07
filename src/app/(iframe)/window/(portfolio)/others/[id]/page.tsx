import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { getPortfolio } from "@/libs/nilto";

export const dynamic = "error";
export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ id: string }[]> {
	const othersData = await getPortfolio({ type: "other" });

	return othersData.map((data) => ({
		id: String(data._id)
	}));
}

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ({ params }: Props) {
	const { id } = await params;
	const otherData = (await getPortfolio({ type: "other", id: id }))[0];

	return <PortfolioPage backUrl="/window/others" data={otherData} />;
}
