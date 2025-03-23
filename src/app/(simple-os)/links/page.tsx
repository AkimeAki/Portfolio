import ArrowLink from "@/components/atoms/ArrowLink";
import { SetEmojiPath } from "@/components/atoms/EmojiPath";
import { linkList } from "@/data/links";
import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = metaHead({
	title: "各種リンク一覧",
	description: "彩季です。"
});

export default function () {
	return (
		<>
			<SetEmojiPath path="links" />
			<div
				className={css`
					display: flex;
					flex-direction: column;
					gap: 15px;
				`}
			>
				{Object.keys(linkList).map((link) => (
					<div
						key={link}
						className={css`
							display: flex;
							align-items: center;
							gap: 10px;
						`}
					>
						<div
							className={css`
								position: relative;
								border-radius: 50%;
								overflow: hidden;
								width: 45px;
								height: 45px;
								background-color: #f44458;
								border: 2px solid #75182c;
							`}
						>
							<img
								src={`/icon/${link}.webp`}
								width={64}
								height={64}
								className={css`
									position: absolute;
									top: 0;
									left: 0;
									width: 100%;
									height: 100%;
								`}
							/>
						</div>
						<ArrowLink
							href={linkList[link].url}
							target="_blank"
							className={css`
								font-size: 16px;
							`}
						>
							{linkList[link].name}
						</ArrowLink>
					</div>
				))}
			</div>
		</>
	);
}
