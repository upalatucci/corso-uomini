import React, { FC } from "react";
import { formatDate, getBlogPosts } from "./utils";
import Link from "next/link";
import Image from "next/image";

const News: FC = () => {
  const allBlogs = getBlogPosts();

  return (
    <div className="px-4 md:px-10 relative z-10 overflow-hidden  pb-8 pt-[120px] md:pb-[80px] md:pt-[100px] xl:pb-[100px] xl:pt-[180px] 2xl:pb-[120px] 2xl:pt-[210px]">
      <section className="flex flex-col container my-4 justify-center items-center">
        <h2 className="text-3xl mb-4">News</h2>

        <div className="w-full max-w-4xl">
          {allBlogs
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4 cursor-pointer bg-white"
                href={`/news/${post.slug}`}
              >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <Image
                    alt="immagine post"
                    src={post.metadata.image as string}
                    width={300}
                    height={300}
                    className="w-full"
                  />
                  <div className="flex flex-col p-4">
                    <p className="text-primary font-bold  tracking-tight">
                      {post.metadata.title.toUpperCase()}
                    </p>
                    <p className="text-neutral-600 my-4  tracking-tight">
                      {post.metadata.summary}
                    </p>
                    <p className="text-neutral-600 tabular-nums">
                      {formatDate(post.metadata.publishedAt, false)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default News;
