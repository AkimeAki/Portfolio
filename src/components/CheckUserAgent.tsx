"use client";

import { useEffect } from "react";

export default function () {
	useEffect(() => {
		const agent = window.navigator.userAgent.toLowerCase();

		if (agent.includes("msie")) {
			document.body.dataset.browser = "ie";
			document.body.dataset.browserType = "ie";
		} else if (agent.includes("edge")) {
			document.body.dataset.browser = "old-edge";
			document.body.dataset.browserType = "edge";
		} else if (agent.includes("edg")) {
			document.body.dataset.browser = "edge";
			document.body.dataset.browserType = "chromium";
		} else if (agent.includes("chrome")) {
			document.body.dataset.browser = "chrome";
			document.body.dataset.browserType = "chromium";
		} else if (agent.includes("safari")) {
			document.body.dataset.browser = "safari";
			document.body.dataset.browserType = "safari";
		} else if (agent.includes("firefox")) {
			document.body.dataset.browser = "firefox";
			document.body.dataset.browserType = "firefox";
		}

		if (agent.includes("windows")) {
			document.body.dataset.os = "windows";
		} else if (agent.includes("mac") && agent.includes("os")) {
			if (agent.includes("iphone") || agent.includes("ipad") || agent.includes("ipod")) {
				document.body.dataset.os = "ios";
			} else {
				document.body.dataset.os = "mac";
			}
		} else if (agent.includes("android")) {
			document.body.dataset.os = "android";
		} else if (agent.includes("linux") || agent.includes("sunos") || agent.includes("bsd")) {
			document.body.dataset.os = "linux";
		} else if (agent.includes("nintendo")) {
			document.body.dataset.os = "nintendo";
		} else if (agent.includes("playstation")) {
			document.body.dataset.os = "playstation";
		}
	}, []);

	return <></>;
}
