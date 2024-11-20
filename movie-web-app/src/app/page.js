import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const people = [
    {
      id: 1,
      name: 'Amin',
      age: 30,
      image: '/user1.png',
    },
    {
      id: 2,
      name: 'Fatma',
      age: 30,
      image: '/user2.png',
    },
    {
      id: 3,
      name: 'Stylez',
      age: 30,
      image: '/user3.png',
    },
    {
      id: 4,
      name: 'Abdisalam',
      age: 30,
      image: '/user4.png',
    },
  ];

  return (
    <div className="bg-black text-white flex flex-col gap-6 items-center justify-center min-h-screen px-4">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
        Who&apos;s watching?
      </h1>

      {/* Profiles Container */}
      <div className="flex flex-wrap justify-center gap-6 text-center mb-12">
        {people.map((person) => (
          <div key={person.id} className="flex flex-col items-center w-[200px] sm:w-[240px]">
            <Link href="/pages/home">
              <Image
                className="rounded-2xl hover:border-2"
                src={person.image}
                alt={person.name}
                width={190}
                height={100}
              />
            </Link>
            <div className="text-gray-400 text-lg sm:text-xl md:text-2xl mt-1">
              {person.name}
            </div>
          </div>
        ))}

        {/* Add New User */}
        <div className="flex flex-col items-center w-[200px] sm:w-[240px] h-[200px] sm:h-[240px] bg-black rounded-2xl hover:border-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-[140px] h-[140px] sm:w-16 sm:h-16 text-gray-400 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h1 className="text-gray-400 text-lg sm:text-xl md:text-2xl mt-2">
            Add new user
          </h1>
        </div>
      </div>

      {/* Manage Profiles Button */}
      <div>
        <button className="text-lg sm:text-xl md:text-2xl text-gray-400 border-2 border-gray-400 py-2 px-4 hover:border-white hover:text-white">
          Manage Profiles
        </button>
      </div>
    </div>
  );
}