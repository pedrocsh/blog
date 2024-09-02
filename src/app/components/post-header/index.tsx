import Image from 'next/image';
import { Author } from '@interfaces/author';
import styles from './styles.module.css';

type PostHeaderProps = {
  title: string;
  excerpt: string;
  date: string;
  author: Author;
  cover: string;
};

export function PostHeader(params: PostHeaderProps) {
  const { title, excerpt, date, author, cover } = params;
  const { name, link } = author;

  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <strong>{date}</strong>
      <p>{excerpt}</p>
      <strong>
        Escrito por{' '}
        <a href={link} target="_blank" rel="noreferrer">
          {name}
        </a>
      </strong>
      <Image
        src={cover}
        alt={title}
        sizes="100vw"
        width={1792}
        height={1024}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </header>
  );
}
