import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function featuredCars() {
  return (
    <div>
       {/* Featured Cars */}
       <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-56">
                  <div className="absolute top-4 right-4 z-10 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                  <Image
                    src={`/car-${item}.jpg`}
                    alt={`Featured car ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">Premium Car {item}</h3>
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-gray-600">Starting from</p>
                    <p className="text-2xl font-bold text-red-600">$50,000</p>
                  </div>
                  <Link 
                    href={`/car/${item}`}
                    className="block text-center bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
