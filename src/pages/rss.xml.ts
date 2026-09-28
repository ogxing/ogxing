import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE, TOPICS } from '../consts';
import { getPosts, postUrl } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.pubDate,
      link: postUrl(post),
      categories: [TOPICS[post.data.topic].label, ...post.data.tags],
    })),
  });
}
