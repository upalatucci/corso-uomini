import { notFound } from "next/navigation";
import Image from "next/image";
import { CustomMDX } from "../../../components/mdx";
import { formatDate, getBlogPosts } from "../utils";
import { baseUrl } from "../../sitemap";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string } | undefined>;
}) {
  const resolved = await params;
  const slug = resolved?.slug;
  if (!slug) return {};
  const post = getBlogPosts().find((p) => p.slug === slug);
  if (!post) return {};

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/news/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug?: string } | undefined>;
}) {
  const resolved = await params;
  const slug = resolved?.slug;
  if (!slug) notFound();
  const post = getBlogPosts().find((p) => p.slug === slug);
  if (!post) notFound();

  const image = post.metadata.image as string | undefined;
  const isMotto = image?.includes("motto");

  return (
    <div className="relative z-10 min-h-screen overflow-hidden bg-defaultBg px-4 pb-16 pt-[100px] md:px-6 md:pb-24 md:pt-[120px]">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "News",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: image
              ? `${baseUrl}${image}`
              : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/news/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Comitato corso uomini",
            },
          }),
        }}
      />

      <article className="mx-auto max-w-3xl">
        {/* Hero image */}
        {image && (
          <div
            className={`relative mb-8 overflow-hidden rounded-2xl shadow-two ${
              isMotto
                ? "flex items-center justify-center bg-gray-light/30 p-4"
                : "aspect-[2/1] md:aspect-[21/9]"
            }`}
          >
            {isMotto ? (
              <Image
                src={image}
                alt=""
                width={546}
                height={567}
                className="mx-auto max-h-[320px] w-auto object-contain md:max-h-[400px]"
                priority
              />
            ) : (
              <Image
                src={image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            )}
          </div>
        )}

        {/* Header */}
        <header className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary/80">
            News dalle regioni
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl md:leading-tight">
            {post.metadata.title}
          </h1>
          <p className="mt-4 text-sm text-body-color">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </header>

        {/* Content card */}
        <div className="rounded-2xl border border-stroke bg-white px-6 py-8 shadow-one md:px-10 md:py-12">
          <div className="newsletter-prose">
            <CustomMDX source={post.content} />
          </div>
        </div>
      </article>
    </div>
  );
}
