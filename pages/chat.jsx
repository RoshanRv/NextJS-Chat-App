import React,{useState}from 'react'
import SideBar from '../components/SideBar'
import ChatBox from '../components/ChatBox'


const chat = () => {



  return (
    <main className='w-full font-disp h-screen flex justify-between gap-x-10 p-8 iems-center bg-gradient-to-br from-mSec  to-dSec '>
        {/*         Side Bar */}
        <SideBar />
        {/*         Chart Box */}
        <ChatBox />

        
        
    </main>
  )
}

export default chat