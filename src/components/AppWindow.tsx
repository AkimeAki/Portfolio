/** @jsxImportSource @emotion/react */

import { openAppList } from "@/atom";
import { css } from "@emotion/react";
import { useStore } from "@nanostores/react";

interface Props {
	title: string;
	children: React.ReactNode;
	id: string;
}

export default function ({ title, children, id }: Props) {
	const $openAppList = useStore(openAppList);

	return (
		<div
			css={css`
				position: absolute;
				top: calc(50% - 70px / 2);
				right: 20px;
				transform: translateY(-50%);
				width: 80%;
				height: calc(90% - 70px);
				border-left: 4px solid #edf8aa;
				border-right: 4px solid #edf8aa;
				border-bottom: 4px solid #edf8aa;
				display: ${$openAppList.includes(id) ? "block" : "none"};
				user-select: auto;
				pointer-events: auto;
				z-index: ${$openAppList.indexOf(id)};
			`}
		>
			<div
				css={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: #edf8aa;
					opacity: 0.8;
				`}
			/>
			<div
				css={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
				`}
			>
				<div
					css={css`
						position: relative;
						height: 50px;
						background-color: #edf8aa;
						display: flex;
						justify-content: space-between;
					`}
				>
					<div
						css={css`
							display: flex;
							height: 100%;
							align-items: center;
							margin-left: 10px;
						`}
					>
						<h2
							css={css`
								line-height: 1;
								font-weight: bold;
								font-size: 20px;
							`}
						>
							{title}
						</h2>
					</div>
					<div
						css={css`
							display: flex;
							height: 100%;
							gap: 10px;
							align-items: center;
							margin-right: 10px;
						`}
					>
						<div
							css={css`
								width: 25px;
								height: 25px;
								background-color: #c82746;
								cursor: pointer;
							`}
						/>
						<div
							css={css`
								width: 25px;
								height: 25px;
								background-color: #c82746;
								cursor: pointer;
							`}
						/>
						<div
							onClick={() => {
								openAppList.set(
									$openAppList.filter((item) => {
										return item !== id;
									})
								);
							}}
							css={css`
								width: 25px;
								height: 25px;
								background-color: #c82746;
								cursor: pointer;
							`}
						/>
					</div>
				</div>
				<div
					css={css`
						flex: 1;
					`}
				>
					{children}
				</div>
			</div>
		</div>
	);
}
