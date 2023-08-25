import ListItem from "@/app/components/ListItem";
import { getPostsMeta } from "@/lib/posts";

export const revalidate = 10;


export default async function Posts() {
    const posts = await getPostsMeta();

    if (!posts) {
       return <p className="mt-10 text-center">Sorry, no posts available</p>
    }

  return (
    <section className="pt-24 mx-auto max-w-[1280px]">
        <h2 className="text-4xl font-bold text-center mb-8">Our Blog</h2>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map(post => (
          <ListItem key={post.id} post={post} />
        ))} 
        </ul>
    </section>
  )
}
