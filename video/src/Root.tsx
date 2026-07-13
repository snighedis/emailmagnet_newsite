import { Composition } from "remotion";
import { HomepageHero, FPS, DURATION_IN_FRAMES, WIDTH, HEIGHT } from "./HomepageHero";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="HomepageHero"
      component={HomepageHero}
      durationInFrames={DURATION_IN_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
