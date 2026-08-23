#!/usr/bin/env bash
# Regenerates src/assets/fonts/anek-bangla-digits.woff2.
#
# The site sets its catalogue numbering in Bengali numerals. Shipping the whole
# Anek Bangla family for that costs 437 kB; this cuts it to the ten digits
# (U+09E6–U+09EF) at around 10 kB, keeping the variable weight axis.
set -Eeuo pipefail

src="${1:-}"
if [[ -z "$src" ]]; then
  echo "usage: $0 <path-to-anek-bangla-bengali-subset.woff2>" >&2
  echo "  grab one from https://fontsource.org/fonts/anek-bangla" >&2
  exit 2
fi

out="src/assets/fonts/anek-bangla-digits.woff2"
uvx --from "fonttools[woff]" pyftsubset "$src" \
  --unicodes="U+09E6-09EF" \
  --flavor=woff2 \
  --layout-features='' \
  --no-hinting --desubroutinize \
  --output-file="$out"

printf 'wrote %s (%s bytes)\n' "$out" "$(stat -f%z "$out")"
