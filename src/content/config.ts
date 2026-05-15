import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    clientDescription: z.string(),
    service: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    outcomes: z.array(z.string()),
    order: z.number().default(0),
  }),
});

export const collections = { work };
