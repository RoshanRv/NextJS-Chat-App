import React from 'react'
import { useRouter } from 'next/router'

const ContactCard = ({data,email}) => {

  const router = useRouter()

  const redirect = ()=>{

    router.push(`/chat/${data.id}`)

  }

  return (
    <div className='bg-mSec rounded-md my-2 shadow-lg shadow-gray-800 flex justify-start gap-x-4 border-b-2 border-dPri hover:border-lPri cursor-pointer hover:scale-105 hover:bg-dSec transition-all p-4 items-center' onClick={()=>redirect()}  >
        {/* <div className="w-10 h-10 rounded-full bg-gray-200"></div> */}
        <h1 className="text-white text-lg">{email}</h1>
    </div>
  )
}

export default ContactCard