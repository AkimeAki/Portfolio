import { BackArrow } from "@/components/commons/BackArrow";
import { webServiceData } from "@/data/webservice";
import { cx } from "@/libs/merge-kuma";
import { css } from "@kuma-ui/core";
import Link from "next/link";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	return Object.keys(webServiceData).map((id) => ({
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
			<BackArrow href="/window/webservice" text="作ったウェブサービス一覧に戻る" />
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
						color: #edf8af;
					`}
				>
					{webServiceData[id].title}
				</h2>
				<p
					className={css`
						margin-bottom: 50px;
						text-align: center;
					`}
				>
					{webServiceData[id].detail}
				</p>
				<Link
					key={id}
					href={webServiceData[id].url}
					target="_blank"
					className={css`
						position: relative;
						display: block;
						border: none;
						width: 100%;
						max-width: 560px;
						margin: 0 auto;

						&:hover {
							img {
								filter: brightness(0.5);
							}

							span {
								opacity: 1;
							}
						}
					`}
				>
					<span
						className={css`
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
							opacity: 0;
							user-select: none;
							pointer-events: none;
							width: 100%;
							font-weight: bold;
							text-align: center;
							font-size: 18px;
							color: white;
							transition-duration: 200ms;
							transition-property: opacity;
							z-index: 1;
						`}
					>
						アクセスする
					</span>
					<img
						src={webServiceData[id].thumbnailFile}
						alt={webServiceData[id].title}
						className={css`
							width: 100%;
							height: 100%;
							object-fit: cover;
							vertical-align: bottom;
							transition-duration: 200ms;
							transition-property: filter;
						`}
					/>
				</Link>
				<div
					className={css`
						display: flex;
						flex-direction: column;
						gap: 15px;
						max-width: 560px;
						width: 100%;
						margin: 50px auto;
					`}
				>
					<span
						className={css`
							color: #edf8af;
							margin-bottom: 10px;
						`}
					>
						クレジット
					</span>
					{webServiceData[id].credit.map((credit, index) => {
						return (
							<span
								key={index}
								className={cx(
									css`
										color: #d8d8d8;
									`,
									credit.name === "彩季" &&
										css`
											color: #ffffff;
										`
								)}
							>
								<span>{credit.position}: </span>
								<a
									href={credit.url}
									target="_blank"
									rel="noreferrer"
									className={cx(
										credit.url !== undefined &&
											css`
												&:hover {
													text-decoration: underline;
												}
											`
									)}
								>
									{credit.name}
								</a>
							</span>
						);
					})}
				</div>
			</div>
		</>
	);
}
