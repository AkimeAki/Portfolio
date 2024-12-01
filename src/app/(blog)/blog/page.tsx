import { getListAllContents } from "@/libs/microcms";
import { Blog } from "@/types/blog";
import PostList from "@/components/blog/organisms/PostList";

export const dynamic = "force-static";

export default async function () {
	const posts = (await getListAllContents<Blog>("blogs")).filter((post) => {
		return (post.category !== undefined && post.category.id !== "allergy-navi") || post.category === undefined;
	});

	return <PostList posts={posts} />;
}
