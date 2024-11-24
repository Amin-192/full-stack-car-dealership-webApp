import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Hero() {
  return (
    <div>
       {/* Hero Section */}
       <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="/hero-car.jpg"
          alt="Luxury car"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 leading-tight">Find Your Perfect Luxury Vehicle</h1>
          <p className="text-2xl mb-10 text-gray-200">Discover our exclusive collection of premium vehicles</p>
          <Link 
            href="/inventory" 
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Explore Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
