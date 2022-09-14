import React from 'react'
import img from '../img/man.webp'
import Chats from './Chats'
import Search from './Search'

const Sidber = () => {
  return (
    <div className='flex-1 border-r border-gray-500 h-full bg-[#3D3C61]'>
        <div className='flex items-center justify-between py-3 px-2 bg-[#2E2D52]'>
            <div>
                <h2 className=' text-white'>Lorem Chat</h2>
            </div>
            <div className='flex items-center justify-between gap-2'>
                <img src={img} alt="" className='w-8 h-8 rounded-full'/>
                <h4 className=' text-white text-[16px] font-normal'>Jone dwo</h4>
                <button className=' bg-white text-[12px] py-1 px-2'>logout</button>
            </div>
        </div>

        <Search />
        <Chats />

    </div>
  )
}

export default Sidber