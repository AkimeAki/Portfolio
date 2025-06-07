import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { getPortfolio } from "@/libs/nilto";

export const dynamic = "error";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	const discordBotData = await getPortfolio({ type: "discord_bot" });

	return discordBotData.map((data) => ({
		id: String(data._id)
	}));
}

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ({ params }: Props) {
	const { id } = await params;
	const discordBotData = (await getPortfolio({ type: "discord_bot", id: id }))[0];

	return <PortfolioPage backUrl="/window/discord" data={discordBotData} />;
}
