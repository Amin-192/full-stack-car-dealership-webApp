'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false)
  const [showAuthMenu, setShowAuthMenu] = useState(false)

  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      <div className='flex flex-row w-full justify-between bg-black/90 backdrop-blur-sm p-4 shadow-lg'>
        {/*Left side navbar  */}
        <div className='flex items-center'>
          <Link href='/'>
            <Image 
              src='/logo.png'
              width={60}
              height={60}
              alt='CarLuxe'
              className='mr-8 hover:opacity-80 transition-all rounded-2xl'
            />
          </Link>
          <ul className='text-white flex gap-8 items-center'>
            <li>
              <Link href='/' className='hover:text-red-500 transition-colors font-medium hover:scale-105 inline-block'>Home</Link>
            </li>
            <li>
              <Link href='/inventory' className='hover:text-red-500 transition-colors font-medium hover:scale-105 inline-block'>Inventory</Link>
            </li>
            <li>
              <Link href='/categories' className='hover:text-red-500 transition-colors font-medium hover:scale-105 inline-block'>Categories</Link>
            </li>
            <li>
              <Link href='/featured' className='hover:text-red-500 transition-colors font-medium hover:scale-105 inline-block'>Featured</Link>
            </li>
            <li>
              <Link href='/about' className='hover:text-red-500 transition-colors font-medium hover:scale-105 inline-block'>About Us</Link>
            </li>
            <li>
              <Link href='/contact' className='hover:text-red-500 transition-colors font-medium hover:scale-105 inline-block'>Contact</Link>
            </li>
          </ul>
        </div>

        {/* right side navigation*/}
        <div className='text-white flex items-center gap-6 relative'>
          <div className='flex items-center'>
            <div className='mr-2 w-64'>
              <input
                type="text"
                placeholder="Search vehicles..."
                className='w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400'
              />
            </div>
            <button 
              onClick={() => {
                // Search functionality will be added later
                console.log('Search clicked');
              }}
              className='hover:text-red-500 transition-colors p-2 hover:bg-white/10 rounded-full'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          <div className='relative'>
            <button
              onClick={() => setShowAuthMenu(!showAuthMenu)}
              className='hover:text-red-500 transition-colors p-2 hover:bg-white/10 rounded-full'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            {showAuthMenu && (
              <div 
                className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl py-3 transform transition-all duration-300 ease-out border border-gray-100"
                style={{ transitionDelay: '100ms' }}
              >
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-500">Welcome!</p>
                </div>
                <Link 
                  href='/login' 
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">Login</span>
                </Link>
                <Link 
                  href='/signup' 
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  <span className="font-medium">Sign Up</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
