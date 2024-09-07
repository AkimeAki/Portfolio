import AkiSignal from "@/components/os/AkiSignal";
import AppIcons from "@/components/os/AppIcons";
import Cursor from "@/components/os/Cursor";
import Loading from "@/components/os/Loading";
import SelectArea from "@/components/os/SelectArea";
import Taskbar from "@/components/os/Taskbar";
import Touch from "@/components/os/Touch";
import { seoHead } from "@/lib/seo";
import { css } from "@kuma-ui/core";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = seoHead({});

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props) {
	return (
		<>
			<Loading />
			<Touch />
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
			<Cursor />
		</>
	);
}
