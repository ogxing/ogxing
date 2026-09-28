import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { TOPICS } from './consts';

const topicKeys = Object.keys(TOPICS) as [string, ...string[]];

const research = defineCollection({
  loader: glob({ base: './src/content/research', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One or two sentences shown as the lede and in listings. */
      summary: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      topic: z.enum(topicKeys),
      tags: z.array(z.string()).default([]),
      /** Optional cover image in src/content/research/... or public path. Omit for generated art. */
      cover: image().optional(),
      /** Group multi-part write-ups. Posts with the same series link to each other. */
      series: z.string().optional(),
      /** Article hero: 'cover' opens the article with the cover image full-bleed behind the title. */
      hero: z.enum(['none', 'cover']).default('none'),
      draft: z.boolean().default(false),
    }),
});

export const collections = { research };
