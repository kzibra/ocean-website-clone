import { navList } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full z-10 absolute top-0 left-0 h-[12vh] flex items-center justify-center'>
      <div className='bg-white/10 shadow-lg backdrop-blue-lg rounded-full flex items-center justify-between px-12 w-[90%] h-[70%]'>
        <Image src="/logo.png" alt="logo" width={70} height={70} />
        <div className='hidden md:flex border p-4 rounded-full flex-row gap-6'>
          {navList.map((item) => (
            <h3 key={item.name} className='cursor-pointer text-white'>{item.name}</h3>
          ))}
        </div>
        <div className='w-[20vw] h-[2px] bg-white' />

        <div className='hidden md:flex p-4 px-12 rounded-full flex-row border text-white gap-12 justify-center items-center'>
          <h3 className='cursor-pointer'>
            Contact Us
          </h3>
          <h3 className='cursor-pointer'>
            More Info
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar