# Style guide: launch film grammar

Source studied: the Zaro launch film (x.com/ZaroAI_/status/2070084796378747316), 68.5 s,
3840x2160, 30 fps. Downloaded to `refs/zaro-launch.mp4`, sampled every 0.5 s into
`refs/frames/` (139 frames), cuts measured at 10 fps. `refs/` is git-ignored: the
reference is studied, never shipped.

This guide records the **grammar** (how it moves, cuts, types and breathes). Its content,
logo, product UI and copy are not reused anywhere.

---

## 1. Palette

All values sampled from the frames (median of the region), not eyeballed.

| Role | Hex | Where it appears |
|---|---|---|
| Warm near-black ground | `#1f1313` | Opening, closing "system" sequence |
| Taupe ground | `#514644` | Statement cards, split-screen text panels |
| Warm off-white ground | `#ecebe6` | Logo, UI sequences, icon scatter, end card |
| Greige ground | `#c1bfb0` | Behind floating UI windows |
| Primary text on dark | `#fefdfb` | First line of every statement |
| Secondary text on dark | `#a29f9b` | Second line, always lighter |
| Text on light | `#190f0e` | Logo, statements on off-white |
| Accent (single) | `#bcaff5` | Caret, one highlighted word, CTA pill |
| Accent wash | `#d4cdef` | One soft blurred gradient field |
| Dot-matrix grey | `#c4c2b2` | Halftone type and dot fields |

Usage rules observed:
- 57% of all pixels are the off-white, 16% mid grey, 7% near-black: the film is mostly light,
  with dark cards as punctuation.
- **One accent only**, used sparingly: a caret, one word, one pill. Never a full ground except
  one blurred wash.
- No pure white and no pure black anywhere. Every neutral is warm.

**Dentoku mapping (proposal):** keep the four warm neutrals as they are; replace the single
accent with Dentoku orange `#f05423`, and its wash with a pale orange `#f7d9cc`. This keeps the
reference's restraint while the film reads as Dentoku, not as a copy.

## 2. Type

| Property | Reference | Dentoku equivalent |
|---|---|---|
| Family | Neo-grotesk sans, display cut (Inter Display / Aeonik family of shapes) | **Inter** (the site's UI face), display sizes |
| Weight | ~500 (medium). Never bold, never light | Inter 500 |
| Tracking | Tight, about -0.03em at display size | -0.03em |
| Case | Sentence case, always ending with a full stop | Same |
| Size | Statements ~5.5% of frame height; inline sentences ~3% | 60 px and 34 px at 1080p |
| Layout | Centred, one or two lines, generous empty space | Same |
| Two-tone | Line 1 primary colour, line 2 secondary grey | Same |
| Special | One dot-matrix display moment (round dots on a grid, some square "pixels" scattered) | Built from circles in code, no font licence |
| Small caps label | Mono, uppercase, wide tracking, inside a pill | Geist Mono 500, +0.12em, in a pill |

## 3. Shot lengths

Measured: 20 hard cuts in 68.5 s. Median shot **2.5 s**, mean 3.3 s, shortest 1.0 s,
longest 9.0 s; only 10% of shots are 1 s or shorter.

The pace does not come from cutting. It comes from **change inside the shot every
0.5-1.0 s**: a character typed, a word recoloured, an icon swapped, a cursor click, a camera
push. A shot is held while something keeps happening in it, and cut the moment it stops.

For a 25 s piece this scales to **10-12 shots of 1.5-3 s**, every cut on a 0.5 s grid.

## 4. Transitions

In order of frequency:
1. **Hard cut** between grounds (dark to light, taupe to off-white). The default.
2. **Type-on / type-off**: a statement is typed in, held, then deleted back to the caret
   before the cut. Text never fades in as a block.
3. **Match cut on an object**: the same UI card or logo continues across the cut at a new
   scale or position.
4. **Split-screen slide**: a taupe text panel holds on the left while the right half
   changes underneath it.
5. **Focus pull**: a word dissolves into a heavily blurred colour field (used once).
6. **Dot dissolve**: a halftone / dot-matrix field resolves into or out of UI (used once).
7. **Logo build**: a single dot or mark scales up, then the wordmark slides out of it; the
   wordmark later retracts back into the mark.

No wipes, no zoom-blur, no flashes, no shakes.

## 5. Camera moves

- **Slow push-in** on almost every UI shot: scale 1.00 to about 1.05 over the shot, eased.
- **Reframe by scaling the UI, not the camera**: cards slide and resize to bring a detail
  forward (a row, a chart, a message) instead of cropping.
- **Cursor-led action**: a real-looking pointer moves with ease-out and clicks; the UI reacts
  on the click frame.
- **Parallax float**: scattered app icons drift at different speeds around a centred sentence.
- **Orbit**: one hero card in the centre with small elements on concentric rings, slowly
  rotating, then pulling out to reveal several systems (used once, near the end).
- Everything is eased (cubic / spring, no overshoot). Nothing is linear except the caret blink.

## 6. Texture and grain

- **No film grain.** Surfaces are flat and clean.
- On dark grounds, a sparse field of tiny squares (1-4 px at 4K, 5-15% opacity) drifts slowly,
  like dust or pixels.
- Dot-matrix texture: round dots on a strict grid, a few square dots mixed in, in the
  dot-matrix grey, used for one statement and on the end card's bottom edge.
- UI windows: rounded corners (~14 px at 1080p), hairline border, very soft large shadow;
  greige or off-white behind them.

## 7. How text enters and exits

- **Enters typed**, character by character at about 18-22 characters per second, with a
  blinking accent-coloured caret leading. Line 2 starts after line 1 finishes.
- **Inline objects**: a sentence can contain small live objects (an icon, a pill) that slot in
  as the words are typed and keep cycling while the line holds.
- **Word sweep**: once a line is complete, one word can turn accent-coloured and settle back,
  or a highlight can run across the words left to right.
- **Holds** ~0.6-1.2 s after the last character, caret still blinking.
- **Exits** by deleting back to the caret, or by a hard cut. Text never slides out and never
  fades as a block (the single exception is the focus-pull dissolve).
- Statements are short: 2-5 words per line, a full stop at the end.

## 8. Sound

The reference track is a commercial recording in another company's film: it is **not** used,
sampled or re-created. What is taken is its genre and feel, measured from the audio:

| Measure | Reference |
|---|---|
| Tempo | ~86 BPM, half-time feel (kick band); hats at ~129, i.e. triplets over the beat |
| Spectrum | Warm and dark: 78% of energy below 250 Hz, 21% mids, <2% above 2 kHz |
| Brightness | Spectral centroid 700-1100 Hz throughout: everything low-passed, nothing crisp |
| Shape | Builds over the first 8 s, steady body, thins out for the closing third |

**Brief for an original score:** warm downtempo electronic, 90 BPM (exactly 20 frames per beat
at 30 fps, so cuts land on beats by construction), half-time kick and snare, shuffled triplet
hats, round sub and bass with a soft saturation, muffled electric-piano or pad chords through a
low-pass, one plucked motif. No vocals. Cuts, type-on starts and UI clicks sit on beats or
half-beats; the end card lands on a downbeat and the track resolves under it.
