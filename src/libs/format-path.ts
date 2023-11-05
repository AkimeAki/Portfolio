export const formatPath = (path: string): string => {
	return path
		.replace(/^\//, "")
		.replace(/^index/, "")
		.replace(/\.html$/, "");
};
