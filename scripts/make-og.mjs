// Generates public/og.png — the card every link to this site unfurls as.
//
// Run with `npm run og` after changing the name or tagline. The output is
// committed, so the build itself stays dependency-free; sharp is only ever a
// dev-time tool here (it already ships with Astro for image optimisation).
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

// Same geometry the masthead and favicon use — see scripts/make-mark.mjs.
const mark = JSON.parse(await readFile(new URL('./mark-geometry.json', import.meta.url)));

const W = 1200;
const H = 630;

// Catppuccin Mocha, matching the site's dark mode.
const bg = '#1e1e2e';
const surface = '#313244';
const fg = '#cdd6f4';
const muted = '#a6adc8';
const [green, blue, peach] = ['#a6e3a1', '#89b4fa', '#fab387'];

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="wash" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${surface}"/>
      <stop offset="60%" stop-color="${bg}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#wash)"/>

  <!-- Anamorphic bars: the site's framing device, legible at thumbnail size. -->
  <rect x="0" y="0" width="${W}" height="46" fill="${bg}"/>
  <rect x="0" y="${H - 46}" width="${W}" height="46" fill="${bg}"/>
  <rect x="0" y="46" width="6" height="${H - 92}" fill="${blue}"/>

  <g transform="translate(96, 138) scale(${(126 / mark.H).toFixed(5)})" fill="${fg}">
    <g transform="translate(${mark.tx},${mark.Y1}) scale(1,-1)">
      <path d="${mark.na}"/>
      <g transform="translate(0,${-mark.lead})"><path d="${mark.da}"/></g>
    </g>
  </g>

  <text x="96" y="366" fill="${fg}" font-family="JetBrains Mono, Menlo, monospace"
        font-size="86" font-weight="700" letter-spacing="-3">Namit Deb</text>

  <text x="96" y="424" fill="${muted}" font-family="JetBrains Mono, Menlo, monospace"
        font-size="27" font-weight="300">Computer scientist interested in</text>
  <text x="96" y="464" fill="${muted}" font-family="JetBrains Mono, Menlo, monospace"
        font-size="27" font-weight="300">sustainable applications of technology.</text>

  <text x="96" y="536" fill="${blue}" font-family="JetBrains Mono, Menlo, monospace"
        font-size="22" font-weight="500" letter-spacing="3">NAMITDEB739.GITHUB.IO</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
await writeFile(new URL('../public/og.png', import.meta.url), png);
console.log(`wrote public/og.png (${(png.length / 1024).toFixed(0)} kB)`);
