import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { getPortfolio } from "@/libs/nilto";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	const moviesData = await getPortfolio({ type: "movie" });

	return moviesData.map((data) => ({
		id: String(data._id)
	}));
}

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ({ params }: Props) {
	const { id } = await params;
	const movieData = (await getPortfolio({ type: "movie", id: id }))[0];

	return <PortfolioPage backUrl="/window/movies" data={movieData} />;
}
