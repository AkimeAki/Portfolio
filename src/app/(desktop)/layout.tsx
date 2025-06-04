import AkiSignal from "@/components/desktop/background/AkiSignal";
import { AppArea } from "@/components/desktop/AppArea";
import { CodeBackground } from "@/components/desktop/background/CodeBackground";
import ContextMenu from "@/components/ContextMenu";
import Loading from "@/components/desktop/Loading";
import SelectArea from "@/components/desktop/background/SelectArea";
import Taskbar from "@/components/desktop/taskbar/Taskbar";
import TwitchBackground from "@/components/desktop/background/TwitchBackground";
import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import type { Metadata } from "next";
import PixelWrapper from "@/components/desktop/background/PixelWrapper";
import NewVideo from "@/components/desktop/background/NewVideo";
import Galaxy from "@/components/desktop/background/Galaxy";
import { InlineStyle } from "@/components/commons/InlineStyle";

export const metadata: Metadata = metaHead({});

export default function ({ children }: React.PropsWithChildren) {
	return (
		<>
			<InlineStyle
				css={`
					html,
					body {
						overscroll-behavior-y: contain;
						overflow: hidden;

						* {
							overscroll-behavior-y: contain;
						}
					}

					body {
						touch-action: none;
						overscroll-behavior-y: none;
						background-color: #060303;
					}

					body {
						font-family: "BestTenCRT";
						font-size: 18px;
						color: #777777;
						font-variant-ligatures: none;
					}

					p {
						line-height: 1.6;
					}

					rt {
						text-align: center;
					}

					body[data-user-dragging="true"] {
						user-select: none !important;
					}

					body[data-user-dragging="true"] * {
						user-select: none !important;
					}
				`}
			/>
			<div
				className={css`
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				`}
			>
				<Loading />
				<ContextMenu />
				<div
					className={css`
						position: relative;
						width: 100%;
						height: 100%;
						overflow: hidden;
					`}
				>
					<div
						className={css`
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							background-image: radial-gradient(#555555, #000000);
						`}
					>
						<TwitchBackground />
						<AkiSignal />
						<Galaxy />
						<NewVideo />
						<CodeBackground />
						<SelectArea />
						<PixelWrapper />
						<AppArea />
						{children}
					</div>
					<Taskbar />
				</div>
			</div>
		</>
	);
}
