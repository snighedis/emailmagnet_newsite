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
          description="Practical articles about EmailMagnet, email extraction workflows, responsible use, and browser-based productivity."
        />
        <nav aria-label="Blog related resources" className="mx-auto mt-8 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
          <h2 className="text-lg font-semibold text-slate-950">Start with the main resources</h2>
          <div className="mt-3 flex flex-wrap justify-center gap-4 text-sm font-medium">
            <Link className="text-[#c43618] hover:underline" href="/emailmagnet">
              EmailMagnet product page
            </Link>
            <Link className="text-[#c43618] hover:underline" href="/docs">
              EmailMagnet docs
            </Link>
            <Link className="text-[#c43618] hover:underline" href="/faq">
              FAQ
            </Link>
            <Link className="text-[#c43618] hover:underline" href="/overview">
              Dentoku Dev overview
            </Link>
          </div>
        </nav>
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
