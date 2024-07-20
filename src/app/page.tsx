import Link from 'next/link';
import { loadPosts } from '../scripts/cache';
import styles from '../styles/pages/home.module.css';

export default function Page() {
  const posts = loadPosts();

  return (
    <div className={styles.posts}>
      {posts.map(post => (
        <article key={post.slug} className={styles.article}>
          <strong>{post.date}</strong>
          <h1>
            <Link href={`/${post.slug}`}>{post.title}</Link>
          </h1>
          <header className={styles.header}>
            Escrito por{' '}
            <a target="_blank" href={post.author.link}>
              {post.author.name}
            </a>
          </header>
        </article>
      ))}
    </div>
  );
}
