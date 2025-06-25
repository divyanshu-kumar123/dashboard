import React from 'react'
import LeftNav from './LeftNav'
import RightNav from './RightNav'

function Navbar() {
  return (
    <div className='row border'>
      <div className='col-md-4'>
        <LeftNav />
      </div>
      <div className='col-md-8'>
        <RightNav />
      </div>
    </div>
  )
}

export default Navbar