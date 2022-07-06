import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import ContactCard from './ContactCard'
import Modal from './Modal'
import AddContact from './AddContact'
import Logout from './Logout'

const SideBar = () => {

    const [showAddContact,setShowAddContact]=useState(false)
    const [showLogoutPop,setShowLogoutPop]=useState(false)

  return (
    <aside className='bg-gray-700 relative rounded-lg h-full shadow-xl shadow-gray-800 w-1/4 text-left text-lg text-white p-4'>
        <div className="flex  items-center justify-between border-b-2 border-dPri pb-3">
            {/*     Name And DP  ad Logout*/}
            <div className="flex items-center gap-x-4 justify-around ">
                {/*         IMG */}
                <div className="w-10 h-10 rounded-full bg-dPri"></div>
                {/*     Username */}
                <h1>Roshan Kumar</h1>
            </div>
            {/*     Logout */}
            <button onClick={()=>setShowLogoutPop(true)} ><FontAwesomeIcon icon={faRightFromBracket} className='p-3 bg-dPri shadow-lg shadow-gray-800 rounded-lg hover:scale-105 transition-all hover:bg-lPri ' /> </button>

            {/*     Login Modal */}
            <Modal showItem={showLogoutPop} setShowItem={setShowLogoutPop} >
              <Logout setShowItem={setShowLogoutPop}/>
            </Modal>
        </div>
        <Button onClick={()=>setShowAddContact(true)} >New Chat</Button>
        {/*     Add Contact Pop Up */}
        <Modal showItem={showAddContact} setShowItem={setShowAddContact} >
            <AddContact />
        </Modal>
        <div className="w-full overflow-auto px-2 h-[80%] ">
            <ContactCard email={'nkroshankumar@gmail.com'} />
            <ContactCard email={'nkroshankumar@gmail.com'} />
        </div>


        

    </aside>
  )
}

export default SideBar