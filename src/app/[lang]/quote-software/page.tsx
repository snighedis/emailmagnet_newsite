import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { AutomationFragment, OnPhoto } from "@/components/marketing/automation-fragment";
import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { PhotoCredits } from "@/components/marketing/photo";
import { ProposalClose } from "@/components/marketing/proposal-close";
import { QuoteDemo } from "@/components/marketing/quote-demo";
import { Button } from "@/components/ui/button";
import { getPageCopy } from "@/copy";
import { localizedHref } from "@/i18n/href";
import { LocaleLink } from "@/i18n/locale-link";
import { resolveLang } from "@/i18n/params";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema, buildServicePageSchema } from "@/lib/schema";

const path = "/quote-software";

type QuotesSheet = ReturnType<typeof getPageCopy>["quotes"]["choice"]["sheet"];

export async function generateMetadata({ params }: PageProps<"/[lang]/quote-software">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = getPageCopy(lang).quotes;
  return createMetadata({ title: meta.title, description: meta.description, path, lang });
}

/** Stagger index for a revealed element (globals.css, [data-reveal]). */
const d = (n: number) => ({ "--d": n }) as CSSProperties;

/**
 * Quote software, the first automation page (the home's "printed annual"
 * system, as on About): the title and standfirst left of the column line, the
 * workbench photograph with the filled-in quote right of it; the live price list that fills in the quote; the honest choice
 * between a ready program, Excel and custom work; what the software does, as
 * the orange stair; the method; the questions; the proposal card as the close.
 */
