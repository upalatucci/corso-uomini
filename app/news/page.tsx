import React, { FC } from "react";
import { formatDate, getBlogPostsByYear } from "./utils";
import Link from "next/link";
import Image from "next/image";

function sortByDateDesc<
  T extends { metadata: { publishedAt: string } }
>(posts: T[]) {
  return [...posts].sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );
}

const NewsPage: FC = () => {
  const posts2026 = sortByDateDesc(getBlogPostsByYear(2026));
  const posts2025 = sortByDateDesc(getBlogPostsByYear(2025));

  const PostList = ({
    posts,
  }: {
    posts: typeof posts2026;
  }) => (
    <div className="w-full space-y-4">
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4 cursor-pointer bg-white rounded-lg overflow-hidden shadow-one hover:shadow-two transition-shadow md:flex-row"
          href={`/news/${post.slug}`}
        >
          <Image
            alt=""
            src={(post.metadata.image as string) || "/images/logo/logo-corso-uomini.png"}
            width={300}
            height={300}
            className="w-full md:w-80 object-cover shrink-0"
          />
          <div className="flex flex-col p-4">
            <p className="text-primary font-bold tracking-tight">
              {post.metadata.title.toUpperCase()}
            </p>
            <p className="text-body-color my-4 tracking-tight">
              {post.metadata.summary}
            </p>
            <p className="text-body-color tabular-nums text-sm">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="relative z-10 min-h-screen overflow-hidden bg-defaultBg px-4 pb-8 pt-[120px] md:px-10 md:pb-[80px] md:pt-[100px] xl:pb-[100px] xl:pt-[180px] 2xl:pb-[120px] 2xl:pt-[210px]">
      <section className="flex flex-col container my-4 justify-center items-center">
        <h2 className="text-3xl mb-8 font-bold text-primary">News</h2>

        <div className="w-full max-w-4xl space-y-12">
          {posts2026.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-primary mb-6">2026</h3>
              <PostList posts={posts2026} />
            </div>
          )}
          {posts2025.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-primary mb-6">2025</h3>
              <PostList posts={posts2025} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
