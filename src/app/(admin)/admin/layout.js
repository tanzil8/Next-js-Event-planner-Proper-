'use client'

import * as React from 'react'

import Navbar from '@/components/ui/nav/nav'


export default function Layout({ children }) {
  

  return (
    <div className="flex flex-col min-h-screen">
      <header >
      <Navbar/>
      </header>
      <main className="flex-grow container mx-auto ">{children}</main>
      <footer className="bg-gray-500 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          © 2024 Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  )
}