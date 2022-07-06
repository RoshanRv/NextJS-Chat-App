import React from 'react'

const Message = ({user,text}) => {
  return (
    <div className={`rounded-md max-w-[90%] my-2 p-2 px-3 text-white shadow-md shadow-gray-800 ${user==1?'self-end bg-dPri':'self-start bg-lPri'} `} >
        <h1 className='break-all ' >{text}</h1>
    </div>
  )
}

export default Message