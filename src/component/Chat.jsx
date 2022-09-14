import React from 'react'
import img from '../img/cam.png'
import more from '../img/more.png'
import add from '../img/add.png'
import Message from './Message'
import '../App.css'
import Send from './Send'

const Chat = () => {
  return (
    <div className=' flex-[2] h-full w-full'>
        <div className='flex items-center justify-between py-3 px-2 bg-[#3D3C61]'>
            <div>
                <h2 className=' text-white'>Lorem Chat</h2>
            </div>
            <div className='flex items-center justify-between gap-2'>
                <img src={img} alt="" className='w-8 h-8 cursor-pointer '/>
                <img src={add} alt="" className='w-8 h-8 cursor-pointer '/>
                <img src={more} alt="" className='w-8 h-8 cursor-pointer '/>
            </div>
        </div>
        <div className='ourMessage h-[80%] p-6 bg-[#ddddf7] overflow-y-scroll'>
            <Message />
        </div>

        <div>
            <Send />
        </div>

    </div>
  )
}

export default Chat