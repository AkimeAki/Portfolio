import { css } from "@kuma-ui/core";

interface Props {
	imagePath: string;
	alt: string;
}

export function AppIcon({ imagePath, alt }: Props) {
	return (
		<img
			src={imagePath}
			className={css`
				height: 100%;
				aspect-ratio: 1/1;
				padding: 7px;
			`}
			alt={alt}
		/>
	);
}
