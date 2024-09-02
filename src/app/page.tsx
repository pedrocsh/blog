import styles from './styles/page.module.css';
import { getAllPosts } from '../lib/api';
import { Article } from './components/article';
import { Navbar } from './components/navbar';

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className={styles.posts}>
        {posts.map(post => (
          <Article key={post.slug} {...post} />
        ))}
      </main>
    </>
  );
}
