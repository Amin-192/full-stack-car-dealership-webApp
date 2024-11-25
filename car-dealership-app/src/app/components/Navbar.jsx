'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession()
  const [showSearch, setShowSearch] = useState(false)
  const [showAuthMenu, setShowAuthMenu] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (session) {
      console.log('Current session:', session)
    }
  }, [session])

  // Function to handle menu toggles
  const handleMenuToggle = (menu) => {
    if (menu === 'auth') {
      setShowAuthMenu(!showAuthMenu)
      setIsMobileMenuOpen(false)
    } else if (menu === 'mobile') {
      setIsMobileMenuOpen(!isMobileMenuOpen)
      setShowAuthMenu(false)
    }
  }

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
              className='mr-4 md:mr-8 hover:opacity-80 transition-all rounded-2xl'
            />
          </Link>
          {/* Desktop Menu */}
          <ul className='hidden md:flex text-white gap-8 items-center'>
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
        <div className='text-white flex items-center gap-4 md:gap-6 relative'>
          {/* Search - Hidden on mobile */}
          <div className='hidden md:flex items-center'>
            <div className='mr-2 w-64'>
              <input
                type="text"
                placeholder="Search vehicles..."
                className='w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400'
              />
            </div>
            <button 
              onClick={() => {
                console.log('Search clicked');
              }}
              className='hover:text-red-500 transition-colors p-2 hover:bg-white/10 rounded-full'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Auth Menu */}
          <div className='relative'>
            {session ? (
              <div className='flex items-center gap-4'>
                <span className='text-sm'>{session.user.name}</span>
                <button
                  onClick={() => handleMenuToggle('auth')}
                  className='hover:text-red-500 transition-colors p-2 hover:bg-white/10 rounded-full'
                >
                  <Image
                    src={session.user.image || '/user.png'}
                    width={30}
                    height={30}
                    alt={session.user.name}
                    className='rounded-full'
                  />
                </button>
                {showAuthMenu && (
                  <div 
                    className="absolute right-0 mt-48 w-56 bg-white/95 backdrop-blur-sm rounded-2xl  shadow-2xl py-3 transform transition-all duration-300 ease-out border border-gray-100"
                    style={{ transitionDelay: '100ms' }}
                  >
                    <div className="px-4 py-2 border-b border-gray-100 ">
                      <p className="text-sm font-medium text-gray-500">Welcome, {session.user.name}!</p>
                    </div>
                    <button 
                      onClick={() => signOut()}
                      className="flex w-full items-center px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      <span className="font-medium">Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={() => handleMenuToggle('auth')}
                  className='hover:text-red-500 transition-colors p-2 hover:bg-white/10 rounded-full'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                {showAuthMenu && (
                  <div 
                    className="absolute right-0 mt-12 w-56 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl py-3 transform transition-all duration-300 ease-out border border-gray-100"
                    style={{ transitionDelay: '100ms' }}
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-500">Welcome!</p>
                    </div>
                    <div className="px-4 py-2">
                      <Link href="/pages/Login" className="block w-full py-2 text-center text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 rounded-lg">
                        Login
                      </Link>
                      <Link href="/pages/Register" className="block w-full py-2 text-center text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 rounded-lg">
                        Sign Up
                      </Link>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => handleMenuToggle('mobile')}
            className='md:hidden p-2 hover:bg-white/10 rounded-full'
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link href='/' className='block px-3 py-2 text-white hover:bg-red-500 rounded-lg'>Home</Link>
            <Link href='/inventory' className='block px-3 py-2 text-white hover:bg-red-500 rounded-lg'>Inventory</Link>
            <Link href='/categories' className='block px-3 py-2 text-white hover:bg-red-500 rounded-lg'>Categories</Link>
            <Link href='/featured' className='block px-3 py-2 text-white hover:bg-red-500 rounded-lg'>Featured</Link>
            <Link href='/about' className='block px-3 py-2 text-white hover:bg-red-500 rounded-lg'>About Us</Link>
            <Link href='/contact' className='block px-3 py-2 text-white hover:bg-red-500 rounded-lg'>Contact</Link>
            <div className='pt-2'>
              <input
                type="text"
                placeholder="Search vehicles..."
                className='w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400'
              />
            </div>
            {session && (
              <button 
                onClick={() => signOut()}
                className='block w-full text-left px-3 py-2 text-white hover:bg-red-500 rounded-lg'
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}