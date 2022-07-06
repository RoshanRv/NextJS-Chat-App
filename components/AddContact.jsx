import React from 'react'
import Button from './Button'

const AddContact = () => {
  return (
    <div className='text-center '>
        <h1 className='mb-6 mt-3 text-2xl' >Add New Contact</h1>
        <input type="text" placeholder='Email' className='rounded-md p-2 w-full shadow-md shadow-gray-800 outline-0 bg-lSec border-2 border-dSec ' autoCorrect={false} />
        <div className="flex">
            <Button >Add</Button>
        </div>
    </div>
  )
}

export default AddContact