import { formatPath } from "@/libs/format-path";
import { getTitle } from "@/libs/title";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { formatTitle } from "@/libs/format-title";

interface Props {
	element: JSX.Element;
}

export const Router = ({ element }: Props): JSX.Element => {
	const location = useLocation();

	useEffect(() => {
		const path = "/" + formatPath(location.pathname);
		const title = getTitle(path);
		document.body.scrollTo(0, 0);
		document.title = formatTitle(title);
	}, [location]);

	return element;
};
