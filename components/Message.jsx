import React,{useEffect,useState}from 'react'

const Message = ({sender,text,time}) => {

  const [dateTime,setDateTime]=useState('')

  useEffect(()=>{

    let sec = time?.seconds*1000
    let t = new Date(sec)
    // const dateTime = time.getDate()
    setDateTime(`${t.getDate()}/${t.getMonth()}/${t.getFullYear()} ${t.getHours()}:${t.getMinutes()}`)
    // console.log(`${t.getDate()}/${t.getMonth()}/${t.getFullYear()} ${t.getHours()}:${t.getMinutes()}`)

  },[time])
  
  return (
    <div className={`rounded-md max-w-[90%] my-2 p-2 px-3 text-white shadow-md shadow-gray-800 ${sender?'self-end bg-dPri':'self-start bg-lPri'} `} >
        <h1 className='break-all ' >{text}</h1>
        <p className={`text-gray-300/50 text-xs  ${sender&&'text-end'} `}>{dateTime}</p>
    </div>
  )
}

export default Message