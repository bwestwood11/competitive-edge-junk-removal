import getFormattedDate from "@/lib/getFormattedDate";
import { getPostsMeta, getPostByName } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import "highlight.js/styles/atom-one-dark.css";
import { Crimson_Pro } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";

const crimson = Crimson_Pro({
  weight: "500",
  subsets: ["latin"],
})

const sans = Source_Sans_3({
  subsets: ["latin"],
})

export const revalidate = 10;

export async function generateStaticParams() {
         const posts = await getPostsMeta(); // deduped!

         if (!posts) return [];

    return posts.map((post) => ({
    postId: post.id,
  })); 
 
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
    alternates: {
      canonical: `https://www.competitiveedgedumpsters.com/posts/${postId}`
    }
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
    <main className="px-6 max-w-3xl pb-10 mx-auto prose prose-lg prose-stone dark:prose-invert pt-16">
      <div className={sans.className}>
    <h1 className="text-3xl font-bold mt-4 mb-0">{meta.title}</h1>
    <p className="mt-2 font-bold">{pubDate}</p>
    <article className="mt-4 text-gray-600 leading-7 tracking-wide">{content}</article>
    <section>
      <h3>Related:</h3>
      <div className="flex flex-row gap-4">{tags}</div>
    </section>
    <p>
      <Link href="/blog">Back to blog</Link>
    </p>
    </div>
  </main>
  );
}
