import fs from 'fs'
import grayMatter from 'gray-matter'
import { remark } from 'remark'
import remarkHTML from 'remark-html'

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
      author: {
        name: data.author,
        link: data.authorLink
      },
      date: Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'long',
        timeZone: 'utc'
      }).format(date)
    }
  })

  return posts
}

export function getPostBySlug(slug: string) {
  const file = fs.readFileSync(`_posts/${slug}.md`)
  const { content, data } = grayMatter(file)
  const { title, excerpt, date } = data
  const { value: contentHTML } = remark().use(remarkHTML).processSync(content)

  return {
    title,
    excerpt,
    date: Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'long',
      timeZone: 'utc'
    }).format(date),
    content: contentHTML
  }
}
