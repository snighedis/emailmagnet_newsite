import { ContactMailtoForm } from "@/components/marketing/contact-mailto-form";
import { HomeReveal } from "@/components/marketing/home-reveal";
import { FramedPhoto, PageOpening, RelatedLinks, SideSection, d } from "@/components/marketing/editorial";
import { siteConfig } from "@/data/site";
import { defaultAuthor } from "@/data/authors";
import { blogPosts, type BlogPost } from "@/content/blog";
import { LocaleLink } from "@/i18n/locale-link";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/dates";

export const metadata = createMetadata({
  title: "EmailMagnet Blog and Guides",
  description:
    "Read Dentoku Dev articles about EmailMagnet, email extraction workflows, responsible outreach, Chrome extension use cases, and product updates.",
  path: "/blog",
});

const related = [
  { label: "EmailMagnet product page", href: "/emailmagnet" },
  { label: "EmailMagnet docs", href: "/docs" },
  { label: "FAQ", href: "/faq" },
  { label: "Dentoku Dev overview", href: "/overview" },
];

function Byline({ post }: { post: BlogPost }) {
  return (
    <span className="t-body text-ink block">
      {defaultAuthor.name}, {post.readingTime}, <time dateTime={post.date}>{formatDate(post.date)}</time>
    </span>
  );
}

/**
 * Blog (redesign: inner pages in the homepage's system). The title on the
 * column line, the latest article large with its cover whole, the others two to
 * a row like the product grid, then the free form for questions after reading.
 */
export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <HomeReveal />

      <PageOpening
        title={["Guides and", "articles."]}
        standfirst="Practical articles on EmailMagnet, email extraction workflows, responsible use and browser productivity, written by the person who builds the tools."
        primary={{ label: "Read the latest article", href: `/blog/${featured.slug}` }}
        secondary={{ label: "EmailMagnet docs", href: "/docs" }}
      />

      <section className="bg-surface-muted">
        <div className="page-x axis gap-y-8 py-20 md:py-28">
          <div className="space-y-5 lg:col-start-2 lg:row-start-1">
            <h2 data-reveal className="t-article text-ink">
              <LocaleLink href={`/blog/${featured.slug}`} className="underline-offset-[0.15em] hover:underline">
                {featured.title}
              </LocaleLink>
            </h2>
            <p data-reveal style={d(1)} className="t-lead text-ink max-w-[52ch]">
              {featured.description}
            </p>
            <div data-reveal style={d(2)}>
              <Byline post={featured} />
            </div>
          </div>
          {featured.featuredImage ? (
            <LocaleLink
              href={`/blog/${featured.slug}`}
              data-reveal
              style={d(1)}
              className="group block self-start overflow-hidden lg:col-start-1 lg:row-start-1 lg:mr-12"
              tabIndex={-1}
              aria-hidden="true"
            >
              <FramedPhoto src={featured.featuredImage} alt="" ground="bg-background" eager />
            </LocaleLink>
          ) : null}
        </div>
      </section>

      <section className="bg-background">
        <div className="page-x axis gap-y-6 pt-20 md:pt-32">
          <h2 data-reveal className="t-2 text-ink lg:col-start-2">
            All articles
          </h2>
        </div>
        <ul className="page-x mt-12 grid gap-x-8 gap-y-14 pb-20 md:mt-16 md:grid-cols-2 md:pb-32">
          {rest.map((post, i) => (
            <li key={post.slug} data-reveal style={d(i % 2)} className="group">
              <LocaleLink href={`/blog/${post.slug}`} className="block">
                {post.featuredImage ? (
                  <FramedPhoto src={post.featuredImage} alt="" />
                ) : null}
                <span className="t-3 text-ink mt-5 block underline-offset-[0.15em] group-hover:underline">
                  {post.title}
                </span>
                <span className="t-body text-ink mt-2 block max-w-[52ch]">{post.description}</span>
                <span className="mt-3 block">
                  <Byline post={post} />
                </span>
              </LocaleLink>
            </li>
          ))}
        </ul>
      </section>

      <SideSection
        tone="muted"
        title="Need help after reading?"
        lead="Ask us about EmailMagnet workflows, billing, integrations or support."
        aside={<RelatedLinks title="Start with the main resources" ariaLabel="Blog related resources" links={related} />}
      >
        <div className="max-w-[44rem]">
          <ContactMailtoForm supportEmail={siteConfig.supportEmail} className="bg-background p-6 md:p-10" />
        </div>
      </SideSection>
    </>
  );
}
