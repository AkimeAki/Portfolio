"use client";

import { checkUseragent } from "@/libs/check-useragent";
import { useEffect } from "react";

export default function () {
	useEffect(() => {
		const data = checkUseragent();
		document.body.dataset.browser = data.browser;
		document.body.dataset.browserType = data.type;
		document.body.dataset.os = data.os;
		document.body.dataset.browerVersion = String(data.version);
	}, []);

	return <></>;
}
