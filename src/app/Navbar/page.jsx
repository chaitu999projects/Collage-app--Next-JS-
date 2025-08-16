import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <nav className='bg-amber-200 text-black shadow-md z-100 fixed w-full top-0'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo */}
          <Link 
            href='/' 
            className='text-2xl font-bold text-amber-800 hover:text-amber-900 transition duration-300 '
          >
            <img 
            src='/my_dp.jpg'
            width={40}
            height={40}
            className='rounded-full'
            />
          </Link>
          
          {/* Mobile menu button (hidden on larger screens) */}
          <button className='md:hidden focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
          
          {/* Navigation Links */}
          <div className='hidden md:flex space-x-6'>
            <Link 
              href='/collage/bpc/topper' 
              className='font-medium text-amber-700 hover:text-amber-900 transition duration-300 py-2 px-3 rounded hover:bg-amber-300'
            >
              Topper
            </Link>
            <Link 
              href='/collage/bpc/failures' 
              className='font-medium text-amber-700 hover:text-amber-900 transition duration-300 py-2 px-3 rounded hover:bg-amber-300'
            >
              Failures
            </Link>
            <Link 
              href='/contact' 
              className='font-medium text-amber-700 hover:text-amber-900 transition duration-300 py-2 px-3 rounded hover:bg-amber-300'
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu (hidden by default) */}
      <div className='md:hidden hidden bg-amber-100'>
        <div className='px-2 pt-2 pb-4 space-y-1'>
          <Link 
            href='/collage/bpc/topper' 
            className='block px-3 py-2 rounded-md text-base font-medium text-amber-700 hover:text-amber-900 hover:bg-amber-200'
          >
            Topper
          </Link>
          <Link 
            href='/collage/bpc/failures' 
            className='block px-3 py-2 rounded-md text-base font-medium text-amber-700 hover:text-amber-900 hover:bg-amber-200'
          >
            Failures
          </Link>
          <Link 
            href='/contact' 
            className='block px-3 py-2 rounded-md text-base font-medium text-amber-700 hover:text-amber-900 hover:bg-amber-200'
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar