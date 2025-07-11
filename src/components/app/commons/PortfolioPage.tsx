"use client";

import { ModelView } from "@/components/commons/ModelView";
import { BackArrow } from "@/components/commons/BackArrow";
import { css, cx } from "@kuma-ui/core";
import { ColorLabel } from "@/components/commons/ColorLabel";
import { DateTime } from "luxon";
import type { PortfolioSchema } from "@/libs/nilto";
import { PortfolioBadge } from "@/components/app/commons/PortfolioBadge";

interface Props {
	data: PortfolioSchema;
	linkText?: string;
	backFunction?: () => void;
}

export function PortfolioPage({ data, linkText, backFunction }: Props) {
	return (
		<>
			<div
				className={css`
					width: 100%;
					height: 100%;
					overflow-y: scroll;
					container-type: inline-size;
				`}
			>
				<div
					className={css`
						max-width: 1100px;
						margin: 0 auto;
						width: 100%;
						padding: 30px;

						@media (max-width: 720px) {
							padding: 10px;
						}
					`}
				>
					{backFunction !== undefined && <BackArrow onClick={backFunction} text="戻る" />}
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
								color: #edf8af;
								font-family: "BestTenCRT";
							`}
						>
							{data.title}
						</h2>
						{(data.type === "work" || data.is_fanmade) && (
							<div
								className={css`
									display: flex;
									justify-content: center;
									align-items: center;
									gap: 5px;
								`}
							>
								{data.type === "work" && <PortfolioBadge type="work" />}
								{data.is_fanmade && <PortfolioBadge type="fanmade" />}
							</div>
						)}
						<div
							className={css`
								p {
									text-align: center;
									white-space: pre-line;
									line-height: 1.4;

									&:not(:last-child) {
										margin-bottom: 10px;
									}
								}
							`}
							dangerouslySetInnerHTML={{ __html: data.detail }}
						/>
						{data.url !== "" && (
							<div
								className={css`
									text-align: center;
								`}
							>
								<a
									href={data.url}
									target="_blank"
									rel="noreferrer"
									className={css`
										font-family: "BestTenCRT";
										display: inline-block;
										padding: 5px 10px 10px 13px;
										background-color: #ab2944;
										cursor: hover;
										color: white;

										body[data-os="android"] & {
											padding-bottom: 8px;
										}

										body[data-browser="safari"] & {
											padding-bottom: 8px;
										}

										&:hover {
											background-color: #bb4b61;
										}
									`}
								>
									{(() => {
										const url = new URL(data.url);
										if (url.hostname === "www.pixiv.net") {
											return "pixivで見る";
										}

										if (linkText === "" || linkText === undefined) {
											return "アクセスする";
										}

										return linkText;
									})()}
								</a>
							</div>
						)}
						<div
							className={css`
								display: flex;
								flex-direction: row;
								gap: 50px;

								@container (max-width: 960px) {
									flex-direction: column;
								}
							`}
						>
							<div
								className={css`
									display: flex;
									flex-direction: column;
									gap: 50px;
									width: 50%;

									@container (max-width: 960px) {
										width: 100%;
									}
								`}
							>
								{data.url?.startsWith("https://www.youtube.com") ? (
									<div
										className={css`
											text-align: center;
										`}
									>
										<iframe
											src={data.url}
											title={data.title}
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
								) : (
									data["3dmodel"] === undefined && (
										<div
											className={css`
												position: relative;
												display: block;
												border: none;
												width: 100%;
												max-width: 560px;
												margin: 0 auto;
											`}
										>
											<img
												src={
													data.eyecatch !== undefined
														? `${data.eyecatch?.url}?width=560&format=webp`
														: "/portfolio/no-image.png"
												}
												alt={data.title}
												className={css`
													width: 100%;
													height: 100%;
													object-fit: cover;
													vertical-align: bottom;
													transition-duration: 200ms;
													transition-property: filter;
													user-select: none;
													pointer-events: none;
												`}
											/>
										</div>
									)
								)}
								{data["3dmodel"] !== undefined && (
									<>
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
											<ModelView
												modelPath={data["3dmodel"].url.replace(
													"https://cms-assets.nilto.com/spaces/464620327/media/",
													"/proxy/nilto_media/"
												)}
											/>
										</div>
									</>
								)}
							</div>
							<div
								className={css`
									display: flex;
									flex-direction: column;
									gap: 50px;
									width: 50%;

									@container (max-width: 960px) {
										width: 100%;
									}
								`}
							>
								{data.created_at !== "" && (
									<div
										className={css`
											display: flex;
											flex-direction: column;
											gap: 10px;
											max-width: 560px;
											width: 100%;
											margin: 0 auto;
										`}
									>
										<h3
											className={css`
												color: #edf8af;
												margin-bottom: 10px;
												font-family: "BestTenCRT";
											`}
										>
											制作日
										</h3>
										<span
											className={cx(css`
												color: #d8d8d8;
											`)}
										>
											{`${DateTime.fromISO(data.created_at).year}年${DateTime.fromISO(data.created_at).month}月${DateTime.fromISO(data.created_at).day}日`}
										</span>
									</div>
								)}
								{data.credits.length !== 0 && (
									<div
										className={css`
											display: flex;
											flex-direction: column;
											gap: 10px;
											max-width: 560px;
											width: 100%;
											margin: 0 auto;
										`}
									>
										<h3
											className={css`
												color: #edf8af;
												margin-bottom: 10px;
												font-family: "BestTenCRT";
											`}
										>
											クレジット
										</h3>
										{data.credits.map((credit, index) => {
											return (
												<span
													key={index}
													className={cx(
														css`
															display: flex;
															align-items: center;
															color: #d8d8d8;
															gap: 10px;
														`,
														credit.person.name === "彩季" &&
															css`
																color: #ffffff;
															`
													)}
												>
													<span>{credit.credit_position}:</span>
													{credit.person.url === "" ? (
														<span>{credit.person.name}</span>
													) : (
														<a
															href={credit.person.url}
															target="_blank"
															rel="noreferrer"
															className={cx(
																css`
																	display: flex;
																	gap: 5px;
																	align-items: center;
																	position: relative;
																`,
																credit.person.url !== "" &&
																	css`
																		&:hover {
																			&:after {
																				content: "";
																				width: 100%;
																				height: 1px;
																				background-color: currentColor;
																				display: block;
																				position: absolute;
																				bottom: 0;
																				left: 0;
																			}
																		}
																	`
															)}
														>
															<span>{credit.person.name}</span>
															{(() => {
																const url = new URL(credit.person.url);
																if (
																	url.hostname === "x.com" ||
																	url.hostname === "twitter.com"
																) {
																	return (
																		<img
																			src="/portfolio/link/x.png"
																			alt="X"
																			className={css`
																				background-color: #000000;
																				border-radius: 50%;
																				width: 20px;
																				aspect-ratio: 1/1;
																				transform: translateY(1px);
																				user-select: none;
																			`}
																		/>
																	);
																}

																return null;
															})()}
														</a>
													)}
												</span>
											);
										})}
									</div>
								)}
								{data.client !== undefined && (
									<div
										className={css`
											display: flex;
											flex-direction: column;
											gap: 10px;
											max-width: 560px;
											width: 100%;
											margin: 0 auto;
										`}
									>
										<h3
											className={css`
												color: #edf8af;
												margin-bottom: 10px;
												font-family: "BestTenCRT";
											`}
										>
											依頼者
										</h3>
										<span
											className={css`
												color: #d8d8d8;
											`}
										>
											<a
												href={data.client.url}
												target="_blank"
												rel="noreferrer"
												className={cx(
													data.client.url !== undefined &&
														css`
															&:hover {
																text-decoration: underline;
															}
														`
												)}
											>
												{data.client.name}
											</a>
										</span>
									</div>
								)}
								{data.tools.length !== 0 && (
									<div
										className={css`
											display: flex;
											flex-direction: column;
											gap: 10px;
											max-width: 560px;
											width: 100%;
											margin: 0 auto;
										`}
									>
										<h3
											className={css`
												color: #edf8af;
												margin-bottom: 10px;
												font-family: "BestTenCRT";
											`}
										>
											使用ツール
										</h3>
										<div
											className={css`
												display: flex;
												gap: 5px;
											`}
										>
											{data.tools.map((tool) => {
												return (
													<ColorLabel
														bgColor={tool.tool.bg_color}
														color={tool.tool.text_color}
														key={tool.tool._id}
													>
														{tool.tool.name}
													</ColorLabel>
												);
											})}
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
