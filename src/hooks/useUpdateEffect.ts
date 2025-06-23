import { type DependencyList, type EffectCallback, useEffect, useRef } from "react";

export const useUpdateEffect = (effect: EffectCallback, deps: DependencyList) => {
	const isMounted = useRef(false);

	useEffect(() => {
		if (isMounted.current) {
			return effect();
		}
	}, deps);

	useEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	}, []);
};
