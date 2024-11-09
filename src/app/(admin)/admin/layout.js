'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/admin/dashboard' },
  { name: 'User', href: '/user' },
  { name: 'Event', href: '/event' },
  { name: 'Categories', href: '/categories' },
  { name: 'SubCategories', href: '/subcategories' },
]

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-700 text-white shadow-md">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold hover:text-gray-600 transition-colors duration-200">
              MUI
            </Link>
          </div>
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md hover:bg-gray-300 hover:text-gray-900 transition-all duration-200 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-white hover:text-gray-600 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-700 hover:bg-gray-300 hover:text-gray-900">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 px-4 text-sm text-white hover:bg-gray-300 hover:text-gray-900 transition-all duration-200 ease-in-out"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-700 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          © 2024 Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  )
}