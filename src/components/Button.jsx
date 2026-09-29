import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Button = ({value,path}) => {
    
  return (
    <NavLink to={path} className='w-auto transition-all duration-300 ease-in h-auto p-3 pl-5 pr-5 border-2 border-white text-white hover:bg-green-600 hover:text-white shadow-green-500 rounded-3xl hover:scale-105'>
        <button >{value}</button>
    </NavLink>
    
  )
}

export default Button