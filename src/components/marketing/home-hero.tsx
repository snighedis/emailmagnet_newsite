import { Brief } from "@/components/marketing/brief";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { HeroVideo } from "@/components/marketing/hero-video";
import { TrustBar } from "@/components/marketing/trust-bar";
import type { HomeCopy } from "@/copy/en/home";

type HomeHeroProps = {
  copy: HomeCopy;
  lang: string;
};

/**
 * The homepage opening (docs/adr/0002, redesign ticket 04): heading, then the
 * whole brief in one card, then the film as proof. The "For" line and the store
 * rating sit under the brief so the first question lands in the first screen on
 * a phone.
 */
export function HomeHero({ copy, lang }: HomeHeroProps) {
  return (
    <div data-home-hero className="space-y-10 md:space-y-14">
      <div className="mx-auto max-w-3xl space-y-5 text-center">
        <Eyebrow className="text-[12px] font-medium">{copy.hero.eyebrow}</Eyebrow>
        <h1 className="type-display text-ink">
          {copy.hero.titleLead} <span className="text-brand">{copy.hero.titleAccent}</span>
        </h1>
        <p className="mx-auto max-w-xl text-lg leading-8 text-stone-700">{copy.hero.subhead}</p>
      </div>

      <div
        id="brief"
        className="mx-auto max-w-5xl scroll-mt-24 space-y-8 rounded-3xl border border-stone-200 bg-white/60 p-5 md:p-10"
      >
        <div className="space-y-2">
          <Eyebrow index="00">{copy.brief.eyebrow}</Eyebrow>
          <p className="type-h3 text-ink">{copy.brief.title}</p>
          <p className="text-base leading-7 text-stone-600">{copy.brief.lede}</p>
        </div>
        <Brief copy={copy.brief} lang={lang} layout="stack" />
      </div>

      {/* Who the studio works for, and the public proof, under the brief */}
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <p className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 font-mono text-xs tracking-[0.08em] text-stone-500 uppercase">
          <span className="text-eyebrow">{copy.audience.label}</span>
          {copy.audience.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
        <TrustBar
          rating={5.0}
          reviewLabel={copy.trustBar.reviewLabel}
          labels={copy.trustBar.labels}
          items={[copy.hero.trustNote]}
        />
      </div>

      <HeroVideo
        src={copy.heroVideo.src}
        poster={copy.heroVideo.poster}
        label={copy.heroVideo.label}
        controls={copy.heroVideo.controls}
        aiDisclosure={copy.heroVideo.aiDisclosure}
        width={1728}
        height={864}
      />
    </div>
  );
}
