import type { Metadata } from 'next'
import '@/style/globals.css'
import Header from '@/components/Layout/Header'
import { GeistSans } from 'geist/font/sans';
import Footer from '@/components/Layout/Footer';


export const metadata: Metadata = {
  title: 'NFT Landing',
  description: 'Landing page for NFT Collection | Mert Enercan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
