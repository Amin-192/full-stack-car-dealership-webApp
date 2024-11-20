import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Page() {
  const people = [
    {
      id: 1,
      name: 'Amin',
      age: 30,
      image:'/user1.png',
    },
    {
      id: 2,
      name: 'Fatma',
      age: 30,
      image:'/user2.png',
    },
    {
      id: 3,
      name: 'Stylez',
      age: 30,
      image:'/user3.png',
    },
    {
      id: 4,
      name: 'Abdisalam',
      age: 30,
      image:'/user4.png',
    },
  ];

  return (
    <div className="bg-black text-white flex flex-col gap-3 items-center justify-center min-h-screen ">
        <h1 className='text-7xl'>Who&apos;s watching?</h1>
    <div className="flex flex-row gap-4 text-center mb-[120px]">
        
      {people.map((person) => (
          <>
          <div className=''>
          <Image 
          className='rounded-2xl hover:border-2'
            src={person.image}
            alt={person.name}
            width={240}
            height={100}
            />
             <div className='text-gray-400 text-3xl mt-1 ' 
        key={person.id}>
          {person.name}
          </div>
         
          </div>
          
          </>
      ))}
      <div className='w-[240px] bg-black h-[240px] rounded-2xl hover:border-2 h'>
      <svg
       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-19 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
<h1 
className='text-gray-400 text-3xl mt-1'
>
Add new user</h1>

      </div>

     
    </div>
    <div>
    <button
    className='text-3xl text-gray-400 border-2 border-gray-400 py-2 px-4 hover:border-white hover:text-white'
    >
    Manage Profiles
    </button>
    </div>
  </div>
  );
}
