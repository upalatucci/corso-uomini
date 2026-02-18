import { formatDate, getBlogPosts } from "@/app/news/utils";
import Link from "next/link";
import Image from "next/image";

const News = () => {
  const allBlogs = getBlogPosts();
  const posts = allBlogs
    .sort((a, b) => {
      if (
        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ) {
        return -1;
      }
      return 1;
    })
    .slice(0, 3);

  return (
    <div className="w-full">
      <h2 className="mb-10 text-center text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
        News dalle regioni
      </h2>
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/news/${post.slug}`}
            className="flex gap-4 rounded-2xl bg-white/80 p-5 shadow-one transition-shadow hover:shadow-two md:gap-6 md:p-6"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full md:h-20 md:w-20">
              <Image
                alt=""
                src={(post.metadata.image as string) || "/images/logo/logo-corso-uomini.png"}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="mb-1 font-bold text-dark">
                {post.metadata.title}
              </p>
              <p className="text-sm leading-relaxed text-body-color line-clamp-3 md:text-base">
                {post.metadata.summary}
              </p>
              <p className="mt-2 text-xs text-body-color tabular-nums md:text-sm">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          href="/news"
          className="inline-block rounded-xl bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent/90"
        >
          Leggi altre esperienze
        </Link>
      </div>
    </div>
  );
};

export default News;
