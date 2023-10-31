import React from 'react'
import LinkItem from './LinkItem'
import { Icon } from '@iconify/react'

function NavMenu() {
  return (
    <aside className='h-full flex flex-col justify-evenly items-center space-y-10 bg-[#f2eae0]'>
      <div id='header' className='flex flex-col justify-between items-center'>
        <div className='relative text-3xl font-bold mb-10'>
          CRUD Application
          <span className="block absolute top-0 -left-3 w-2 h-full bg-primary-500 content-['']"></span>
        </div>
        <div className='w-44 h-44 rounded-full bg-gray-800 mb-4'>  </div>
        <p className='font-semibold text-2xl'>User name</p>
        <p>user role</p>
      </div>
      <div className='flex flex-col space-y-7 justify-center'>
        <LinkItem to="/" icon="mdi:home" text="Home" />
        <LinkItem to="/course" icon="mdi:book" text="Course" />
        <LinkItem to="/students" icon="mdi:school" text="Students" />
        <LinkItem to="/payment" icon="mdi:payment" text="Payment" />
        <LinkItem to="/report" icon="mdi:report" text="Report" />
        <LinkItem to="/settings" icon="mdi:settings" text="Settings" />
      </div>
      <div>
        <button class="inline-flex hover:text-primary-800 px-4 py-2 duration-200 transition-all">
          logout <Icon icon="mdi:logout" className='ml-3 text-2xl' />
        </button>
      </div>
    </aside >
  )
}

export default NavMenu