import AkiSignal from "@/components/background/AkiSignal";
import { CodeBackground } from "@/components/background/CodeBackground";
import ContextMenu from "@/components/ContextMenu";
import Loading from "@/components/desktop/Loading";
import SelectArea from "@/components/background/SelectArea";
import Taskbar from "@/components/taskbar/Taskbar";
import TwitchBackground from "@/components/background/TwitchBackground";
import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import PixelWrapper from "@/components/background/PixelWrapper";
import NewVideo from "@/components/background/NewVideo";
import Galaxy from "@/components/background/Galaxy";
import { InlineStyle } from "@/components/commons/InlineStyle";
import { WindowManagerProvider } from "@/context/WindowManagerContext";
import { AppArea } from "@/components/desktop/AppArea";

export const metadata = metaHead({});

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
						font-family: "DotGothic16";
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
					container-type: inline-size;
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
					<WindowManagerProvider>
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
							<NewVideo />
							<CodeBackground />
							<Galaxy />
							<SelectArea />
							<PixelWrapper />
							<AppArea />
							{children}
						</div>
						<Taskbar />
					</WindowManagerProvider>
				</div>
			</div>
		</>
	);
}
