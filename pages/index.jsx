import React,{useState}from 'react'
import SideBar from '../components/SideBar'
import ChatBox from '../components/ChatBox'


const Home = () => {



  return (
    <main className='w-full font-disp h-screen flex justify-between gap-x-6 p-3 lg:p-4 iems-center bg-gradient-to-br from-mSec  to-dSec  '>
        {/*         Side Bar */}
        <div className="w-full lg:w-max lg:min-w-[25%]">
        <SideBar />

        </div>
        
        
    </main>
  )
}

export default Home