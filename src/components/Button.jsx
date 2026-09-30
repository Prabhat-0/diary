import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Button = ({value,path}) => {
    
  return (
   <Link
      to={path}
      className="h-auto w-auto rounded-3xl border-2 border-white p-3 px-5 text-white hover:shadow-lg hover:shadow-green-500 transition-all duration-300 ease-in hover:scale-105 hover:bg-green-600"
    >
      {value}
    </Link>
    
  )
}

export default Button