export default async function QuoteSoftwarePage({ params }: PageProps<"/[lang]/quote-software">) {
  const lang = await resolveLang(params);
  const copy = getPageCopy(lang).quotes;
  const { closing, automate } = getPageCopy(lang).home;
  const fragments = automate.fragments;
  const steps = copy.flow.steps;
  const indent = ["lg:ml-0", "lg:ml-[16.66%]", "lg:ml-[33.33%]", "lg:ml-[50%]"];
  const indentTablet = ["md:ml-0", "md:ml-[13.33%]", "md:ml-[26.66%]", "md:ml-[40%]"];
  const indentPhone = ["ml-0", "ml-[6vw]", "ml-[12vw]", "ml-[18vw]"];

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema(
          [
            { name: "Dentoku Dev", href: "/" },
            { name: copy.breadcrumb, href: path },
          ],
          lang,
        )}
      />
      <JsonLd
        data={buildServicePageSchema({ name: copy.breadcrumb, description: copy.meta.description, path }, lang)}
      />
      <JsonLd data={buildFaqSchema(copy.faq.items, lang)} />
      <HomeReveal />

      {/* The title and the standfirst on the column line's left; on its right the
          workbench, with the quote the software filled in over the picture's foot */}
      <section className="bg-background">
        <div className="page-x axis gap-y-12 pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="space-y-8 lg:self-center lg:pr-12">
            <h1 className="t-display lines text-ink">
              {copy.title.map((line, i) => (
                <span key={line} className="line">
                  <span data-line style={{ "--i": i } as CSSProperties}>
                    {line}
                    {i < copy.title.length - 1 ? " " : null}
                  </span>
                </span>
              ))}
            </h1>
            {/* lg:pr-18 on top of the column's pr-12: the hero card leans 3.5rem out of
                the picture towards the standfirst, which keeps 4rem clear of it. */}
            <div data-reveal style={d(3)} className="space-y-6 lg:pr-18">
              <p className="t-lead text-ink max-w-[38ch]">{copy.standfirst}</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button asChild size="xl">
                  <a href={localizedHref(lang, copy.primaryCta.href)}>{copy.primaryCta.label}</a>
                </Button>
                <LocaleLink href={copy.secondaryCta.href} className="text-link text-ink text-base font-medium">
                  {copy.secondaryCta.label}
                </LocaleLink>
              </div>
            </div>
          </div>
          <AutomationFragment
            kind="quote"
            copy={fragments}
            photo={{
              name: "quotesLaptop",
              alt: copy.photos.hero,
              sizes: "(min-width: 1024px) 55vw, 100vw",
              position: "100% 50%",
              priority: true,
              ratio: "aspect-[3/2]",
              side: "left",
            }}
          />
        </div>
      </section>

      {/* The live thing: the sample price list fills in the quote */}
      <section aria-labelledby="demo-heading" className="bg-background">
        <div className="page-x pb-20 md:pb-32">
          <div className="axis gap-y-4">
            <h2 id="demo-heading" data-reveal className="t-3 text-ink">
              {copy.demo.heading}
            </h2>
            <p data-reveal style={d(1)} className="t-lead text-ink max-w-[52ch]">
              {copy.demo.lead}
            </p>
          </div>
          <div data-reveal style={d(2)} className="mt-10 md:mt-14">
            <QuoteDemo copy={copy.demo} />
          </div>
        </div>
      </section>

      {/* The honest choice: one reading column on the column line, bold run-ins */}
      <section aria-labelledby="choice-heading" className="bg-surface-muted">
        <div className="page-x axis gap-y-10 py-20 md:py-32">
          <div className="space-y-10 lg:self-start lg:pr-16">
            <h2 id="choice-heading" data-reveal className="t-3 text-ink">
              {copy.choice.heading}
            </h2>
            {/* Today's way: the quote written by hand, and the same quote typed into Excel */}
            <div data-reveal style={d(1)}>
              <OnPhoto
                photo={{
                  name: "quotesHandwritten",
                  alt: copy.photos.handwritten,
                  sizes: "(min-width: 1024px) 38vw, 100vw",
                  ratio: "aspect-[4/3]",
                }}
              >
                <QuoteSheet sheet={copy.choice.sheet} />
              </OnPhoto>
            </div>
          </div>
          {/* lg:pl-14 keeps the text clear of the sheet card leaning out of the picture. */}
          <div className="max-w-[40rem] space-y-10 lg:pl-14">
            {copy.choice.items.map((item, i) => (
              <p key={item.lead} data-reveal style={d(i)} className="t-lead text-ink">
                <strong className="font-semibold">{item.lead}</strong> {item.body}
              </p>
            ))}
            <p data-reveal style={d(3)} className="t-3 t-3-compact text-ink">
              {copy.choice.note}
            </p>
          </div>
        </div>
      </section>

      {/* What the software does: the four stages step across the orange field */}
      <section aria-labelledby="flow-heading" className="bg-brand text-ink">
        <div className="page-x py-20 md:py-32">
          <h2 id="flow-heading" data-reveal className="t-3">
            {copy.flow.heading}
          </h2>
          <ol className="mt-12 space-y-10 md:mt-16 md:space-y-14">
            {steps.map((step, i) => (
              <li
                key={step.title}
                data-reveal
                style={d(i)}
                className={`${indentPhone[i]} ${indentTablet[i]} ${indent[i]} md:w-[60%] lg:w-auto`}
              >
                <h3 className="t-2 whitespace-nowrap max-sm:whitespace-normal">{step.title}</h3>
                <p className="t-body mt-3 max-w-[38ch] md:max-w-none lg:max-w-[38ch]">{step.description}</p>
              </li>
            ))}
          </ol>
          {/* The stair ends on the right; the copied data answers it on the left */}
          <div className="mt-16 grid gap-8 md:mt-20 lg:grid-cols-2 lg:items-end lg:gap-0">
            <div data-reveal className="md:w-[60%] lg:w-auto lg:pr-14">
              <AutomationFragment kind="data" copy={{ ...fragments, data: copy.flow.data }} />
            </div>
            <p data-reveal style={d(1)} className="t-lead max-w-[40ch] font-semibold">
              {copy.flow.stays}
            </p>
          </div>
        </div>
      </section>

      {/* The method, three columns of reading text */}
      <section aria-labelledby="method-heading" className="bg-background">
        <div className="page-x py-20 md:py-32">
          <h2 id="method-heading" data-reveal className="t-2 text-ink">
            {copy.method.heading}
          </h2>
          <div className="mt-10 grid gap-10 md:mt-16 lg:grid-cols-3 lg:gap-8">
            {copy.method.items.map((item, i) => (
              <div key={item.lead} data-reveal style={d(i)} className="max-w-[52ch] space-y-3">
                <h3 className="t-lead text-ink font-semibold">{item.lead}</h3>
                <p className="t-body text-ink lg:text-[18px] lg:leading-[1.6]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The questions: the home's accordion of filled tiles, native <details> */}
      <section aria-labelledby="faq-heading" className="bg-background">
        <div className="page-x grid gap-10 pb-20 md:pb-32 lg:grid-cols-12 lg:gap-8">
          <h2
            id="faq-heading"
            data-reveal
            className="t-3 text-ink lg:sticky lg:top-24 lg:col-span-4 lg:self-start lg:pr-8"
          >
            {copy.faq.title}
          </h2>
          <div data-reveal style={d(1)} className="space-y-1.5 lg:col-span-8 lg:space-y-2">
            {copy.faq.items.map((item, i) => (
              <details
                key={item.question}
                name="quotes-faq"
                open={i === 0}
                className="faq-item bg-surface-muted open:bg-brand not-open:hover:bg-[#e7e7e4] text-ink group transition-colors duration-[240ms]"
              >
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 text-[18px] leading-snug font-medium select-none md:min-h-18 md:px-6 md:text-[20px] [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
                    <span className="bg-ink absolute top-1/2 left-0 h-[3px] w-4 -translate-y-1/2" />
                    <span className="bg-ink absolute top-0 left-1/2 h-4 w-[3px] -translate-x-1/2 transition-transform duration-[240ms] ease-[var(--ease-out)] group-open:rotate-90 motion-reduce:transition-none" />
                  </span>
                </summary>
                <p className="faq-answer t-body max-w-[52ch] px-5 pb-6 md:px-6">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PhotoCredits
        names={["quotesLaptop", "quotesHandwritten"]}
        label={copy.photos.creditLabel}
        source={copy.photos.creditSource}
      />

      <ProposalClose closing={closing} actionHref={localizedHref(lang, "/#brief")} />
    </>
  );
}

/**
 * The Excel option as a piece of interface: the same quote in a spreadsheet,
 * with its grid (a real table keeps its lines). No orange dot: nothing here was
 * done by the software. Decorative (OnPhoto hides it from screen readers); the
 * text beside it makes the point.
 */
function QuoteSheet({ sheet }: { sheet: QuotesSheet }) {
  const cell = "border-border border px-3 py-2 text-base";
  return (
    <>
      <p className="text-ink text-base font-semibold">{sheet.file}</p>
      <table className="text-ink mt-3 w-full border-collapse tabular-nums">
        <thead>
          <tr className="bg-surface-muted">
            {sheet.columns.map((column, i) => (
              <th key={column} className={`${cell} text-sm font-medium ${i === 1 ? "text-right" : "text-left"}`}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sheet.rows.map(([item, amount]) => (
            <tr key={item}>
              <td className={cell}>{item}</td>
              <td className={`${cell} text-right whitespace-nowrap`}>{amount}</td>
            </tr>
          ))}
          <tr className="font-semibold">
            <td className={cell}>{sheet.totalLabel}</td>
            <td className={`${cell} text-right whitespace-nowrap`}>{sheet.total}</td>
          </tr>
        </tbody>
      </table>
      <p className="text-muted-foreground mt-4 text-sm">{sheet.status}</p>
    </>
  );
}
