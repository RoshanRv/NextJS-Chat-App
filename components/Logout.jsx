import React from 'react'
import Button from './Button'

const Logout = ({setShowItem}) => {
  return (
    <div className='text-center' >
        <h1 className="text-3xl font-bold my-4">Logout</h1>
        <p className="text-lg my-2">Are You Sure? You Want To Logout?</p>
        <div className="flex">
            <Button onClick={()=>setShowItem(false)}>Yes</Button>
            <Button onClick={()=>setShowItem(false)}>No</Button>
        </div>
    </div>
  )
}

export default Logout