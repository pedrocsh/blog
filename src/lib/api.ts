import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Post } from '../interfaces/post';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostBySlug(slug: string): Post {
  const formatedSlug = slug.replace('.md', '');
  const file = readFileSync(join(postsDirectory, `${formatedSlug}.md`), 'utf8');
  const { data, content } = matter(file);

  return {
    slug: formatedSlug,
    title: data.title,
    excerpt: data.excerpt,
    cover: data.cover,
    date: Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      timeZone: 'utc',
    }).format(data.date),
    author: data.author,
    content,
  };
}

export function getAllPosts(): Post[] {
  const slugs = readdirSync(postsDirectory, 'utf8');
  const posts = slugs
    .map(file => getPostBySlug(file))
    .sort((first, second) => (first.date > second.date ? -1 : 1));

  return posts;
}
