"use client";

import { useEffect } from "react";

export default function () {
	useEffect(() => {
		document.body.setAttribute("oncontextmenu", "return false;");

		return () => {
			document.body.removeAttribute("oncontextmenu");
		};
	}, []);

	return <></>;
}
