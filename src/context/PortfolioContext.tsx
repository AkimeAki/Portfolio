import { createContext, type Dispatch, type SetStateAction, useContext, useState } from "react";

interface CategoryContextType {
	category: string;
	setCategory: Dispatch<SetStateAction<string>>;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
	const [category, setCategory] = useState<string>("root");

	return <CategoryContext.Provider value={{ category, setCategory }}>{children}</CategoryContext.Provider>;
}

export function usePortfolio() {
	const context = useContext(CategoryContext);
	if (context === undefined) {
		throw new Error("usePortfolioはPortfolioProviderの中で使用しなさ～い");
	}
	return context;
}
