import React from 'react'

export function Button({ onClick, children }) {
  return (
    <button className='button' onClick={onClick}>
        {children}
    </button>
  )
}