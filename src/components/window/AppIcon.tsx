import { css, cx } from "@kuma-ui/core";

interface Props {
	imagePath: string;
	alt: string;
}

export function AppIcon({ imagePath, alt }: Props) {
	return (
		<img
			src={imagePath}
			className={cx(
				css`
					height: 100%;
					aspect-ratio: 1/1;
				`,
				"app-icon"
			)}
			alt={alt}
		/>
	);
}
