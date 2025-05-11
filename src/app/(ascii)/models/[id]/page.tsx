import { BackArrow } from "@/components/atoms/BackArrow";
import { appData } from "@/data/app";
import { modelsData } from "@/data/models";
import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import type { Metadata } from "next";
import { ModelView } from "./_ModelView";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	return Object.keys(modelsData).map((id) => ({
		id: id
	}));
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	return metaHead({
		title: `${modelsData[params.id].title} - ${appData.models.pageTitle}`,
		isFullTitle: true,
		description: `彩季が作成した3Dモデル「${modelsData[params.id].title}」です。${modelsData[params.id].detail}`,
		canonicalPath: `/models/${params.id}`
	});
};

interface Props {
	params: {
		id: string;
	};
}

export default function ({ params }: Props) {
	return (
		<>
			<BackArrow href="/📦" text="作成した3Dモデル一覧に戻る" />
			<div
				className={css`
					margin-top: 30px;
				`}
			>
				<h2
					className={css`
						margin-bottom: 30px;
						text-align: center;
						font-size: 30px;
						font-weight: bold;
					`}
				>
					{modelsData[params.id].title}
				</h2>
				<p
					className={css`
						margin-bottom: 50px;
						text-align: center;
					`}
				>
					{modelsData[params.id].detail}
				</p>
				<div
					className={css`
						margin-bottom: 50px;
						text-align: left;
						line-height: 1.3;
					`}
				>
					<p>回転：左クリック or 1本指でタッチ</p>
					<p>移動：右クリック or 2本指でタッチ</p>
					<p>拡大縮小：マウスホイール or 2本指でつまんで移動</p>
				</div>
				<div
					className={css`
						text-align: center;
					`}
				>
					<ModelView modelId={params.id} />
				</div>
			</div>
		</>
	);
}
