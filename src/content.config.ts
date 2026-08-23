import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each project is one Markdown file in src/content/projects/.
// Adding a file adds a poster to the homepage; there is no list to maintain.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      // Lower numbers sort first. Omit to fall back to alphabetical.
      order: z.number().optional(),
      tech: z.array(z.string()).default([]),
      repo: z.string().url().optional(),
      link: z.string().url().optional(),
      draft: z.boolean().default(false),

      // --- Credits ---------------------------------------------------------
      // Shown as a film-style credits block on the detail page, and as
      // "Title (Year)" wherever the project is listed.
      year: z.number().optional(),
      // Board or MCU, for the hardware projects.
      hardware: z.string().optional(),
      // Two values only. "Prototype", "Flown" and friends made the shelf
      // read as five different vocabularies for the same column.
      status: z.enum(['Complete', 'In progress']).optional(),

      // Exactly one project should set this; it gets the backdrop hero.
      featured: z.boolean().default(false),

      // Real photography beats the generated poster every time. Drop a board
      // photo in src/assets/ and point at it here; the generated gradient is
      // the fallback, not the goal.
      poster: image().optional(),
    }),
});

export const collections = { projects };
