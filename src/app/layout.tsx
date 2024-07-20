import { Work_Sans } from 'next/font/google';
import { Navbar } from '../components/navbar';
import '../styles/global.css';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={workSans.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
