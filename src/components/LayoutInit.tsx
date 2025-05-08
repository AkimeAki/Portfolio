"use client";

import { isLoadIframe } from "@/libs/is-load-iframe";
import { useEffect } from "react";

interface Props {
	type: string;
	iframeType?: string;
}

export default function ({ type, iframeType }: Props) {
	useEffect(() => {
		if (iframeType !== undefined && isLoadIframe()) {
			document.body.dataset.layout = iframeType;
		} else {
			document.body.dataset.layout = type;
		}
	}, []);

	return <></>;
}
