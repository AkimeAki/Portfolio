import AkiSignal from "@/components/os/AkiSignal";
import AppIcons from "@/components/os/AppIcons";
import Loading from "@/components/os/loading";
import Taskbar from "@/components/os/Taskbar";
import { css } from "@kuma-ui/core";

interface Props {
	children: React.ReactNode;
}

export default function ({ children }: Props) {
	return (
		<>
			<Loading />
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
