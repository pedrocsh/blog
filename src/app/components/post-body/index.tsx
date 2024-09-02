import styles from './styles.module.css';

type PostBodyProps = {
  content: string;
};

export function PostBody({ content }: PostBodyProps) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className={styles.body}
    />
  );
}
