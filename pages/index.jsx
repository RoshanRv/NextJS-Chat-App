import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useState,useContext} from 'react'
import {Context} from '../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import Button from '../components/Button'

export default function Home() {

  const {username,password,setUsername,setPassword} = useContext(Context)

  const handleSubmit = ()=>{

    if(username==''|| password=='')return
    
    console.log('axios')
    axios.put('https://api.chatengine.io/users/',
    {username,secret:password},
    {headers:{"Private-key":"b2b57c7f-5b28-4c6e-bf1b-ffe2dfad1be2"}}).then(
      resp=>{
        console.log(resp)
        console.log('User Created/Logged')
      }
    )
  }

  return (
    <>
      <Head>
        <title>Chat App | Login</title>
      </Head>
      <main className='w-full font-disp h-screen flex justify-center flex-col items-center bg-gradient-to-br from-mSec  to-dSec '>
        <div className='lg:px-20 lg:pb-12 px-10 py-8 bg-gray-700 text-white text-lg shadow-xl shadow-gray-800 rounded-3xl text-center '>
          {/*     Title */}
          <h1 className=" my-4 lg:text-3xl text-2xl mb-10">Next JS Chat App</h1>
          {/*     FORM   */}
          {/* <div className='mt-10 text-white text-lg'>
            <div className="">
              <input type="text"  onChange={(e)=>setUsername(e.target.value)} placeholder='Username' className='p-2 w-full bg-transparent outline-0 border-b-2 border-dPri hover:border-lPri transition-all' checked={false} />
            </div>
            <div className="mt-6">
              <input type="password"  onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='p-2 w-full bg-transparent outline-0 border-b-2 border-dPri hover:border-lPri transition-all' checked={false} />
            </div>
          </div> */}

          <span className='px-8 pt-12 pb-6 bg-dPri rounded-2xl hover:bg-lPri transition-all'><FontAwesomeIcon icon={faMessage} className='text-6xl ' /></span>
          <div className='mt-20'>
           <Button onClick={()=>handleSubmit()} >Sign In With Google</Button>
          </div>
          
        </div>
      </main>

    </>
  )
}
