import React from 'react'
import NavMenu from '@components/NavMenu'

const Layout = ({ children }) => {
  return (
    <>
      <main className='min-h-screen grid grid-cols-10'>
        <div className='col-span-2'>
          <NavMenu />
        </div>
        <div className='h-full col-span-8'>
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout