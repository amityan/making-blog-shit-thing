import FormattedDate from "@/components/FormattedDate";
import { useConfig } from "@/lib/config";
import Link from "next/link";
import { Suspense } from "react";


function Loading(){
  return "Loading...";
}


const BlogPost = ({ post }) => {
  const BLOG = useConfig();

  return (
    <Suspense fallback={<Loading />}>
      <Link href={`${BLOG.path}/${post.slug}`}>
        <article key={post.id} className="mb-6 md:mb-8 border-gray-600 border px-4 py-6 rounded-md hover:opacity-50 transition-all ease-in-out">
          <header className="flex flex-col justify-between md:flex-row md:items-baseline">
            <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
              {post.title}
            </h2>
            <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
              <FormattedDate date={post.date} />
            </time>
          </header>
          <main>
            <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
              {post.summary}
            </p>
          </main>
        </article>
      </Link>
     </Suspense >
  );
};

export default BlogPost;
