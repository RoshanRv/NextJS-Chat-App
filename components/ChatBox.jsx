import React,{useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Message from './Message'

const ChatBox = () => {

    const [messages,setMessages]=useState([])
    const [textBox,setTextBox]=useState('')

    const handleSend = ()=>{
        if(textBox.length>0){
            const temp = [...messages]
            temp.push(textBox)
            setMessages(temp)
            setTextBox('')
        }
    }

  return (
    <section className='bg-gray-700 relative flex flex-col rounded-lg h-full shadow-xl justify-between shadow-gray-800 w-full text-left text-lg text-white '>
        {/*   Name */}
        <div className="flex gap-x-6 items-center border-b-2 border-dPri pb-4 bg-mSec rounded-t-lg p-4">
            <div className="w-10 h-10 bg-dPri rounded-full"></div>
            <h1 className='text-xl font-bold' >nkroshankumar</h1>
        </div>
        {/*  chat area */}
        <div className="h-full w-full p-4 flex flex-col overflow-y-auto">
            {messages.map(msg=><Message user={1} text={msg} />)}
        </div>
        {/* msg input */}
        <div className="flex justify-center rounded-b-lg items-center w-full gap-x-4 p-4 self-end justify-self-end border-t-2 border-dPri bg-mSec ">
            {/*         Text Box */}
            <input type="text" placeholder='Type A Text Message ...' className='rounded-md p-2 w-full shadow-md shadow-gray-800 outline-0 bg-lSec border-2 border-dSec ' autoCorrect={false} value={textBox} onChange={(e)=>setTextBox(e.target.value)} />
            {/*         Send Btn */}
            <button onClick={()=>handleSend()} ><FontAwesomeIcon icon={faPaperPlane} className='p-3 shadow-lg shadow-gray-800 rounded-lg hover:scale-105 transition-all hover:bg-lPri bg-dPri outline-0' /></button>
        </div>
    </section>
  )
}

export default ChatBox