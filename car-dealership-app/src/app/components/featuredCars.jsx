import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function featuredCars() {
  return (
    <div>
      {/* Featured Car */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-black">Featured Vehicles</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="flex justify-center">
            <div className="group bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl max-w-md">
              <div className="relative h-64">
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                  Featured
                </div>
                <Image
                  src={'/hero.png'}
                  alt={'Featured Car'}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">Premium Car</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    <span>400+ Horsepower</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>0-60 in 3.5s</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <p className="text-gray-600 font-medium">Starting from</p>
                    <p className="text-3xl font-bold text-red-600">$50,000</p>
                  </div>
                </div>
                <Link 
                  href={'/pages/login'}
                  className="block text-center bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg hover:from-black hover:to-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
