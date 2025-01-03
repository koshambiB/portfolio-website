import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='mt-10 sm:mx-32 mx-20 text-gray-700 font-gowun text-xs sm:text-lg flex justify-between'>
        <p>bardhankoshambi2005@gmail.com</p>
        <div>
            <ul className='flex flex-col-1 '>
            <li className="hover:text-greencolor"><Link href="https://linkedin.com/in/koshambi-bardhan-62b83b2ab" >LinkedIn /</Link></li> 
            <li className="hover:text-greencolor"><Link href="https://github.com/koshambiB">Github</Link></li>  
            </ul>   
        </div>
        
    </div>
    <hr className='my-6 sm:mx-20  mx-8 border-gray-800'/>
    </>
  )
}

export default Header