import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Modal = ({children,setShowItem,showItem}) => {


    const handleClose=()=>{
        setShowItem(false)
    }

  return (
      <>
    {showItem&&(
    <main className='fixed top-0 left-0 w-full text-white h-screen z-50  bg-black/80 flex flex-col justify-center items-center' >
        <div className="p-4 rounded-md bg-gray-700 lg:w-1/2 w-11/12 shadow-xl shadow-black relative">
            {/*         Close Btn    */}
            <button className='absolute top-5 right-5' onClick={()=>handleClose()} ><FontAwesomeIcon icon={faClose} className='text-gray-300 text-2xl hover:scale-105 hover:rotate-90 duration-300 transition-all' /></button>
            {children}
        </div>
    </main>)}
    </>
  )
}

export default Modal