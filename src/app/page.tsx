import styles from '../styles/pages/home.module.css'

const posts = [1, 2, 3, 4, 5]

export default function Page() {
  return (
    <div className={styles.posts}>
      {posts.map(post => (
        <article key={post} className={styles.article}>
          <strong>18 de julho de 2024</strong>
          <h1>
            <a href="#">Laboriosam um expedita reiciendis</a>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae voluptate sed doloremque perferendis eius dolor numquam eum dolorum velit necessitatibus, odio totam doloribus, provident, laborum ipsum ducimus enim molestias?</p>
        </article>
      ))}
    </div>
  )
}
