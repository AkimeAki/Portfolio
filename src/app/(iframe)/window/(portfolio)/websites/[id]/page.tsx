import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { getPortfolio } from "@/libs/nilto";

export const dynamic = "error";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	const webSiteData = await getPortfolio({ type: "website" });

	return webSiteData.map((data) => ({
		id: String(data._id)
	}));
}

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ({ params }: Props) {
	const { id } = await params;
	const webSiteData = (await getPortfolio({ type: "website", id: id }))[0];

	return (
		<PortfolioPage
			backUrl="/window/websites"
			data={webSiteData}
			linkText={webSiteData.url !== "" ? "アクセスする" : "アクセスできません😭"}
		/>
	);
}
