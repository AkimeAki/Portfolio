import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { moviesData } from "@/data/movies";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	return Object.keys(moviesData).map((id) => ({
		id: id
	}));
}

interface Props {
	params: Promise<{ id: string }>;
}

export default async function ({ params }: Props) {
	const { id } = await params;

	return (
		<>
			<PortfolioPage back={{ url: "/window/movies", text: "作った映像一覧に戻る" }} data={moviesData[id]} />
		</>
	);
}
