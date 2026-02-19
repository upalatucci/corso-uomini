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
    <div className="flex w-full flex-col gap-5">
      {posts.map((post) => {
        const imgSrc =
          (post.metadata.image as string) ||
          "/images/logo/logo-corso-uomini.png";
        const isMotto = imgSrc.includes("motto");
        return (
          <Link
            key={post.slug}
            className="flex gap-4 rounded-2xl bg-white/80 p-5 shadow-one transition-shadow hover:shadow-two md:gap-6 md:p-6"
            href={`/news/${post.slug}`}
          >
            <div
              className={`relative shrink-0 overflow-hidden ${
                isMotto
                  ? "h-16 w-28 rounded-lg md:h-20 md:w-36"
                  : "h-16 w-16 rounded-full md:h-20 md:w-20"
              }`}
            >
              <Image
                alt=""
                src={imgSrc}
                fill
                className={isMotto ? "object-contain" : "object-cover"}
                sizes={isMotto ? "144px" : "80px"}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="mb-1 font-bold tracking-tight text-primary">
                {post.metadata.title}
              </p>
              <p className="text-sm leading-relaxed text-body-color line-clamp-3 md:text-base">
                {post.metadata.summary}
              </p>
              <p className="mt-2 text-xs tabular-nums text-body-color md:text-sm">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        );
      })}
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
