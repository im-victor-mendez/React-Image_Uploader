import React from 'react'

function Card({ id, children }) {
  return (
    <section id={`${id}`} className='card'>
        {children}
    </section>
  )
}

export default Card