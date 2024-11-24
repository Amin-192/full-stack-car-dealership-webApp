import React from 'react'
import Image from 'next/image'

export default function category() {
  return (
    <div>
      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {['Luxury', 'Sports', 'SUV'].map((category) => (
            <div key={category} className="relative h-80 group cursor-pointer overflow-hidden rounded-xl">
              <Image
                src={'/hero.png'}
                alt={category}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white text-3xl font-bold mb-2">{category}</h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore our {category} collection →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
