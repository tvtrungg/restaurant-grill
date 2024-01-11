import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import fs from "fs";
import Image from "next/image";

import getPosts from "@/lib/getPosts";
import { TPostData } from "@/types";

export async function generateStaticParams() {
  const posts = getPosts("en");
  return posts.map((post) => ({
    slug: post.data.slug,
  }));
}

const getPostContent = (slug: string, lang: string): TPostData => {
  const folder = `data/contents/${lang}`;
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return {
    data: {
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      slug: matterResult.data.slug,
      thumbnail: matterResult.data.thumbnail,
    },
    content: matterResult.content,
  };
};

type TNewsDetailsProps = {
  params: {
    slug: string;
    lang: string;
  };
};

export default function NewsDetailPage({ params }: TNewsDetailsProps) {
  const { slug, lang } = params;
  const post = getPostContent(slug, lang);
  return (
    <main className="dark">
      <div className="flex flex-col items-center mb-20 mt-16 w-full">
        <h1 className="text-2xl font-bold text-center lg:text-4xl 2xs:text-3xl mb-4  capitalize">
          {post.data.title}
        </h1>
        <p className="text-dark/75 dark:text-light/75 text-lg text-center lg:text-base">
          {post.data.date}
        </p>
      </div>
      <article
        className="w-[90%] 2xs:w-[80%] sm:w-[70%] max-w-none mx-auto prose 
      lg:prose-base 
      sm:prose-sm 
      prose-pre:overflow-x-scroll 
      prose-headings:font-bold 
      prose-a:underline 
      prose-a:font-medium 
      prose-img:mx-auto 
      dark:prose-invert
    dark:hover:prose-a:text-[--primary-color]
      "
      >
        <Image
          src={post.data.thumbnail}
          alt={post.data.title}
          width={500}
          height={500}
        />

        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
