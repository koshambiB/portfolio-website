import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='mt-10 mx-32 text-gray-400 font-gowun text-lg flex justify-between'>
        <p>bardhankoshambi2005@gmail.com</p>
        <div>
            <ul className='flex flex-col-1 '>
            <li className="hover:text-white"><Link href="https://linkedin.com/in/koshambi-bardhan-62b83b2ab" >LinkedIn /</Link></li> 
            <li className="hover:text-white"><Link href="https://github.com/koshambiB">Github</Link></li>  
            </ul>   
        </div>
        
    </div>
    <hr className='my-6 mx-28 border-gray-500'/>
    </>
  )
}

export default Header