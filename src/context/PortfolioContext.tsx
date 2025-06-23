import { createContext, type Dispatch, type SetStateAction, useContext, useEffect, useRef, useState } from "react";

interface CategoryContextType {
	category: string;
	itemId: string;
	setCategory: Dispatch<SetStateAction<string>>;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
	const [category, setCategory] = useState<string>("root");
	const [itemId, setItemId] = useState<string>("");
	const isFirstRender = useRef(true);

	function syncUrlToState() {
		const pathSegments = location.pathname.split("/").filter(Boolean);
		const appId = pathSegments[0];
		const category = pathSegments[1];

		if (appId !== "portfolio") {
			return;
		}

		if (category === undefined) {
			setCategory("root");
		} else if (category === "item") {
			const itemId = pathSegments[2];
			setCategory("root");
			setItemId(itemId ?? "");
			console.log(itemId);
		} else {
			setCategory(category);
		}
	}

	useEffect(() => {
		if (isFirstRender.current) {
			syncUrlToState();
			isFirstRender.current = false;
			return;
		}

		const expectedPath = category === "root" ? "/portfolio" : `/portfolio/${category}`;

		if (location.pathname === expectedPath) {
			return;
		}

		window.history.pushState({ app: "portfolio" }, "", expectedPath);
	}, [category]);

	useEffect(() => {
		window.addEventListener("popstate", syncUrlToState);

		return () => {
			window.removeEventListener("popstate", syncUrlToState);
		};
	}, []);

	return <CategoryContext.Provider value={{ category, setCategory, itemId }}>{children}</CategoryContext.Provider>;
}

export function usePortfolio() {
	const context = useContext(CategoryContext);
	if (context === undefined) {
		throw new Error("usePortfolioはPortfolioProviderの中で使用しなさ～い");
	}
	return context;
}
