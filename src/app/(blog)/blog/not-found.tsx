import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "ページが見つかりませんでした"
};

export default function (): JSX.Element {
	return <p>ページが見つかりませんでした。</p>;
}
