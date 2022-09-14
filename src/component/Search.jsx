import React from 'react'
import img from '../img/man.webp'

const Search = () => {
  return (
    <div>
        <input type="text" placeholder='Find a user....' className='w-full outline-none border-none p-2 placeholder:text-[15px] text-[15px] bg-transparent'/>
        <div className='px-2 flex items-center justify-start gap-2 mb-2'>
            <img src={img} alt="" className='w-10 h-10 rounded-full'/>
            <h3 className=' text-white'>jone dow</h3>
        </div>
        <hr />
    </div>
  )
}

export default Search