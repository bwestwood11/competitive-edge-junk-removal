import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import "highlight.js/styles/atom-one-dark.css";

export const revalidate = 10;

export async function generateStaticParams() {
    try {
         const posts = await getPostsMeta(); // deduped!

  return posts.map((post) => ({
    postId: post.id,
  })); 
    } catch (error) {
        console.log("Error fetching posts", error)
    }
}

// Dynamic Metadata for each post page
export async function generateMetadata({ params: { postId } }) {
  const post = await getPostByName(`${postId}.mdx`); // deduped!

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function Post({ params: { postId } }) {
  const post = await getPostByName(`${postId}.mdx`); // deduped!
  console.log("post", post);

  if (!post) notFound();

  const { meta, content } = post;
 
  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));
  return (
    <main className="px-6 max-w-6xl prose prose-headings:no-underline prose-slate mt-10 mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{meta.title}</h1>
      <p className="mt-2">{pubDate}</p>
      <article className="mt-4">{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      <p>
        <Link href="/blog">Back to blog</Link>
      </p>
    </main>
  );
}
