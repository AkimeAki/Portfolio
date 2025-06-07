import { cx } from "@/libs/merge-kuma";
import useWindow from "@/libs/useWindow";
import { css } from "@kuma-ui/core";

interface Props {
	id: string;
	iconPath: string;
	isPixel: boolean;
	isOpen?: boolean;
}

export default function ({ id, iconPath, isPixel, isOpen = false }: Props) {
	const { openWindow, releaseMinimizedWindow } = useWindow();

	return (
		<button
			type="button"
			onClick={() => {
				openWindow(id);
				releaseMinimizedWindow(id);
			}}
			className={cx(
				css`
					display: block;
					width: 40px;
					height: 40px;
					background-color: #c6dd95;
					border-style: solid;
					border-width: 3px;
					border-color: transparent;

					@media (hover: hover) {
						&:hover {
							border-color: #f44458;
						}
					}
				`,
				isOpen &&
					css`
						border-color: #f44458;
					`
			)}
		>
			<img
				alt={`${id}のアイコン`}
				src={iconPath}
				className={[
					css`
						display: block;
						width: 100%;
						height: 100%;
					`,
					isPixel
						? css`
								image-rendering: pixelated;
							`
						: ""
				].join(" ")}
			/>
		</button>
	);
}
