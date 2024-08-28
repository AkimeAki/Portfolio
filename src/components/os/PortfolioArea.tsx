import { css } from "@kuma-ui/core";

interface Props {
	title: string;
	description: string;
	imgSrc: string;
	href?: string;
}

export default function ({ title, description, imgSrc, href }: Props) {
	return (
		<div
			className={css`
				display: flex;
				justify-content: space-between;
				min-width: 100%;
				gap: 20px;
			`}
		>
			<div
				className={css`
					min-width: 300px;
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
						font-weight: bold;
					`}
				>
					{title}
				</h3>
				<p>{description}</p>
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
						アクセスする
					</a>
				)}
			</div>
			<div
				className={css`
					min-width: 500px;
					width: 100%;
					max-width: 700px;
				`}
			>
				<img
					className={css`
						width: 100%;
					`}
					src={imgSrc}
				/>
			</div>
		</div>
	);
}
