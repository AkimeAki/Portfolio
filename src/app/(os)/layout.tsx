import AkiSignal from "@/components/os/AkiSignal";
import AppIcons from "@/components/os/AppIcons";
import CodeBackground from "@/components/os/CodeBackground";
import ContextMenu from "@/components/ContextMenu";
import Loading from "@/components/os/Loading";
import SelectArea from "@/components/os/SelectArea";
import Taskbar from "@/components/os/Taskbar";
import Touch from "@/components/Touch";
import TwitchBackground from "@/components/os/TwitchBackground";
import { metaHead } from "@/libs/meta";
import { css } from "@kuma-ui/core";
import { Metadata } from "next";
import "@/styles/os/global.scss";

export const metadata: Metadata = metaHead({});

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props) {
	return (
		<>
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
					<AppIcons />
					<div
						className={css`
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							user-select: none;
							pointer-events: none;
						`}
					>
						{children}
					</div>
				</div>
				<Taskbar />
			</div>
		</>
	);
}
