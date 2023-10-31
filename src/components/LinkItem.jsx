import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'

function LinkItem({ to, icon, text }) {
  return (
    <NavLink to={to} activeClassName="active" className='flex items-center text-lg space-x-2 hover:bg-primary-500 py-2 px-10 rounded-md'>
      <Icon icon={icon} className='text-2xl' />
      <span>
        {text}
      </span>
    </NavLink>
  )
}

export default LinkItem