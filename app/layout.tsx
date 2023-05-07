import './globals.css'
import { Baskervville } from 'next/font/google'

const baskervville = Baskervville({ weight: "400", subsets: ['latin'] });

export const metadata = {
  title: 'HASH Store',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={baskervville.className}>{children}</body>
    </html>
  )
}
