import { css } from "@kuma-ui/core";

export default () => {
	return (
		<div
			className={css`
				width: 100%;
				height: 100%;
				overflow: hidden;
			`}
		>
			<iframe
				src="https://www.youtube.com/embed/?list=UUHV3Taosn76pn9_ip1u7Zkg&loop=1&autoplay=1&mute=1"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				className={css`
					aspect-ratio: 16/9;
					width: 100%;
					border: none;
				`}
			/>
		</div>
	);
};
