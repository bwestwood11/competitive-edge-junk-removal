import { getPostsMeta } from "@/lib/posts";
import ListItem from "@/app/components/ListItem";
import Link from "next/link";

export const revalidate = 10;

export async function generateStaticParams() {
  const posts = await getPostsMeta(); // deduped!

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params: { tag } }) {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }) {
  const posts = await getPostsMeta(); // deduped!

  if (!posts)
    return <p className="mt-10 text-center">Sorry, no posts available</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts for that keyword</p>
        <Link href="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-3xl text-center pt-36 mb-0">
        Other articles related to: {tag}
      </h2>
      <section className="mt-6 mx-auto max-w-2xl">
        <ul className="w-full list-none p-0">
          {tagPosts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
