// ... imports remain the same ...
import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import Hero from "./components/Hero"
import Category from "./components/category"
export default function Page() {
  return (
    <main className="min-h-screen">
     <Hero/>
     <Category/>
      

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
                    src={''}
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

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {[
            { title: 'Premium Selection', icon: '🚗', description: 'Handpicked luxury vehicles for discerning buyers' },
            { title: 'Expert Support', icon: '👨‍💼', description: 'Dedicated team of automotive specialists' },
            { title: 'Secure Payment', icon: '🔒', description: 'Safe and encrypted transaction process' },
            { title: 'Fast Delivery', icon: '🚚', description: 'Quick and professional vehicle delivery' },
          ].map((feature) => (
            <div key={feature.title} className="p-8 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}