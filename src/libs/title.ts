export const getTitle = (path: string): string | undefined => {
	switch (path) {
		case "/":
			return undefined;

		case "/portfolio":
			return "作ったもの";

		case "/contact":
			return "お問い合わせ";

		case "/works":
			return "お仕事";

		default:
			return undefined;
	}
};
