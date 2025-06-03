"use client";

import { useEffect } from "react";

interface Props {
	id: string;
}

export function SetAppId({ id }: Props) {
	useEffect(() => {
		document.body.dataset.appId = id;
	}, []);

	return <></>;
}
