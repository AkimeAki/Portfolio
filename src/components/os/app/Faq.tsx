import { css } from "@kuma-ui/core";

export default function () {
	return (
		<div
			className={css`
				padding: 20px;
			`}
		>
			<FAQContent />
		</div>
	);
}

export const FAQContent = () => {
	return (
		<>
			<p>Q. 質問はありますか。</p>
			<p>A. ありません。</p>
		</>
	);
};
