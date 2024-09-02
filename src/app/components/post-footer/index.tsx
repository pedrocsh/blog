import Image from 'next/image';
import { Author } from '../../../interfaces/author';
import styles from './styles.module.css';

type PostFooterProps = {
  author: Author;
};

export function PostFooter({ author }: PostFooterProps) {
  const { name, description, link, picture } = author;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href={link}>
          <Image src={picture} alt={name} width={56} height={56} />
        </a>
        <a href={link}>Escrito por Pedro Cardoso</a>
        <p>{description}</p>
      </div>
    </footer>
  );
}
