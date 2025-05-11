import { BackArrow } from "@/components/atoms/BackArrow";
import { appData } from "@/data/app";
import { moviesData } from "@/data/movies";
import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	return Object.keys(moviesData).map((id) => ({
		id: id
	}));
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	return metaHead({
		title: `${moviesData[params.id].title} - ${appData.movies.pageTitle}`,
		isFullTitle: true,
		description: `彩季が作成した動画「${moviesData[params.id].title}」です。${moviesData[params.id].detail}`
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
			<BackArrow href="/🎞" text="作成したムービー一覧に戻る" />
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
					{moviesData[params.id].title}
				</h2>
				<p
					className={css`
						margin-bottom: 50px;
						text-align: center;
					`}
				>
					{moviesData[params.id].detail}
				</p>
				<div
					className={css`
						text-align: center;
					`}
				>
					<iframe
						src={moviesData[params.id].url}
						title={moviesData[params.id].title}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						className={css`
							aspect-ratio: 16/9;
							border: none;
							width: 100%;
							max-width: 560px;
						`}
					/>
				</div>
			</div>
		</>
	);
}
