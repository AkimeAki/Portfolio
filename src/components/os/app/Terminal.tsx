"use client";

import { runningCommands } from "@/atom";
import { css } from "@kuma-ui/core";
import { useStore } from "@nanostores/react";
import { useEffect, useRef, useState } from "react";
import sanitizeHtml from "sanitize-html";

export default () => {
	const [terminalLog, setTerminalLog] = useState<string>("");
	const [inputText, setInputText] = useState<string>("");
	const [toggleEnter, setToggleEnter] = useState<boolean>(false);
	const terminalElement = useRef<HTMLDivElement>(null);
	const inputElement = useRef<HTMLDivElement>(null);
	const [isInputReady, setIsInputReady] = useState<boolean>(false);
	const [toggleDeletePrefix, setToggleDeletePrefix] = useState<boolean>(false);
	const [anchor, setAnchor] = useState<number>(6);
	const $runningCommands = useStore(runningCommands);
	const prevToggleEnter = useRef<boolean>(false);

	useEffect(() => {
		document.fonts.ready.then(() => {
			setTerminalLog("HamaguriShell 0.0.1");
			setTimeout(() => {
				const text = "You&nbsp;>&nbsp;";
				setInputText(text);
				if (inputElement.current !== null) {
					inputElement.current.innerHTML = text;
				}
				setIsInputReady(true);
			}, 500);
		});
	}, []);

	useEffect(() => {
		if (prevToggleEnter.current !== toggleEnter && inputText !== "" && inputElement.current !== null) {
			prevToggleEnter.current = toggleEnter;
			setTerminalLog((prev) => {
				return prev + "<br>" + inputText;
			});

			const text = "You&nbsp;>&nbsp;";
			setInputText(text);
			inputElement.current.innerHTML = text;

			const inputCommand = inputText.replace(/^You\s&gt;[\s]+/, "").replace(/[\s]+$/, "");
			if (inputCommand !== "" && inputCommand !== "You&nbsp;>&nbsp;") {
				const commandList = [...$runningCommands];
				if (!commandList.includes(inputCommand)) {
					commandList.push(inputCommand);
				}
				runningCommands.set(commandList);
			}
		}
	}, [toggleEnter, $runningCommands]);

	useEffect(() => {
		if (inputElement.current !== null) {
			const selection = document.getSelection();
			if (selection !== null && selection.anchorOffset >= 6) {
				setAnchor(selection.anchorOffset);
			}
		}
	}, [inputText]);

	useEffect(() => {
		if (terminalElement.current !== null) {
			terminalElement.current.scrollTop = terminalElement.current.scrollHeight;
		}
	}, [terminalLog]);

	useEffect(() => {
		if (inputText !== "" && inputElement.current !== null && !/^You\s>[\s]+$/.test(inputText)) {
			inputElement.current.innerHTML = inputText;
		}
	}, [toggleDeletePrefix]);

	useEffect(() => {
		let id = 0;
		const observeSelection = () => {
			const selection = document.getSelection();
			if (selection !== null && inputElement.current !== null) {
				if (
					selection.anchorNode !== null &&
					selection.anchorNode.parentElement !== null &&
					((selection.anchorNode.parentElement.id === "input-terminal" &&
						selection.anchorOffset !== anchor &&
						selection.anchorOffset < 6) ||
						selection.anchorNode.parentElement.id !== "input-terminal")
				) {
					const range = document.createRange();
					range.setStart(inputElement.current.childNodes[0], 6);
					selection.removeAllRanges();
					selection.addRange(range);
				}
			}

			id = requestAnimationFrame(observeSelection);
		};

		id = requestAnimationFrame(observeSelection);

		return () => {
			cancelAnimationFrame(id);
		};
	}, [anchor]);

	return (
		<>
			<div
				className={css`
					opacity: 0;
					user-select: none;
					pointer-events: none;
					font-family: CascadiaMonoNF;
					overflow: hidden;
					width: 0;
					height: 0;
				`}
			>
				a
			</div>
			<div
				ref={terminalElement}
				className={css`
					width: 100%;
					height: 100%;
					background-color: #0c0c0c;
					overflow-y: scroll;
					padding: 5px;

					font-family: CascadiaMonoNF;

					* {
						font-family: CascadiaMonoNF;
					}
				`}
			>
				<div
					className={css`
						width: 100%;

						line-height: 1.4;
						color: white;
						word-break: break-all;

						* {
							line-height: 1.4;
							color: white;
							word-break: break-all;
						}
					`}
					dangerouslySetInnerHTML={{ __html: terminalLog }}
				/>
				<div
					ref={inputElement}
					id="input-terminal"
					contentEditable={isInputReady ? "true" : "false"}
					onInput={(e) => {
						const text = e.currentTarget.textContent ?? "";
						if (!/^You\s>\s/.test(text)) {
							setToggleDeletePrefix((prev) => {
								return !prev;
							});
						} else {
							setInputText(() => {
								return sanitizeHtml(text, {
									allowedTags: [],
									allowedAttributes: {},
									disallowedTagsMode: "escape"
								});
							});
						}
					}}
					onKeyDown={(e) => {
						if (e.code === "Enter") {
							setToggleEnter((prev) => {
								return !prev;
							});
							e.preventDefault();
						}
					}}
					className={[
						css`
							width: 100%;
							color: white;
							line-height: 1.4;
							word-break: break-all;

							* {
								color: white;
								line-height: 1.4;
								word-break: break-all;
							}
						`,
						!isInputReady
							? css`
									display: none;
								`
							: ""
					].join(" ")}
				/>
			</div>
		</>
	);
};
