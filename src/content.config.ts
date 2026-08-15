import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ base: './src/content/events', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    time: z.string().optional(),
    location: z.string(),
    tag: z.string(),
    category: z.string().optional().default('cultural'),
    isUpcoming: z.boolean().optional().default(false),
    rsvpUrl: z.string().optional(),
    summary: z.string(),
    featuredImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = { events };
