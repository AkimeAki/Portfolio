import { css } from "@kuma-ui/core";

const style = css`
	--top-margin: 10px;
	position: fixed;
	top: var(--top-margin);
	left: 50%;
	transform: translateX(-50%) translateY(calc(-100% - var(--top-margin)));
	z-index: calc(infinity);
	max-width: 500px;
	width: calc(100% - 40px);
	line-height: 1;
	padding: 10px;
	color: #656565;
	border-width: 4px;
	border-style: solid;
	border-color: #77ff65;
	background-color: #d6ffd1;
	font-weight: bold;
	overflow-wrap: break-word;
	border-radius: 5px;
	white-space: pre-line;
	transition-duration: 200ms;
	transition-property: transform;
	transition-timing-function: linear;
`;
const viewStyle = css`
	transform: translateX(-50%) translateY(0);
`;

const hideStyle = css`
	transform: translateX(-50%) translateY(calc(-100% - var(--top-margin) - 20px));
`;

function hideMessage() {
	const messages = document.querySelectorAll<HTMLDivElement>(".notification");
	for (const message of messages) {
		message.classList.add(hideStyle);
	}
}

function deleteOldMessage() {
	const oldMessages = document.querySelectorAll<HTMLDivElement>(".notification");
	for (const oldMessage of oldMessages) {
		oldMessage.remove();
	}
}

export function useNotification() {
	let hideTimeoutId: NodeJS.Timeout | null = null;
	let deleteTimeoutId: NodeJS.Timeout | null = null;

	const addMessage = (text: string): void => {
		if (hideTimeoutId !== null) {
			clearTimeout(hideTimeoutId);
		}
		if (deleteTimeoutId !== null) {
			clearTimeout(deleteTimeoutId);
		}

		deleteOldMessage();

		document.body.insertAdjacentHTML(
			"afterbegin",
			/* html */ `
				<div class="notification ${style}">${text}</div>
			`
		);

		setTimeout(() => {
			const messages = document.querySelectorAll<HTMLDivElement>(".notification");
			for (const message of messages) {
				message.classList.add(viewStyle);
			}
		}, 10);

		hideTimeoutId = setTimeout(hideMessage, 5 * 1000);
		deleteTimeoutId = setTimeout(deleteOldMessage, 5 * 1000 + 600);
	};

	return { addMessage };
}
