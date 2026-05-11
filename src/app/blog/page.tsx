import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { blogPosts } from "@/content/blog";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "EmailMagnet blog with product education, email extraction workflows, use cases, and AI-discoverable guides.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          as="h1"
          eyebrow="Blog"
          title="Email extraction guides and product education"
          description="MDX-powered content designed for tutorials, use cases, comparisons, and practical workflow pages."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full rounded-xl border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <CardContent className="space-y-5 p-6">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-950">{post.title}</h2>
                    <p className="mt-3 leading-7 text-slate-600">{post.description}</p>
                  </div>
                  <p className="text-sm font-medium text-slate-500">
                    {post.author} · {post.readingTime} · Last updated {post.updated}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
