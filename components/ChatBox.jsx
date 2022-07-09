import React,{useState,useRef,useEffect}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Message from './Message'
import { useRouter } from 'next/router'
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore'
import { addDoc, collection, doc, orderBy ,query, serverTimestamp} from 'firebase/firestore'
import { db } from '../firebaseconfig'
import { auth } from '../firebaseconfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import getOtherUser from '../utlis/getOtherUser'

const ChatBox = () => {

    const [user]=useAuthState(auth)
    const [textBox,setTextBox]=useState('')
    const router = useRouter()
    const {id} = router.query
    const q = query(collection(db,`chats/${id}/messages`), orderBy('timestamp'))
    const [messages] =useCollectionData (q);
    const [chat] = useDocumentData(doc(db,`chats/${id}`))
    const scrollEnd = useRef()
    const textInputRef = useRef()

    const handleSend = ()=>{
        if(textBox.length>0){
            addDoc(collection(db,`chats/${id}/messages`),{
                message:textBox,
                sender:user.email,
                timestamp:serverTimestamp()
            })
            setTextBox('')
        }
    }

    const handleKeys = (e)=>{
        if(e.key=='Enter'){
            handleSend()
        }
    }


    useEffect(()=>{
        textInputRef.current.focus()
        
    },[])

    //      Update Scroll To End of Screen
    useEffect(()=>{
        scrollEnd.current.scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    },[messages])

  return (
    <section  className='bg-gray-700 relative flex flex-col rounded-lg h-full shadow-xl justify-between shadow-gray-800 w-full text-left text-lg text-white '>
        {/*   Name */}
        <div className="flex gap-x-6 items-center border-b-2 border-dPri pb-4 bg-mSec rounded-t-lg p-4">
            {/*         back btn */}
            <button className='lg:hidden border-2 border-white h-max flex items-center rounded-full ' onClick={()=>router.back()} ><FontAwesomeIcon icon={faArrowCircleLeft} className='text-dPri bg-white rounded-full text-2xl' /></button>
            {/* <div className="w-10 h-10 bg-dPri rounded-full"></div> */}
            <h1 className='text-xl font-bold' >{getOtherUser(chat?.users,user)}</h1>
        </div>
        {/*  chat area */}
        <div className="h-full w-full  p-4 flex flex-col overflow-y-auto">
            {messages?.map((msg,i)=><Message key={i}  sender={msg.sender==user.email} text={msg.message}  time={msg.timestamp} />)}
            {/*     dummy div to scroll to bottom */}
            <div ref={scrollEnd}>
            </div>
        </div>

        

        {/* msg input */}
        <div className="flex justify-center rounded-b-lg items-center w-full gap-x-4 p-4 self-end justify-self-end border-t-2 border-dPri bg-mSec ">
            {/*         Text Box */}
            <input type="text" placeholder='Type A Text Message ...' className='rounded-md p-2 w-full shadow-md shadow-gray-800 outline-0 bg-lSec border-2 border-dSec ' spellCheck={false} value={textBox} onChange={(e)=>setTextBox(e.target.value)} ref={textInputRef} onKeyDown={(e)=>handleKeys(e)} />
            {/*         Send Btn */}
            <button onClick={()=>handleSend()} ><FontAwesomeIcon icon={faPaperPlane} className='p-3 shadow-lg shadow-gray-800 rounded-lg hover:scale-105 transition-all hover:bg-lPri bg-dPri outline-0' /></button>
        </div>

    </section>
  )
}

export default ChatBox