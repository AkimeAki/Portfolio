"use client";

import { useEffect } from "react";

interface Props {
	type: string;
}

export default function ({ type }: Props) {
	useEffect(() => {
		document.body.dataset.layout = type;
	}, []);

	return <></>;
}
