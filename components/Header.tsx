import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className='mt-10 sm:mx-32 mx-6 text-gray-700 font-gowun text-xs sm:text-lg flex justify-between items-center'>
      <p className='text-sm sm:text-base'>
          <Link href="mailto:bardhankoshambi2005@gmail.com" target="_blank" rel="noopener noreferrer">
            bardhankoshambi2005@gmail.com
          </Link>
        </p>
        <div>
          <ul className='flex flex-col sm:flex-row gap-4'>
            <li className="hover:text-greencolor">
              <Link href="https://linkedin.com/in/koshambi-bardhan-62b83b2ab" target="_blank" rel="noopener noreferrer" >LinkedIn</Link>
            </li>
            <li className="hover:text-greencolor">
              <Link href="https://github.com/koshambiB" target="_blank" rel="noopener noreferrer">Github</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className='my-6 sm:mx-20 mx-8 border-gray-800' />
    </>
  )
}

export default Header;
