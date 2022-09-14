import React from 'react'
import img from '../img/man.webp'
import '../App.css'

const Message = () => {
  return (
    <div className='flex items-start justify-start gap-2'>
        <img src={img} alt="" className='w-14 h-14 rounded-full' />
        <div>
            <p className='text-[14px] font-normal bg-green-300 w_component'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, maiores maxime reprehenderit perspiciatis vitae natus.</p>
            {/* <img src={img} alt="" /> */}
        </div>
    </div>
  )
}

export default Message