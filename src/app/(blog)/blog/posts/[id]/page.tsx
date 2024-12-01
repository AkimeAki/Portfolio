import { getListAllContents } from "@/libs/microcms";
import { Blog } from "@/types/blog";
import { Metadata } from "next";
import { metaHead } from "@/libs/meta";
import { notFound } from "next/navigation";
import { JSDOM } from "jsdom";
import { codeToHtml } from "shiki";
import RichContents from "@/components/blog/molecules/RichContents";
import { css } from "@kuma-ui/core";

export const dynamic = "force-static";

interface Props {
	params: {
		id: string;
	};
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
	const posts = await getListAllContents<Blog>("blogs");

	return posts.map((post) => ({
		id: post.id
	}));
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const post = (await getListAllContents<Blog>("blogs")).find((post) => {
		return post.id === params.id;
	});

	if (post === undefined) {
		notFound();
	}

	return metaHead({
		title: post.title,
		description: post.title,
		canonicalPath: `/blog/posts/${post.id}`
	});
};

export default async function ({ params }: Props) {
	const post = (await getListAllContents<Blog>("blogs")).find((post) => {
		return post.id === params.id;
	});

	if (post === undefined) {
		notFound();
	}

	const contentsDom = new JSDOM(post.contents);
	const codes = contentsDom.window.document.querySelectorAll("pre > code");
	for (const code of Array.from(codes)) {
		let lang = "";
		for (const className of code.classList.value.split(" ")) {
			const match = className.match(/^language-(.+)$/);
			if (match !== null) {
				lang = match[1] ?? "";
				break;
			}
		}

		if (lang !== "" && code.textContent !== null) {
			const hilightedCode = await codeToHtml(code.textContent, {
				lang: lang,
				theme: "github-dark-dimmed"
			});

			if (code.parentElement !== null) {
				code.parentElement.outerHTML = hilightedCode;
			}
		}
	}

	const body = contentsDom.window.document.querySelector("body");
	const contents = body !== null ? body.innerHTML : "";

	return (
		<div>
			<h2
				className={css`
					font-size: 25px;
					text-align: center;
					margin-bottom: 50px;

					word-wrap: break-word;
					overflow-wrap: anywhere;
					word-break: break-word;
					word-break: auto-phrase;
				`}
			>
				{post.title}
			</h2>
			<RichContents contents={contents} />
		</div>
	);
}
