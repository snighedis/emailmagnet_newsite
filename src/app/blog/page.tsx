import Link from "next/link";
import { ContactMailtoForm } from "@/components/marketing/contact-mailto-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { siteConfig } from "@/data/site";
import { blogPosts } from "@/content/blog";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "EmailMagnet Blog and Guides",
  description:
    "Read Dentoku Dev articles about EmailMagnet, email extraction workflows, responsible outreach, Chrome extension use cases, and product updates.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
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
              <Link className="text-eyebrow hover:underline" href="/emailmagnet">
                EmailMagnet product page
              </Link>
              <Link className="text-eyebrow hover:underline" href="/docs">
                EmailMagnet docs
              </Link>
              <Link className="text-eyebrow hover:underline" href="/faq">
                FAQ
              </Link>
              <Link className="text-eyebrow hover:underline" href="/overview">
                Dentoku Dev overview
              </Link>
            </div>
          </nav>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="shadow-soft hover:shadow-soft-lg h-full rounded-2xl border-slate-200/80 transition hover:-translate-y-1">
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

      <section className="bg-surface-peach px-4 py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-lg bg-surface-peach px-6 py-8 md:px-10 lg:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">
          <div className="max-w-xl">
            <span className="inline-flex rounded-sm border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              Contact us
            </span>
            <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-normal text-slate-950 md:text-5xl">
              Need help after reading?
            </h2>
            <p className="mt-5 max-w-lg text-xl leading-8 text-slate-700">
              Ask us about EmailMagnet workflows, billing, integrations, or support questions.
            </p>
          </div>

          <ContactMailtoForm supportEmail={siteConfig.supportEmail} />
        </div>
      </section>
    </>
  );
}
