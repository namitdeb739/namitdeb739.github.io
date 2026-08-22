import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each project is one Markdown file in src/content/projects/.
// Adding a file adds a card to the homepage; there is no list to maintain.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Lower numbers sort first. Omit to fall back to alphabetical.
    order: z.number().optional(),
    tech: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    link: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
