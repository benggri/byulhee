import './globals.css';
import type { Metadata } from 'next';
import Nav from '../src/components/layout/nav';

export const metadata: Metadata = {
  title: '별희네',
  description: '별희네 사이트',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container h-full">
        <Nav>
          {children}
        </Nav>
      </body>
    </html>
  )
}
