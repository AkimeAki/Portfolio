import { BackArrow } from "@/components/commons/BackArrow";
import { PortfolioBadge } from "@/components/iframe/PortfolioBadge";
import { vscodeExtensionData } from "@/data/vscode";
import { cx } from "@/libs/merge-kuma";
import { css } from "@kuma-ui/core";
import Link from "next/link";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ id: string }[]> {
	return Object.keys(vscodeExtensionData).map((id) => ({
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
			<BackArrow href="/window/vscode" text="作ったVSCode 拡張機能一覧に戻る" />
			<div
				className={css`
					margin-top: 30px;
					display: flex;
					flex-direction: column;
					gap: 50px;
				`}
			>
				<h2
					className={css`
						text-align: center;
						font-size: 30px;
						font-weight: bold;
						color: #edf8af;
					`}
				>
					{vscodeExtensionData[id].title}
				</h2>
				{vscodeExtensionData[id].type === "work" && (
					<div
						className={css`
							display: flex;
							justify-content: center;
						`}
					>
						<PortfolioBadge type="work" />
					</div>
				)}
				<p
					className={css`
						text-align: center;
					`}
				>
					{vscodeExtensionData[id].detail}
				</p>
				<Link
					key={id}
					href={vscodeExtensionData[id].url}
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
						Chromeウェブストアで見る
					</span>
					<img
						src={vscodeExtensionData[id].thumbnailFile}
						alt={vscodeExtensionData[id].title}
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
						margin: 0 auto;
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
					{vscodeExtensionData[id].credit.map((credit, index) => {
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
				{vscodeExtensionData[id].client !== undefined && (
					<div
						className={css`
							display: flex;
							flex-direction: column;
							gap: 15px;
							max-width: 560px;
							width: 100%;
							margin: 0 auto;
						`}
					>
						<span
							className={css`
								color: #edf8af;
								margin-bottom: 10px;
							`}
						>
							クライアント
						</span>
						<span
							className={css`
								color: #d8d8d8;
							`}
						>
							<a
								href={vscodeExtensionData[id].client.url}
								target="_blank"
								rel="noreferrer"
								className={cx(
									vscodeExtensionData[id].client.url !== undefined &&
										css`
											&:hover {
												text-decoration: underline;
											}
										`
								)}
							>
								{vscodeExtensionData[id].client.name}
							</a>
						</span>
					</div>
				)}
			</div>
		</>
	);
}
