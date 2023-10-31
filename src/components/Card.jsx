import React from 'react'
import { Icon } from '@iconify/react'

function Card({ title, icon, bgColor, number }) {
  return (
    <div className={`rounded-lg min-w-fit h-56 ${bgColor}`}>
      <Icon icon={icon} className='text-2xl' />
      <span>
        {title}
      </span>
      <span>{number}</span>
    </div>
  )
}

export default Card