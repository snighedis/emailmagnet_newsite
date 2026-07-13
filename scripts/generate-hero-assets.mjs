/**
 * One-off generator for the homepage hero video's decorative layers.
 *
 * Generates two candidate sets with fal.ai FLUX (fal-ai/flux/dev):
 *   a) "backdrop"  - soft-focus browser-page scenes the REAL EmailMagnet popup
 *                    will be composited over (the popup itself is never generated:
 *                    generative models mangle UI micro-text).
 *   b) "geometry"  - abstract soft shapes used at low opacity as the global
 *                    video background.
 *
 * Usage (never commit or print the key):
 *   set -a; source "/path/to/.env"; set +a; node scripts/generate-hero-assets.mjs
 *
 * Output: video/assets/{backdrops,geometry}/*.jpg
 * Cost: ~6 images on fal-ai/flux/dev (a few cents total).
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const FAL_KEY = process.env.FAL_KEY;
if (!FAL_KEY) {
  console.error("FAL_KEY is not set. Source your .env first (do not paste the key inline).");
  process.exit(1);
}

const MODEL_URL = "https://fal.run/fal-ai/flux/dev";
const OUT_ROOT = path.join(process.cwd(), "video", "assets");

// Shared style constraints: warm brand palette (cream/peach/orange, deep navy),
// soft light, and crucially NO readable text or logos anywhere.
const NEGATIVE = "no readable text, no letters, no words, no logos, no watermarks, no people";

const SETS = {
  backdrops: [
    `Website page seen inside a minimal browser window, soft focus, a business team directory layout with blurred placeholder cards and circular avatars, warm cream and peach tones, subtle vivid orange accents, deep navy blurred text blocks that are completely illegible, clean modern SaaS marketing aesthetic, gentle depth of field, high-key lighting, ${NEGATIVE}`,
    `Company contact page inside a minimal browser window, heavily blurred, rows of soft placeholder cards with tiny circular avatars, warm amber and cream palette with one vivid orange button shape, deep navy header band fully out of focus, airy professional aesthetic, shallow depth of field, ${NEGATIVE}`,
    `Business listings page with a soft blurred map on the right side inside a minimal browser window, warm peach and cream tones, muted teal map shapes, deep navy list rows completely blurred and illegible, one small orange marker accent, modern SaaS look, dreamy depth of field, ${NEGATIVE}`,
  ],
  geometry: [
    `Abstract minimal background, large soft blurred circles and gentle flowing waves, warm orange coral and peach gradient with one deep navy arc, subtle film grain, generous negative space, elegant calm composition, soft studio light, ${NEGATIVE}`,
    `Abstract background of translucent overlapping ribbons and arcs, warm peach and cream base, vivid orange and deep ink navy accents, one muted teal line, soft gradients, minimal and airy, premium tech aesthetic, ${NEGATIVE}`,
    `Abstract layered composition of soft rounded rectangles floating in warm haze, cream and amber tones, deep navy shadow shapes, a single bold orange circle off-center, gentle grain texture, spacious minimal design, ${NEGATIVE}`,
  ],
};

async function generate(prompt, seed) {
  const res = await fetch(MODEL_URL, {
    method: "POST",
    headers: {
      Authorization: `Key ${FAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      image_size: "landscape_16_9", // 1344x768
      num_images: 1,
      num_inference_steps: 28,
      guidance_scale: 3.5,
      seed,
      enable_safety_checker: true,
    }),
  });
  if (!res.ok) {
    throw new Error(`fal.ai request failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  const image = data.images?.[0];
  if (!image?.url) {
    throw new Error(`No image in response: ${JSON.stringify(data).slice(0, 300)}`);
  }
  const bin = await fetch(image.url);
  if (!bin.ok) throw new Error(`Image download failed: ${bin.status}`);
  return Buffer.from(await bin.arrayBuffer());
}

for (const [setName, prompts] of Object.entries(SETS)) {
  const dir = path.join(OUT_ROOT, setName);
  await mkdir(dir, { recursive: true });
  for (let i = 0; i < prompts.length; i++) {
    const label = `${setName}-${i + 1}`;
    process.stdout.write(`Generating ${label}... `);
    const buffer = await generate(prompts[i], 1000 + i);
    const file = path.join(dir, `${label}.jpg`);
    await writeFile(file, buffer);
    console.log(`saved ${path.relative(process.cwd(), file)} (${(buffer.length / 1024).toFixed(0)} KB)`);
  }
}

console.log("\nDone. Review the candidates and pick one per set before compositing.");
