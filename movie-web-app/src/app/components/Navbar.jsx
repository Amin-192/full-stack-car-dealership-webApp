import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className='flex flex-row w-full justify-between bg-black'>
        {/*Left side narvbar  */}
        <div className='flex '>
        <Link href={'/pages/home'}>
        <Image 
        src={'/logo.png'}
        width={140}
        height={60}
        alt='Netflix'
        className=''
        />
         </Link>
        <ul className='text-white flex gap-4 relative top-[34%]'>
            <li>
           <Link href={''}>Home</Link>
            </li>
            <li>
           <Link href={''}>Tv Shows</Link>
            </li>
            <li>
           <Link href={''}>Movies</Link>
            </li>
            <li>
           <Link href={''}>New & Popular</Link>
            </li>
            <li>
           <Link href={''}>My List</Link>
            </li>
            <li>
           <Link href={''}>Browse by Langauges</Link>
            </li>
        </ul>
        </div>

        {/* right side navigation*/}
      <div className='text-white'>
        hello
      </div>
    </div>
  )
}
