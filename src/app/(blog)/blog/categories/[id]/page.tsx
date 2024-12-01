import { getListAllContents } from "@/libs/microcms";
import { Blog, Category } from "@/types/blog";
import { Metadata } from "next";
import { metaHead } from "@/libs/meta";
import { notFound } from "next/navigation";
import PostList from "@/components/blog/organisms/PostList";

export const dynamic = "force-static";

interface Props {
	params: {
		id: string;
	};
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
	const categories = await getListAllContents<Category>("categories");

	return categories.map((category) => ({
		id: category.id
	}));
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const category = (await getListAllContents<Category>("categories")).find((category) => {
		return category.id === params.id;
	});

	if (category === undefined) {
		notFound();
	}

	return metaHead({
		title: category.name,
		description: category.name,
		canonicalPath: `/blog/posts/categories/${category.id}`
	});
};

export default async function ({ params }: Props) {
	const posts = (await getListAllContents<Blog>("blogs")).filter((post) => {
		return post.category !== undefined && post.category.id === params.id;
	});

	const category = (await getListAllContents<Category>("categories")).find((category) => {
		return category.id === params.id;
	});

	if (posts.length === 0 || category === undefined) {
		notFound();
	}

	return <PostList posts={posts} title={category.name} />;
}
