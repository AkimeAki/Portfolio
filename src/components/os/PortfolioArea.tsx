import { css } from "@kuma-ui/core";

interface Props {
	title: string;
	description: React.ReactNode;
	children: React.ReactNode;
	href?: string;
	buttonTitle?: string;
}

export default function ({ title, description, children, href, buttonTitle = "アクセスする" }: Props) {
	return (
		<div
			className={css`
				display: flex;
				justify-content: space-between;
				width: 100%;
				gap: 20px;

				@container (max-width: 900px) {
					flex-direction: column;
				}
			`}
		>
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
					`}
				>
					{title}
				</h3>
				<div
					className={css`
						word-break: break-all;
						p:not(:last-child) {
							margin-bottom: 10px;
						}
					`}
				>
					{description}
				</div>
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
			<div
				className={css`
					max-width: 500px;
					width: 100%;
				`}
			>
				{children}
			</div>
		</div>
	);
}
