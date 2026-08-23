import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Colour and mark are properties of the project, not of its position in any
 * list, so a project looks the same on the index as it does on its own page.
 *
 * Green for the soil cells, violet for the data work, amber for the machinery,
 * teal for telemetry, and blue for the ring — it cools a room, so the crimson
 * that reads as heat was working against it.
 */
export const IDENTITY: Record<string, { hue: string; kind: string }> = {
  'earth-computers': { hue: 'soil', kind: 'soil' },
  'career-detective': { hue: 'data', kind: 'data' },
  kittcat: { hue: 'machine', kind: 'machine' },
  'leonus-cansat-2025': { hue: 'flight', kind: 'flight' },
  'ring-chilling': { hue: 'cool', kind: 'thermal' },
};

export const FALLBACK = { hue: 'data', kind: 'data' };

export const identityOf = (id: string) => IDENTITY[id] ?? FALLBACK;

/**
 * Catalogue numbering is set in Bengali numerals; years and other data stay
 * Latin, so the numerals read as the shelf's own notation rather than as
 * something a reader has to decode to get at the facts.
 */
const BN = '০১২৩৪৫৬৭৮৯';
export const bengaliNum = (n: number) =>
  String(n)
    .padStart(2, '0')
    .split('')
    .map((d) => BN[Number(d)])
    .join('');

/** Published projects, in shelf order. Drafts never get a URL. */
export async function getShelf(): Promise<CollectionEntry<'projects'>[]> {
  return (await getCollection('projects'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
}
