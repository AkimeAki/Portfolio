import { css, cx } from "@kuma-ui/core";

interface Props {
	imagePath: string;
	alt: string;
	isPixel?: boolean;
}

export function AppIcon({ imagePath, alt, isPixel = true }: Props) {
	return (
		<img
			src={imagePath}
			className={cx(
				css`
					height: 100%;
					aspect-ratio: 1/1;
					user-select: none;
					pointer-events: none;
				`,
				isPixel &&
					css`
						image-rendering: pixelated;
					`,
				"app-icon"
			)}
			alt={alt}
		/>
	);
}
