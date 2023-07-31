import './globals.css'
import type { Metadata } from 'next'

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
        <header className='relative'>
          <nav className="fixed w-screen flex items-center justify-between flex-wrap bg-sky-500 p-4">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-white mr-4">
                  Docs
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-white mr-4">
                  Examples
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-white">
                  Blog
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main className='overflow-auto pt-12'>
          {children}
        </main>
      </body>
    </html>
  )
}
