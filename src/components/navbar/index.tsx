import Link from 'next/link';
import styles from '../../styles/components/navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">pedroc.sh</Link>
      </div>
    </nav>
  );
}
