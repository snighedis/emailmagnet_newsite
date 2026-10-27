import type { ComponentProps } from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { Button } from "@/components/ui/button";
import { FramedPhoto, RelatedLinks, d } from "@/components/marketing/editorial";
import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { getCopy, getPageCopy } from "@/copy";
import { LeadMagnetSignup } from "@/components/marketing/lead-magnet-signup";
import { ReadingProgress } from "@/components/marketing/reading-progress";
import { blogPosts, getBlogPost, type BlogPost } from "@/content/blog";
import { defaultAuthor } from "@/data/authors";
import { founderConfig, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/dates";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { extractToc } from "@/lib/toc";
import { LocaleLink } from "@/i18n/locale-link";

const resources = [
  { label: "EmailMagnet Chrome email extractor", href: "/emailmagnet" },
  { label: "EmailMagnet Free vs PRO pricing", href: "/pricing" },
  { label: "How to extract emails with EmailMagnet", href: "/docs/getting-started" },
  { label: "Responsible email extraction guide", href: "/docs/responsible-use" },
];

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
    <article>
      <ReadingProgress />
      <HomeReveal />
      <JsonLd data={buildArticleSchema(post)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.name, href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ])}
      />

      {/* The title on the column line, the byline and dates to its left, the cover
          across the page below them */}
      <header className="bg-background">
        <div className="page-x axis gap-x-0 gap-y-8 pt-12 pb-16 md:pt-20 md:pb-24">
          <h1 className="t-article text-ink lg:col-start-2 lg:row-start-1">{post.title}</h1>
          <div data-reveal style={d(2)} className="t-body text-ink space-y-4 lg:col-start-1 lg:row-start-1 lg:self-start lg:pr-12">
            <LocaleLink href="/blog" className="text-link block w-fit font-medium">
              All articles
            </LocaleLink>
            <p className="t-lead">{post.description}</p>
            <p>
              By{" "}
              <LocaleLink href={founderConfig.href} className="text-link font-medium">
                {defaultAuthor.name}
              </LocaleLink>
              , {post.readingTime}.
              <br />
              Published <time dateTime={post.date}>{formatDate(post.date)}</time>
              {wasUpdated ? (
                <>
                  , updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </>
              ) : null}
              .
            </p>
          </div>
          {post.featuredImage ? (
            <figure data-reveal style={d(3)} className="lg:col-span-2 lg:row-start-2">
              <FramedPhoto
                src={post.featuredImage}
                alt={post.featuredImageAlt ?? `Cover image for "${post.title}"`}
                frame="aspect-[3/2] lg:aspect-[21/9]"
                eager
              />
            </figure>
          ) : null}
        </div>
      </header>

      {/* The text on the column line, its contents and the product beside it */}
      <div className="bg-background">
        <div className="page-x axis gap-y-10 pb-20 md:pb-32">
          <aside className="space-y-10 lg:sticky lg:top-24 lg:self-start lg:pr-12">
            {toc.length > 1 ? (
              <nav aria-label="Table of contents" className="space-y-3">
                <h2 className="t-lead text-ink font-semibold">On this page</h2>
                <ul className="t-body text-ink space-y-2">
                  {toc.map((entry) => (
                    <li key={entry.id}>
                      <a href={`#${entry.id}`} className="text-link">
                        {entry.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
            <div className="bg-surface-muted text-ink hidden space-y-4 p-6 lg:block">
              <p className="t-lead font-semibold">Build your next lead list while you browse.</p>
              <Button asChild size="lg">
                <LocaleLink href="/emailmagnet">Try EmailMagnet free</LocaleLink>
              </Button>
            </div>
          </aside>

          <div className="max-w-[44rem] min-w-0">
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

            {/* Top-of-funnel email capture: every article offers the lead magnet. */}
            <LeadMagnetSignup />

            {post.tags.some((tag) => ["Compliance", "GDPR", "CAN-SPAM"].includes(tag)) ? (
              <aside className="mt-14 space-y-3">
                <h2 className="t-lead text-ink font-semibold">Official references</h2>
                <ul className="t-body text-ink space-y-2">
                  <li>
                    <a
                      className="text-link"
                      href="https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FTC CAN-SPAM Act compliance guide
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-link"
                      href="https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/legal-grounds-processing-data_en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      European Commission GDPR legal grounds for processing data
                    </a>
                  </li>
                </ul>
              </aside>
            ) : null}

            <aside className="mt-14 space-y-3">
              <h2 className="t-3 text-ink">Written by {defaultAuthor.name}</h2>
              <p className="t-body text-ink">{defaultAuthor.role}</p>
              <p className="t-body text-ink">{defaultAuthor.bio}</p>
              <LocaleLink href={founderConfig.href} className="text-link text-ink inline-block text-base font-medium">
                More about the founder
              </LocaleLink>
            </aside>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="bg-surface-muted" aria-labelledby="continue-reading">
          <div className="page-x axis gap-y-6 pt-20 md:pt-28">
            <h2 id="continue-reading" data-reveal className="t-2 text-ink lg:col-start-2">
              Continue reading
            </h2>
          </div>
          <ul className="page-x mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {related.map((item, i) => (
              <li key={item.slug} data-reveal style={d(i)} className="group">
                <LocaleLink href={`/blog/${item.slug}`} className="block">
                  {item.featuredImage ? (
                    <FramedPhoto src={item.featuredImage} alt="" ground="bg-background" />
                  ) : null}
                  <span className="t-3 text-ink mt-5 block underline-offset-[0.15em] group-hover:underline">
                    {item.title}
                  </span>
                  <span className="t-body text-ink mt-2 block max-w-[52ch]">{item.description}</span>
                  <span className="t-body text-ink mt-3 block">
                    {item.readingTime}, <time dateTime={item.date}>{formatDate(item.date)}</time>
                  </span>
                </LocaleLink>
              </li>
            ))}
          </ul>
          <div className="page-x axis pt-14 pb-20 md:pb-28">
            <div className="lg:col-start-2">
              <RelatedLinks title="Related resources" ariaLabel="Related Dentoku Dev pages" links={resources} />
            </div>
          </div>
        </section>
      ) : null}

      <ProductShowcase
        products={getCopy("en").site.products}
        lang="en"
        title="More from the studio"
        caption="We build, publish and maintain our products ourselves."
        overviewLink={getPageCopy("en").home.products.overviewLink}
        exclude="/emailmagnet"
        limit={2}
      />
    </article>
  );
}
