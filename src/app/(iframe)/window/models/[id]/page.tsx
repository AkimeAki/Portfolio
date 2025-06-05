import { modelsData } from "@/data/models";
import { PortfolioPage } from "@/components/iframe/PortfolioPage";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	return Object.keys(modelsData).map((id) => ({
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
			<PortfolioPage back={{ url: "/window/models", text: "作った3Dモデル一覧に戻る" }} data={modelsData[id]} />
		</>
	);
}
