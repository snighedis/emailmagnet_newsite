import { Composition } from "remotion";
import { HomepageHero, FPS, DURATION_IN_FRAMES, WIDTH, HEIGHT } from "./HomepageHero";
import { LaunchFilm, FILM_DURATION, FILM_FPS, FILM_HEIGHT, FILM_WIDTH } from "./LaunchFilm";
import { StudioHero, HERO2_DURATION, HERO2_FPS, HERO2_HEIGHT, HERO2_WIDTH } from "./StudioHero";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HomepageHero"
        component={HomepageHero}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      {/* 25 s 16:9 launch film (docs/shotlist.md), one render per locale. */}
      <Composition
        id="LaunchFilmEn"
        component={LaunchFilm}
        durationInFrames={FILM_DURATION}
        fps={FILM_FPS}
        width={FILM_WIDTH}
        height={FILM_HEIGHT}
        defaultProps={{ lang: "en" as const }}
      />
      <Composition
        id="LaunchFilmIt"
        component={LaunchFilm}
        durationInFrames={FILM_DURATION}
        fps={FILM_FPS}
        width={FILM_WIDTH}
        height={FILM_HEIGHT}
        defaultProps={{ lang: "it" as const }}
      />
      {/* 21.5 s 2:1 homepage hero loop, one render per locale. */}
      <Composition id="StudioHeroIt" component={StudioHero} durationInFrames={HERO2_DURATION} fps={HERO2_FPS} width={HERO2_WIDTH} height={HERO2_HEIGHT} defaultProps={{ lang: "it" as const }} />
      <Composition id="StudioHeroEn" component={StudioHero} durationInFrames={HERO2_DURATION} fps={HERO2_FPS} width={HERO2_WIDTH} height={HERO2_HEIGHT} defaultProps={{ lang: "en" as const }} />
    </>
  );
};
