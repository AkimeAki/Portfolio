import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { picturesData } from "@/data/pictures";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	return Object.keys(picturesData).map((id) => ({
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
			<PortfolioPage
				back={{ url: "/window/pictures", text: "描いたイラスト一覧に戻る" }}
				data={picturesData[id]}
				linkText={"Pixivで見る"}
			/>
		</>
	);
}
