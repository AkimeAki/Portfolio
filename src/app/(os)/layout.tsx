import AkiSignal from "@/components/os/background/AkiSignal";
import AppIcons from "@/components/os/AppIcons";
import CodeBackground from "@/components/os/background/CodeBackground";
import ContextMenu from "@/components/ContextMenu";
import Loading from "@/components/os/Loading";
import SelectArea from "@/components/os/background/SelectArea";
import Taskbar from "@/components/os/taskbar/Taskbar";
import Touch from "@/components/Touch";
import TwitchBackground from "@/components/os/background/TwitchBackground";
import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import { Metadata } from "next";
import "@/styles/os.scss";
import PixelWrapper from "@/components/os/background/PixelWrapper";
import NewVideo from "@/components/os/background/NewVideo";
import Galaxy from "@/components/os/background/Galaxy";
import NewPicture from "@/components/os/background/NewPicture";

export const metadata: Metadata = metaHead({});

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props) {
	return (
		<div
			className={css`
				position: relative;
				width: 100%;
				height: 100%;

				@layer base {
					* {
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
				}

				touch-action: none;
				overscroll-behavior-y: none;

				body[data-user-dragging="true"] & {
					user-select: none !important;

					* {
						user-select: none !important;
					}
				}

				background-color: #060303;
			`}
		>
			<Loading />
			<Touch />
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
					<CodeBackground />
					<TwitchBackground />
					<AkiSignal />
					<SelectArea />
					<NewPicture />
					<NewVideo />
					<Galaxy />
					<PixelWrapper />
					<AppIcons />
					{children}
				</div>
				<Taskbar />
			</div>
		</div>
	);
}
