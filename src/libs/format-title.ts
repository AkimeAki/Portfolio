export const formatTitle = (title?: string): string => {
	const serviceTitle = "彩季";
	return title === undefined ? serviceTitle : `${title} - ${serviceTitle}`;
};
