import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { getPortfolio } from "@/libs/nilto";

export const dynamic = "error";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	const minecraftResourcePacksData = await getPortfolio({ type: "minecraft_resourcepack" });

	return minecraftResourcePacksData.map((data) => ({
		id: String(data._id)
	}));
}

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ({ params }: Props) {
	const { id } = await params;
	const minecraftResourcePackData = (await getPortfolio({ type: "minecraft_resourcepack", id: id }))[0];

	return <PortfolioPage backUrl="/window/minecraft_recouepacks" data={minecraftResourcePackData} />;
}
