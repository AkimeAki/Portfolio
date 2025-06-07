import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { getPortfolio } from "@/libs/nilto";

export const dynamic = "error";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	const webServiceData = await getPortfolio({ type: "webservice" });

	return webServiceData.map((data) => ({
		id: String(data._id)
	}));
}

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ({ params }: Props) {
	const { id } = await params;
	const webServiceData = (await getPortfolio({ type: "webservice", id: id }))[0];

	return (
		<PortfolioPage
			backUrl="/window/webservices"
			data={webServiceData}
			linkText={webServiceData.url !== "" ? "アクセスする" : "アクセスできません😭"}
		/>
	);
}
