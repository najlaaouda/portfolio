import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  // One folder per project: src/content/projects/<slug>/index.md -> /work/<slug>
  loader: glob({
    pattern: '**/index.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    outcome: z.string().optional(),
    cover: z.string(),
    year: z.number(),
    role: z.string(),
    timeline: z.string().optional(),
    platform: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Tab on the "All work" page
    category: z.enum(['Apps', 'Dashboards', 'Websites', 'Landing Pages', 'Design Systems']).default('Apps'),
    tools: z.array(z.string()).default([]),
    featured: z.boolean().default(true),
    order: z.number().default(99),
    draft: z.boolean().default(false),
    // Brand colour of the project, used for its plate, hero band and transitions
    brand: z.string().regex(/^#[0-9a-f]{6}$/i).optional(),
    device: z.enum(['mobile', 'web']).default('mobile'),
    // Screens shown moving inside the homepage plate (falls back to the first gallery screens)
    showcase: z.array(z.string()).default([]),
    // Screen gallery, shown after the story in groups (e.g. "Orders": [5 screens])
    screens: z
      .array(z.object({ title: z.string(), note: z.string().optional(), images: z.array(z.string()) }))
      .default([]),
    links: z
      .object({
        figma: z.string().optional(),
        behance: z.string().optional(),
        // Clickable prototype, e.g. /prototypes/<slug>/ hosted from public/
        prototype: z.string().optional(),
        live: z.string().optional(),
      })
      .default({}),
  }),
});

export const collections = { projects };
