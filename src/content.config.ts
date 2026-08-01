import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ base: './src/content/events', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    tag: z.string(),
    summary: z.string(),
    featuredImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = { events };
