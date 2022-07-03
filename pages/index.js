import Head from 'next/head'
import Image from 'next/image'
import { useState,useContext} from 'react'
import {Context} from '../context'

export default function Home() {

  const {setUsername,setPassword} = useContext(Context)

  return (
    <main className='w-full font-disp h-screen flex justify-center flex-col items-center bg-gradient-to-br from-mSec  to-dSec '>
      <div className='lg:px-20 lg:pb-12 px-10 py-8 bg-gray-700 shadow-xl shadow-gray-800 rounded-3xl text-center '>
        {/*     Title */}
        <h1 className="text-white my-4 lg:text-3xl text-2xl">Next JS Chat App</h1>
        <div className='mt-10 text-white text-lg'>
          <div className="">
            <input type="text"  onChange={(e)=>setUsername(e.target.value)} placeholder='Username' className='p-2  bg-transparent outline-0 border-b-2 border-dPri hover:border-lPri transition-all' checked={false} />
          </div>
          <div className="mt-6">
            <input type="password"  onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='p-2  bg-transparent outline-0 border-b-2 border-dPri hover:border-lPri transition-all' checked={false} />
          </div>
          <button className='block mx-auto  bg-dPri hover:bg-lPri transition-all px-6 py-2 mt-10 rounded-md'>Sign Up/ Login</button>
        </div>
      </div>
    </main>
  )
}
