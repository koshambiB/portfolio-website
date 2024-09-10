import { Link } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='mt-10 mx-32 text-gray-400 text-xs flex justify-between'>
        <p>bardhankoshambi2005@gmail.com</p>
        <div>
            <ul className='flex flex-col-1'>
            <li>LinkedIn /</li> 
            <li>Github</li>  
            </ul>   
        </div>
        
    </div>
    <hr className='my-6 mx-32 border-gray-500'/>
    </>
  )
}

export default Header