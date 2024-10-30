import React from 'react'

export const PrincipalButton = ({text, onClick, className = ''}) => {
  return (
    <button
            onClick={onClick}
            className={`bg-[#1ebe91] text-[#ffffff] px-4 py-2 rounded my-5 hover:bg-white hover:text-[#005546] transition-colors duration-300 ease-in-out${className}`}
        >
            {text}
    </button>
  )
}
