import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold font-serif text-white mb-4">Chaitu College</h2>
            <p className="text-amber-100 mb-4">
              Empowering students with knowledge, skills, and values for a brighter future since 1995.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href="#" className="text-amber-200 hover:text-white transition duration-300">
                  <span className="sr-only">{social}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d={`M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z`} clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-amber-200 hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="/about" className="text-amber-200 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link href="/courses" className="text-amber-200 hover:text-white transition duration-300">Courses</Link></li>
              <li><Link href="/admissions" className="text-amber-200 hover:text-white transition duration-300">Admissions</Link></li>
              <li><Link href="/contact" className="text-amber-200 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">123 College Street</p>
              <p className="mb-2">Academic Nagar, Bangalore</p>
              <p className="mb-2">Karnataka 560001</p>
              <p className="mb-2">Phone: +91 9876543210</p>
              <p className="mb-2">Email: info@bpc-college.edu</p>
            </address>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-12 pt-8 border-t border-amber-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-200 text-sm">
            &copy; {new Date().getFullYear()} BPC College. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-amber-200 hover:text-white text-sm transition duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-amber-200 hover:text-white text-sm transition duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer