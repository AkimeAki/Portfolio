import { BackArrow } from "@/components/commons/BackArrow";
import { moviesData } from "@/data/movies";
import { css } from "@kuma-ui/core";

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
			<BackArrow href="/window/movies" text="作ったムービー一覧に戻る" />
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
					{moviesData[id].title}
				</h2>
				<p
					className={css`
						margin-bottom: 50px;
						text-align: center;
					`}
				>
					{moviesData[id].detail}
				</p>
				<div
					className={css`
						text-align: center;
					`}
				>
					<iframe
						src={moviesData[id].url}
						title={moviesData[id].title}
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
