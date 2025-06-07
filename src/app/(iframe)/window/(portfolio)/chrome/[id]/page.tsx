import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { getPortfolio } from "@/libs/nilto";

export const dynamic = "error";

export async function generateStaticParams() {
	const chromeExtensionData = await getPortfolio({ type: "chrome_extension" });

	return chromeExtensionData.map((data) => ({
		id: String(data._id)
	}));
}

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ({ params }: Props) {
	const { id } = await params;
	const chromeExtensionData = (await getPortfolio({ type: "chrome_extension", id: id }))[0];

	return <PortfolioPage backUrl="/window/chrome" data={chromeExtensionData} linkText="Chromeウェブストアで見る" />;
}
