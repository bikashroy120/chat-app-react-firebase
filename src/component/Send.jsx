import React from 'react'
import att from '../img/attach.png'
import img from '../img/img.png'

const Send = () => {
  return (
    <div>
        <div className='bg-[#dddddd] flex items-center justify-between p-3'>
            <input type="text" placeholder='Type something...' className='border-none outline-none bg-transparent w-[80%]' />
            <div className='flex items-center justify-center gap-3'>
                <img src={att} alt="" className='w-8 h-8' />
                <img src={img} alt="" className='w-8 h-8' />
                <button className='py-1 px-3 bg-[#2E2D52] text-white'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Send