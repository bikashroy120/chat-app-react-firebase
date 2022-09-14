import React from 'react'
import Chat from '../component/Chat'
import Sidber from '../component/Sidber'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#A7BCFE] flex items-center justify-center'>
        <div className='flex items-start justify-start w-[75%] h-[75%] shadow-md border border-gray-300'>
            <Sidber />
            <Chat />
        </div>
    </div>
  )
}

export default Home