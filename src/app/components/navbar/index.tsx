import Link from 'next/link';
import styles from './styles.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">pedroc.sh</Link>
    </nav>
  );
}
