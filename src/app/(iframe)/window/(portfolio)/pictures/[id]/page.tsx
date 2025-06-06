import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { getPortfolio } from "@/libs/nilto";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	const picturesData = await getPortfolio({ type: "illust" });

	return picturesData.map((data) => ({
		id: String(data._id)
	}));
}

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ({ params }: Props) {
	const { id } = await params;
	const pictureData = (await getPortfolio({ type: "illust", id: id }))[0];

	return <PortfolioPage backUrl="/window/pictures" data={pictureData} linkText="Pixivで見る" />;
}
