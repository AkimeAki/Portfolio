export const checkUseragent = () => {
	const agent = window.navigator.userAgent.toLowerCase();
	const data = {
		browser: "",
		type: "",
		os: "",
		version: 100000
	};

	if (agent.includes("msie") || agent.includes("trident")) {
		data.browser = "ie";
		data.type = "ie";
	} else if (agent.includes("edga")) {
		data.browser = "edge";
		data.type = "chromium";
		const match = agent.match(/edga\/([0-9]+\.[0-9]+)/);
		if (match !== null) {
			data.version = Number(match[1]);
		}
	} else if (agent.includes("edg")) {
		data.browser = "edge";
		data.type = "chromium";
		const match = agent.match(/edg\/([0-9]+\.[0-9]+)/);
		if (match !== null) {
			data.version = Number(match[1]);
		}
	} else if (agent.includes("edge")) {
		data.browser = "old-edge";
		data.type = "edge";
	} else if (agent.includes("opr")) {
		data.browser = "opera";
		data.type = "chromium";
		const match = agent.match(/opr\/([0-9]+\.[0-9]+)/);
		if (match !== null) {
			data.version = Number(match[1]);
		}
	} else if (agent.includes("samsungbrowser")) {
		data.browser = "samsung";
		data.type = "chromium";
		const match = agent.match(/samsungbrowser\/([0-9]+\.[0-9]+)/);
		if (match !== null) {
			data.version = Number(match[1]);
		}
	} else if (agent.includes("chrome")) {
		data.browser = "chrome";
		data.type = "chromium";
		const match = agent.match(/chrome\/([0-9]+\.[0-9]+)/);
		if (match !== null) {
			data.version = Number(match[1]);
		}
	} else if (agent.includes("safari")) {
		data.browser = "safari";
		data.type = "safari";

		const match = agent.match(/version\/([0-9]+\.[0-9]+)/);
		if (match !== null) {
			data.version = Number(match[1]);
		}
	} else if (agent.includes("firefox")) {
		data.browser = "firefox";
		data.type = "firefox";
		const match = agent.match(/firefox\/([0-9]+\.[0-9]+)/);
		if (match !== null) {
			data.version = Number(match[1]);
		}
	}

	if (agent.includes("windows")) {
		data.os = "windows";
	} else if (agent.includes("mac") && agent.includes("os")) {
		if (agent.includes("iphone") || agent.includes("ipad") || agent.includes("ipod")) {
			data.os = "ios";
		} else {
			data.os = "mac";
		}
	} else if (agent.includes("android")) {
		data.os = "android";
	} else if (agent.includes("linux") || agent.includes("sunos") || agent.includes("bsd")) {
		data.os = "linux";
	} else if (agent.includes("nintendo")) {
		data.os = "nintendo";
	} else if (agent.includes("playstation")) {
		data.os = "playstation";
	}

	return data;
};
