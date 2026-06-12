import Link from "next/link";
import { ContactMailtoForm } from "@/components/marketing/contact-mailto-form";
import { ArrowRight } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { siteConfig } from "@/data/site";
import { defaultAuthor } from "@/data/authors";
import { blogPosts } from "@/content/blog";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/dates";

export const metadata = createMetadata({
  title: "EmailMagnet Blog and Guides",
  description:
    "Read Dentoku Dev articles about EmailMagnet, email extraction workflows, responsible outreach, Chrome extension use cases, and product updates.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

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
          {featured ? (
            <Link
              href={`/blog/${featured.slug}`}
              className="group bg-surface-peach shadow-soft hover:shadow-soft-lg mt-12 block rounded-3xl border border-slate-200/70 p-8 transition hover:-translate-y-1 md:p-12"
            >
              <p className="text-eyebrow text-xs font-semibold tracking-[0.16em] uppercase">
                Latest article
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-normal text-balance text-slate-950 group-hover:underline md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                {featured.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-slate-500">
                <span className="font-semibold text-slate-900">{defaultAuthor.name}</span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" />
                <span>{featured.readingTime}</span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" />
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
              </div>
              <span className="text-eyebrow mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ) : null}

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="shadow-soft hover:shadow-soft-lg h-full rounded-2xl border-slate-200/80 transition hover:-translate-y-1">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="mt-5 text-2xl leading-snug font-semibold text-slate-950 group-hover:underline">
                      {post.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 leading-7 text-slate-600">{post.description}</p>
                    <p className="mt-auto pt-5 text-sm font-medium text-slate-500">
                      {defaultAuthor.name} · {post.readingTime} ·{" "}
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
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
