import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/marketing/json-ld";
import { blogPosts, getBlogPost } from "@/content/blog";
import { siteConfig } from "@/data/site";
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
          {post.author} · {post.readingTime} · Published {post.date} · Last updated {post.updated}
        </p>
        <div className="blog-article mt-14">
          <MDXRemote source={post.body} />
        </div>
      </div>
    </article>
  );
}
