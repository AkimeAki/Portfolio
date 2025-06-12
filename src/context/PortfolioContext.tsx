import { createContext, type Dispatch, type SetStateAction, useContext, useEffect, useState } from "react";

interface CategoryContextType {
	category: string;
	setCategory: Dispatch<SetStateAction<string>>;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
	const [category, setCategory] = useState<string>("root");

	useEffect(() => {
		const expectedPath = category === "root" ? "/portfolio" : `/portfolio/${category}`;

		if (location.pathname === expectedPath) {
			return;
		}

		if (category === "root" && location.pathname !== "/portfolio") {
			window.history.pushState({ app: "portfolio" }, "", "/portfolio");
		} else {
			window.history.pushState({ app: "portfolio" }, "", `/portfolio/${category}`);
		}
	}, [category]);

	useEffect(() => {
		function syncUrlToState() {
			const pathSegments = location.pathname.split("/").filter(Boolean);
			const appId = pathSegments[0];
			const category = pathSegments[1];

			if (appId !== "portfolio") {
				return;
			}

			if (category === undefined) {
				setCategory("root");
			} else {
				setCategory(category);
			}
		}

		window.addEventListener("popstate", syncUrlToState);

		return () => {
			window.removeEventListener("popstate", syncUrlToState);
		};
	}, []);

	return <CategoryContext.Provider value={{ category, setCategory }}>{children}</CategoryContext.Provider>;
}

export function usePortfolio() {
	const context = useContext(CategoryContext);
	if (context === undefined) {
		throw new Error("usePortfolioはPortfolioProviderの中で使用しなさ～い");
	}
	return context;
}
