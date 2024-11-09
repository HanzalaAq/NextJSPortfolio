import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hanzala Afaq',
  description: 'Personal portfolio showcasing my skills and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-6 py-3">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-gray-800 hover:text-blue-600 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-800 hover:text-blue-600 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-gray-800 hover:text-blue-600 transition duration-300">
                  Skills
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-6 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; 2023 My Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}