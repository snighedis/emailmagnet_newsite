import { Brief } from "@/components/marketing/brief";
import { HeroVideo } from "@/components/marketing/hero-video";
import { Button } from "@/components/ui/button";
import type { HomeCopy } from "@/copy/en/home";
import { LocaleLink } from "@/i18n/locale-link";

type HomeHeroProps = {
  copy: HomeCopy;
  lang: string;
};

/** The real Chrome Web Store score, shown with the products line. */
const STORE_RATING = 5.0;

/**
 * The homepage opening (docs/adr/0002 as amended; tasteskill direction "The
 * printed annual"). The title on the column line at 42% with the standfirst
 * and the two actions to its left, then the film whole, in the page margins.
 * The brief follows as the first text page: its title on the column line,
 * the questions under it, the audience and the public proof as a side note.
 */
export function HomeHero({ copy, lang }: HomeHeroProps) {
  const rating = STORE_RATING.toLocaleString(lang === "it" ? "it-IT" : "en-US", { minimumFractionDigits: 1 });

  return (
    <>
      <section data-home-hero className="bg-background">
        <div className="page-x axis gap-y-8 pt-12 pb-12 md:pt-20 md:pb-16">
          <h1 className="t-display lines text-ink lg:col-start-2 lg:row-start-1">
            {copy.hero.title.map((line, i) => (
              <span key={line} className="line">
                <span data-line style={{ "--i": i } as React.CSSProperties}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <div
            data-reveal
            style={{ "--d": 3 } as React.CSSProperties}
            className="space-y-6 lg:col-start-1 lg:row-start-1 lg:self-end lg:pr-12"
          >
            <p className="t-lead text-ink max-w-[32ch]">{copy.hero.standfirst}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button asChild size="xl">
                <a href={copy.hero.primaryCta.href}>{copy.hero.primaryCta.label}</a>
              </Button>
              <LocaleLink href={copy.hero.secondaryCta.href} className="text-link text-ink text-base font-medium">
                {copy.hero.secondaryCta.label}
              </LocaleLink>
            </div>
          </div>
        </div>

        {/* The film whole, at its own 2:1 shape, inside the page margins: a crop
            loses the scene it tells. */}
        <div className="page-x pb-16 md:pb-24">
          <HeroVideo
            band
            className="w-full"
            src={copy.heroVideo.src}
            poster={copy.heroVideo.poster}
            label={copy.heroVideo.label}
            controls={copy.heroVideo.controls}
            aiDisclosure={copy.heroVideo.aiDisclosure}
            // Over the film's own label (right 24 / bottom 20 of 1920x960; 28 / 24 of
            // 1080x1350 in the phone cut), 4px further out and opaque so the small one never
            // shows past its round corners. From 1024px the film's own label reads by itself.
            aiDisclosureClassName="bg-ink right-[calc(2.6%-4px)] bottom-[calc(1.78%-4px)] md:right-[calc(1.25%-4px)] md:bottom-[calc(2.08%-4px)] lg:hidden"
            phone={copy.heroVideo.phone}
            width={1728}
            height={864}
          />
        </div>
      </section>

      <section id="brief" className="bg-surface-muted scroll-mt-16">
        <div className="page-x axis gap-y-8 py-16 md:py-24">
          <div className="space-y-3 lg:col-start-2">
            <h2 data-reveal className="t-2 text-ink">
              {copy.brief.title}
            </h2>
            <p data-reveal style={{ "--d": 1 } as React.CSSProperties} className="t-lead text-ink max-w-[52ch]">
              {copy.brief.lede}
            </p>
          </div>
          <div data-reveal style={{ "--d": 2 } as React.CSSProperties} className="lg:col-start-2">
            <Brief copy={copy.brief} lang={lang} layout="stack" />
          </div>
          <p
            data-reveal
            className="t-body text-ink max-w-[34ch] lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:self-end lg:pr-12"
          >
            {copy.proof.audience} {copy.proof.rating.replace("{rating}", rating)}
          </p>
        </div>
      </section>
    </>
  );
}
