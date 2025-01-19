import Image from "next/image";
import { css } from "@kuma-ui/core";
import ColorLabel from "@/components/ColorLabel";
import { Portfolio } from "@/components/os/app/Portfolio";
import { toolColorList } from "@/color-label";

export default function ({
	title,
	children,
	href,
	buttonTitle = "アクセスする",
	iconSrc,
	inCharge,
	tools
}: React.PropsWithChildren<Portfolio>) {
	return (
		<div
			className={css`
				display: flex;
				justify-content: space-between;
				flex-direction: column;
				width: 100%;
				gap: 20px;

				* {
					font-family: "BestTenCRT", "ArkPixel12ZHCN", "FusionPixel10KO";
				}
			`}
		>
			<div
				className={css`
					display: flex;
					gap: 20px;
				`}
			>
				<Image
					src={iconSrc ?? "/no-image.png"}
					width={80}
					height={80}
					alt={title}
					className={css`
						object-fit: contain;
					`}
				/>
				<div
					className={css`
						flex: 1;
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						gap: 15px;
					`}
				>
					<h3
						className={css`
							font-size: 20px;
							position: relative;
						`}
					>
						{title}
					</h3>
					{href !== undefined && (
						<a
							href={href}
							target="_blank"
							className={css`
								display: table;
								padding: 7px 10px 10px;
								color: white;
								background-color: #f64357;
								text-decoration: none;
								font-size: 14px;
								user-select: none;

								body[data-os="android"] & {
									padding: 7px 10px 8px;
								}
							`}
						>
							{buttonTitle}
						</a>
					)}
				</div>
			</div>
			<div
				className={css`
					word-break: break-all;

					@layer base {
						p {
							font-size: 16px;
							* {
								font-size: 16px;
							}
						}
					}

					p:not(:last-child) {
						margin-bottom: 10px;
					}
				`}
			>
				{inCharge !== "" && <p>担当：{inCharge}</p>}
				{tools !== undefined && (
					<p
						className={css`
							display: inline-flex;
							flex-wrap: wrap;
							align-items: baseline;
							gap: 5px;
						`}
					>
						<span>使用ツールなど：</span>
						{tools.map((tool) => {
							return (
								<ColorLabel
									bgColor={toolColorList[tool].bgColor}
									color={toolColorList[tool].color}
									key={tool}
								>
									{toolColorList[tool].name}
								</ColorLabel>
							);
						})}
					</p>
				)}
				{children}
			</div>
		</div>
	);
}
