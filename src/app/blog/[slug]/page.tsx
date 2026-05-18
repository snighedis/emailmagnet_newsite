import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/marketing/json-ld";
import { blogPosts, getBlogPost } from "@/content/blog";
import { founderConfig, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
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

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white py-16 md:py-24">
      <JsonLd data={buildArticleSchema(post)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.name, href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ])}
      />
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-4xl font-semibold tracking-normal text-balance text-slate-950 md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 text-xl leading-9 text-slate-600">{post.description}</p>
        <p className="mt-5 text-sm font-medium text-slate-500">
          <Link href={founderConfig.href} className="hover:text-[#c43618] hover:underline">
            Dentoku Dev editorial team
          </Link>{" "}
          · {post.readingTime} · Published {post.date} · Last updated {post.updated}
        </p>
        <aside className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-950">Author context</h2>
          <p className="mt-2 leading-7 text-slate-600">
            This guide is maintained by the Dentoku Dev editorial team, the studio behind
            EmailMagnet and other focused browser and productivity tools.
          </p>
        </aside>
        <div className="mt-10 rounded-xl border border-teal-100 bg-teal-50 p-5">
          <h2 className="text-lg font-semibold text-slate-950">Quick answer</h2>
          <p className="mt-2 leading-7 text-slate-700">{post.description}</p>
        </div>
        <nav aria-label="Related Dentoku Dev pages" className="mt-6 rounded-xl border border-slate-200 p-5">
          <h2 className="text-lg font-semibold text-slate-950">Related pages</h2>
          <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            <li>
              <Link className="font-medium text-[#c43618] hover:underline" href="/emailmagnet">
                EmailMagnet Chrome email extractor
              </Link>
            </li>
            <li>
              <Link className="font-medium text-[#c43618] hover:underline" href="/pricing">
                EmailMagnet Free vs PRO pricing
              </Link>
            </li>
            <li>
              <Link className="font-medium text-[#c43618] hover:underline" href="/docs/getting-started">
                How to extract emails with EmailMagnet
              </Link>
            </li>
            <li>
              <Link className="font-medium text-[#c43618] hover:underline" href="/docs/responsible-use">
                Responsible email extraction guide
              </Link>
            </li>
          </ul>
        </nav>
        <div className="blog-article mt-14">
          <MDXRemote source={post.body} />
        </div>
        {post.tags.some((tag) => ["Compliance", "GDPR", "CAN-SPAM"].includes(tag)) ? (
          <aside className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">Official references</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              <li>
                <Link className="font-medium text-[#c43618] hover:underline" href="https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business">
                  FTC CAN-SPAM Act compliance guide
                </Link>
              </li>
              <li>
                <Link className="font-medium text-[#c43618] hover:underline" href="https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/legal-grounds-processing-data_en">
                  European Commission GDPR legal grounds for processing data
                </Link>
              </li>
            </ul>
          </aside>
        ) : null}
      </div>
    </article>
  );
}
