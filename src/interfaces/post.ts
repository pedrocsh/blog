import { Author } from './author';

export type Post = {
  slug: string;
  cover: string;
  excerpt: string;
  title: string;
  date: string;
  author: Author;
  content: string;
};
