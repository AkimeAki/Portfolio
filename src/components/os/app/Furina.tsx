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
				src="https://www.youtube.com/embed/videoseries?list=PLnVoUTTAoKRrI5sgu4NdqiJivv8FZKdci&loop=1&autoplay=1"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				frameBorder={0}
				className={css`
					aspect-ratio: 16/9;
					width: 100%;
				`}
			/>
		</div>
	);
};
