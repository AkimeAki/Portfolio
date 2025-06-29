import { metaHead, pageTitle } from "@/libs/meta";
import type { Metadata } from "next";
import { css } from "@kuma-ui/core";
import { InlineStyle } from "@/components/commons/InlineStyle";

export const dynamic = "error";
export const dynamicParams = false;

export const metadata: Metadata = metaHead({
	title: `ログイン ‹ ${pageTitle} — WordPress`,
	isFullTitle: true,
	description: "",
	noindex: true
});

export default function () {
	return (
		<>
			<InlineStyle
				css={`
					body {
						background-color: #f0f0f1;
					}
				`}
			/>
			<div
				className={css`
					width: 100%;
					height: 100%;
					padding-top: 200px;
				`}
			>
				<div
					className={css`
						background-color: #ffffff;
						width: 320px;
						height: 306px;
						display: flex;
						justify-content: center;
						align-items: center;
						margin: 0 auto 0;
						border: 1px solid #c3c4c7;
						box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
					`}
				>
					<p
						className={css`
							padding: 0 10px;
							text-align: center;
							line-height: 1.4;
						`}
					>
						( ㅎ ֊ㅎ )<br />
						<span
							className={css`
								font-size: 15px;
							`}
						>
							このサイトはWordPressではないんじゃ
						</span>
					</p>
				</div>
			</div>
		</>
	);
}
