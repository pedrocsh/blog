import { getPostBySlug } from '../../scripts/cache';
import styles from '../../styles/pages/post.module.css';

type Params = {
  params: {
    slug: string;
  };
};

export default function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <strong>{post.date}</strong>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
      </header>

      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
