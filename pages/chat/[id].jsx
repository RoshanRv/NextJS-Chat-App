import React,{useState}from 'react'
import SideBar from '../../components/SideBar'
import ChatBox from '../../components/ChatBox'


const chat = () => {



  return (
    <main className='w-full font-disp h-screen flex justify-between gap-x-4 p-2 lg:p-4 iems-center bg-gradient-to-br from-mSec  to-dSec '>
        {/*         Side Bar */}
        <div className='hidden lg:block lg:w-4/12'>
          <SideBar />
        </div>
        {/*         Chat Box */}
        <ChatBox />

        
        
    </main>
  )
}

export default chat