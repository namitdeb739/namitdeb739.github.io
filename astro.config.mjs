// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  // User site: served from the repo root at https://<user>.github.io
  // (a project site would also need `base: '/<repo>'`).
  site: 'https://namitdeb739.github.io',

  fonts: [
    // Self-hosted and subset at build time, with a metric-matched fallback so
    // there is no layout shift while it loads.
    //
    // This is upstream JetBrains Mono, deliberately NOT the Nerd Font build the
    // terminal uses: the patch adds 3,600+ icon glyphs from Font Awesome,
    // Devicons and friends, none of which appear on this site, at a cost of
    // several megabytes.
    //
    // The variable weight axis is what lets the type have real hierarchy
    // (300 for prose through 700 for the name) at no extra download.
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: ['100 800'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
    // Bengali numerals only — the catalogue numbering on the shelf.
    //
    // Served from a local subset rather than the full Anek Bangla family: the
    // Fontsource Bengali subset is 437 kB, and preloading it for ten digit
    // glyphs cost more than the entire rest of the site. Regenerate with
    // `npm run subset-font` if the family or the glyph set ever changes.
    {
      provider: fontProviders.local(),
      name: 'Anek Bangla Digits',
      cssVariable: '--font-bangla',
      options: {
        variants: [
          {
            weight: '100 800',
            style: 'normal',
            src: ['./src/assets/fonts/anek-bangla-digits.woff2'],
          },
        ],
      },
    },
  ],
});
