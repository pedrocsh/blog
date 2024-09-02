import Link from 'next/link';
import styles from './styles.module.css';
import { type Author } from '@interfaces/author';

type ArticleProps = {
  slug: string;
  title: string;
  author: Author;
  date: string;
};

export function Article({ slug, title, author, date }: ArticleProps) {
  return (
    <article key={slug} className={styles.article}>
      <strong>{date}</strong>
      <Link href={`/posts/${slug}`}>{title} </Link>
      <strong>
        Escrito por{' '}
        <a href={author.link} target="_blank" rel="noreferrer">
          {author.name}
        </a>
      </strong>
    </article>
  );
}
