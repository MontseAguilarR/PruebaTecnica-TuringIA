import React from 'react'

export const PrincipalButton = ({text, onClick, className = ''}) => {
  return (
    <button
            onClick={onClick}
            className={`${className}`}
        >
            {text}
    </button>
  )
}
