import { portfolioCategoryMap } from "@/data/portfolio-def";
import { useUpdateEffect } from "@/hooks/useUpdateEffect";
import { pageTitle } from "@/libs/meta";
import { createContext, type Dispatch, type SetStateAction, useContext, useEffect, useState } from "react";

interface CategoryContextType {
	category: string;
	itemId: string;
	setCategory: Dispatch<SetStateAction<string>>;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
	const [category, setCategory] = useState<string>("root");
	const [itemId, setItemId] = useState<string>("");

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
		} else {
			setCategory(category);
		}
	}

	useEffect(() => {
		syncUrlToState();
		window.addEventListener("popstate", syncUrlToState);

		return () => {
			window.removeEventListener("popstate", syncUrlToState);
		};
	}, []);

	useUpdateEffect(() => {
		const expectedPath = category === "root" ? "/portfolio" : `/portfolio/${category}`;

		if (location.pathname === expectedPath) {
			return;
		}

		document.title = `${portfolioCategoryMap[category].title} - ${pageTitle}`;
		window.history.pushState({ app: "portfolio" }, "", expectedPath);
		setItemId("");
	}, [category]);

	return <CategoryContext.Provider value={{ category, setCategory, itemId }}>{children}</CategoryContext.Provider>;
}

export function usePortfolio() {
	const context = useContext(CategoryContext);
	if (context === undefined) {
		throw new Error("usePortfolioはPortfolioProviderの中で使用しなさ～い");
	}
	return context;
}
