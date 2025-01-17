import Image from "next/image";
import { css } from "@kuma-ui/core";

interface Props {
	title: string;
	href?: string;
	buttonTitle?: string;
	iconSrc?: string;
}

export default function ({
	title,
	children,
	href,
	buttonTitle = "アクセスする",
	iconSrc
}: React.PropsWithChildren<Props>) {
	return (
		<div
			className={css`
				display: flex;
				justify-content: space-between;
				flex-direction: column;
				width: 100%;
				gap: 20px;
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
						gap: 10px;
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
								padding: 5px 10px 7px 10px;
								color: white;
								background-color: #f64357;
								text-decoration: none;
								font-size: 14px;
							`}
						>
							{buttonTitle}
						</a>
					)}
				</div>
			</div>
			<div
				className={css`
					max-width: 500px;
					width: 100%;
					word-break: break-all;
					p {
						font-size: 16px;
					}

					p:not(:last-child) {
						margin-bottom: 10px;
					}
				`}
			>
				{children}
			</div>
		</div>
	);
}
