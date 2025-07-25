'use client'; 

import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='relative mt-10 sm:mx-32 mx-6 text-gray-700 font-gowun text-xs sm:text-lg flex justify-between items-center'>


        <p className='hidden sm:block text-sm sm:text-base'>
          <Link href="mailto:bardhankoshambi2005@gmail.com" target="_blank" rel="noopener noreferrer">
            bardhankoshambi2005@gmail.com
          </Link>
        </p>


        <div className="sm:hidden">
          <Link href="mailto:bardhankoshambi2005@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send Email">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </Link>
        </div>


        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="w-6 h-6 mx-2">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>


        <div className={`absolute top-20 right-8 z-50 bg-[#e0efff] rounded-md px-4 py-2 text-base font-medium 
                        sm:static sm:z-auto sm:bg-transparent sm:flex sm:flex-row sm:items-center sm:gap-4 
                        ${isMenuOpen ? 'flex flex-col gap-4' : 'hidden'}`}>
          <ul className='flex flex-col sm:flex-row gap-4'>
            <li className="hover:text-greencolor">
              <Link
                href="https://linkedin.com/in/koshambi-bardhan-62b83b2ab"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                LinkedIn
              </Link>
            </li>
            <li className="hover:text-greencolor">
              <Link
                href="https://github.com/koshambiB"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className='my-6 sm:mx-20 mx-8 border-gray-800' />
    </>
  );
};

export default Header;
