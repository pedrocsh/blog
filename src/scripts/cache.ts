import fs from 'fs'
import grayMatter from 'gray-matter'

export function loadPosts() {
  const files = fs.readdirSync('_posts')
  const posts = files.map(file => {
    const fileContent = fs.readFileSync(`_posts/${file}`, 'utf8')
    const { content, data } = grayMatter(fileContent)
    const { title, excerpt, date } = data

    return {
      slug: file.replace('.md', ''),
      title,
      excerpt,
      date: Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'long',
        timeZone: 'utc'
      }).format(date),
      content
    }
  })

  return posts
}
