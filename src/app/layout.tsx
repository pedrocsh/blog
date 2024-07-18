import { Inter } from 'next/font/google'
import { Navbar } from '../components/navbar'
import '../styles/global.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
