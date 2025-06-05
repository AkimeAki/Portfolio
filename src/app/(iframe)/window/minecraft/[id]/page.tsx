import { PortfolioPage } from "@/components/iframe/PortfolioPage";
import { webSiteData } from "@/data/website";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	return Object.keys(webSiteData).map((id) => ({
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
				back={{ url: "/window/website", text: "作ったウェブサイト一覧に戻る" }}
				data={webSiteData[id]}
			/>
		</>
	);
}
