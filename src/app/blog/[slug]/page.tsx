import type { ComponentProps } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { ArrowRight } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/marketing/json-ld";
import { LeadMagnetSignup } from "@/components/marketing/lead-magnet-signup";
import { ReadingProgress } from "@/components/marketing/reading-progress";
import { blogPosts, getBlogPost, type BlogPost } from "@/content/blog";
import { defaultAuthor } from "@/data/authors";
import { founderConfig, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/dates";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { extractToc } from "@/lib/toc";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function toIsoDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return undefined;
  }
  return parsed.toISOString();
}

function getRelatedPosts(current: BlogPost, count = 2): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== current.slug)
    .map((post) => ({
      post,
      score: post.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score || (a.post.date > b.post.date ? -1 : 1))
    .slice(0, count)
    .map((entry) => entry.post);
}

const mdxComponents = {
  // GFM tables need a scroll container so wide comparison tables don't break the column.
  table: (props: ComponentProps<"table">) => (
    <div className="blog-table">
      <table {...props} />
    </div>
  ),
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return createMetadata({
      title: "Blog post not found",
      description: "The requested EmailMagnet blog post could not be found.",
      path: `/blog/${slug}`,
    });
  }

  const pageMetadata = createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });

  const publishedTime = toIsoDate(post.date);
  const modifiedTime = toIsoDate(post.updated) ?? publishedTime;
  const coverImages = post.featuredImage
    ? [
        {
          url: `${siteConfig.url}${post.featuredImage}`,
          width: 1600,
          height: 900,
          alt: post.featuredImageAlt ?? post.title,
        },
      ]
    : undefined;

  return {
    ...pageMetadata,
    keywords: post.tags,
    category: "Blog",
    authors: [{ name: defaultAuthor.name, url: defaultAuthor.url }],
    openGraph: {
      ...pageMetadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      tags: post.tags,
      authors: [defaultAuthor.name],
      ...(coverImages ? { images: coverImages } : {}),
    },
    ...(coverImages
      ? { twitter: { ...pageMetadata.twitter, images: [coverImages[0].url] } }
      : {}),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const toc = extractToc(post.body);
  const related = getRelatedPosts(post);
  const wasUpdated = post.updated !== post.date;

  return (
    <article className="bg-white">
      <ReadingProgress />
      <JsonLd data={buildArticleSchema(post)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.name, href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ])}
      />

      {/* Article header */}
      <header className="bg-surface-soft border-b border-slate-200/70">
        <div className="mx-auto max-w-3xl px-4 pt-12 pb-10 md:pt-16 md:pb-14">
          <nav aria-label="Breadcrumb" className="text-sm font-medium">
            <Link href="/blog" className="text-eyebrow inline-flex items-center gap-1.5 hover:underline">
              <span aria-hidden>←</span> All articles
            </Link>
          </nav>
          <div className="mt-7 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-md">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-normal text-balance text-slate-950 md:text-5xl md:leading-[1.12]">
            {post.title}
          </h1>
          <p className="mt-5 text-xl leading-9 text-slate-600">{post.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-slate-500">
            <Link
              href={founderConfig.href}
              className="hover:text-eyebrow group inline-flex items-center gap-2.5"
            >
              <span
                aria-hidden
                className="bg-brand-soft text-eyebrow flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold"
              >
                N
              </span>
              <span>
                <span className="block leading-tight font-semibold text-slate-900 group-hover:underline">
                  {defaultAuthor.name}
                </span>
                <span className="block text-xs leading-tight text-slate-500">
                  {defaultAuthor.role}
                </span>
              </span>
            </Link>
            <span aria-hidden className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
            <span>{post.readingTime}</span>
            <span aria-hidden className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
            <span>
              Published <time dateTime={post.date}>{formatDate(post.date)}</time>
              {wasUpdated ? (
                <>
                  {" "}
                  · Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </>
              ) : null}
            </span>
          </div>
        </div>
      </header>

      {/* Cover image */}
      {post.featuredImage ? (
        <div className="mx-auto max-w-4xl px-4 pt-10 md:pt-12">
          {/* next/image doesn't paint reliably in this Next build; a plain img is dependable. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt ?? `Cover image for "${post.title}"`}
            width={1600}
            height={800}
            fetchPriority="high"
            decoding="async"
            className="shadow-soft aspect-[2/1] w-full rounded-2xl border border-slate-200 object-cover"
          />
        </div>
      ) : null}

      {/* Body + sidebar */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 lg:grid lg:grid-cols-[minmax(0,1fr)_270px] lg:gap-16">
        <div className="mx-auto w-full max-w-3xl lg:mx-0">
          {toc.length > 1 ? (
            <details className="mb-10 rounded-xl border border-slate-200 bg-slate-50 p-5 lg:hidden">
              <summary className="cursor-pointer text-sm font-semibold tracking-[0.14em] text-slate-900 uppercase">
                On this page
              </summary>
              <ol className="mt-4 space-y-2.5 text-[15px] font-medium">
                {toc.map((entry) => (
                  <li key={entry.id}>
                    <a href={`#${entry.id}`} className="hover:text-eyebrow text-slate-600">
                      {entry.text}
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          ) : null}

          <div className="blog-article">
            <MDXRemote
              source={post.body}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </div>

          {/* Top-of-funnel email capture — every article offers the lead magnet. */}
          <LeadMagnetSignup />

          {post.tags.some((tag) => ["Compliance", "GDPR", "CAN-SPAM"].includes(tag)) ? (
            <aside className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-950">Official references</h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <li>
                  <Link className="text-eyebrow font-medium hover:underline" href="https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business">
                    FTC CAN-SPAM Act compliance guide
                  </Link>
                </li>
                <li>
                  <Link className="text-eyebrow font-medium hover:underline" href="https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/legal-grounds-processing-data_en">
                    European Commission GDPR legal grounds for processing data
                  </Link>
                </li>
              </ul>
            </aside>
          ) : null}

          {/* Author card */}
          <aside className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span
                aria-hidden
                className="bg-brand-soft text-eyebrow flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-xl font-bold"
              >
                N
              </span>
              <div>
                <p className="text-eyebrow text-xs font-semibold tracking-[0.14em] uppercase">
                  Written by
                </p>
                <h2 className="mt-1.5 text-xl font-semibold text-slate-950">{defaultAuthor.name}</h2>
                <p className="text-sm font-medium text-slate-500">{defaultAuthor.role}</p>
                <p className="mt-3 leading-7 text-slate-600">{defaultAuthor.bio}</p>
                <Link
                  href={founderConfig.href}
                  className="text-eyebrow mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                >
                  More about the founder
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Related posts */}
          {related.length > 0 ? (
            <section className="mt-14" aria-label="Related articles">
              <h2 className="text-2xl font-semibold text-slate-950">Continue reading</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group shadow-soft hover:shadow-soft-lg flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 transition hover:-translate-y-0.5"
                  >
                    <p className="text-eyebrow text-xs font-semibold tracking-[0.14em] uppercase">
                      {item.tags[0]}
                    </p>
                    <h3 className="mt-2 text-lg leading-snug font-semibold text-slate-950 group-hover:underline">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                    <p className="mt-4 text-xs font-medium text-slate-500">
                      {item.readingTime} ·{" "}
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {/* Related product resources */}
          <nav
            aria-label="Related Dentoku Dev pages"
            className="mt-14 border-t border-slate-200 pt-8"
          >
            <h2 className="text-sm font-semibold tracking-[0.14em] text-slate-900 uppercase">
              Related resources
            </h2>
            <ul className="mt-4 grid gap-2 text-sm font-medium sm:grid-cols-2">
              <li>
                <Link className="text-eyebrow hover:underline" href="/emailmagnet">
                  EmailMagnet Chrome email extractor
                </Link>
              </li>
              <li>
                <Link className="text-eyebrow hover:underline" href="/pricing">
                  EmailMagnet Free vs PRO pricing
                </Link>
              </li>
              <li>
                <Link className="text-eyebrow hover:underline" href="/docs/getting-started">
                  How to extract emails with EmailMagnet
                </Link>
              </li>
              <li>
                <Link className="text-eyebrow hover:underline" href="/docs/responsible-use">
                  Responsible email extraction guide
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Desktop sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-8">
            {toc.length > 1 ? (
              <nav aria-label="Table of contents">
                <p className="text-xs font-semibold tracking-[0.14em] text-slate-900 uppercase">
                  On this page
                </p>
                <ol className="mt-4 space-y-2.5 border-l border-slate-200 text-sm font-medium">
                  {toc.map((entry) => (
                    <li key={entry.id}>
                      <a
                        href={`#${entry.id}`}
                        className="hover:text-eyebrow hover:border-brand -ml-px block border-l-2 border-transparent py-0.5 pl-4 leading-snug text-slate-500"
                      >
                        {entry.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}
            <div className="bg-brand-soft rounded-2xl p-6">
              <p className="text-eyebrow text-xs font-semibold tracking-[0.14em] uppercase">
                Put it into practice
              </p>
              <p className="mt-2.5 text-base leading-7 font-semibold text-slate-950">
                Build your next lead list while you browse.
              </p>
              <Button asChild size="sm" className="mt-4 font-semibold">
                <Link href="/emailmagnet">
                  Try EmailMagnet free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
