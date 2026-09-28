import { getCollection, type CollectionEntry } from 'astro:content';
import { TOPICS, type TopicKey } from '../consts';

export type Post = CollectionEntry<'research'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('research', ({ data }) => !data.draft || import.meta.env.DEV);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function topicsWithPosts(posts: Post[]): TopicKey[] {
  const present = new Set(posts.map((p) => p.data.topic));
  return (Object.keys(TOPICS) as TopicKey[]).filter((k) => present.has(k));
}

export const postUrl = (p: Post) => `/research/${p.id}`;
export const topicUrl = (t: string) => `/topic/${t}`;
