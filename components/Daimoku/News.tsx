import { formatDate, getBlogPosts } from "@/app/news/utils";
import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";

const News: FC = () => {
  const allBlogs = getBlogPosts();
  return (
    <div className="w-full lg:w-2/3 mb-10 lg:border-r-gray-400 lg:border-r-8 p-4">
      <div className="flex flex-col justify-center align-middle">
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
          .slice(0, 3)
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4 cursor-pointer bg-white"
              href={`/news/${post.slug}`}
            >
              <div className="w-full flex flex-col lg:flex-row space-x-0 lg:space-x-2">
                <Image
                  alt="immagine post"
                  src={post.metadata.image as string}
                  width={300}
                  height={300}
                  className="w-80"
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
    </div>
  );
};

export default News;
