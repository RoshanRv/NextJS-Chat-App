import React from 'react'

const Button = ({onClick,children}) => {
  return (
    <button onClick={onClick?()=>onClick():null} className='block mx-auto shadow-lg outline-0 shadow-gray-800 bg-dPri hover:bg-lPri transition-all px-6 py-2 my-8 hover:scale-x-105 rounded-md' >{children}</button>
  )
}

export default Button