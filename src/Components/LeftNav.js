import React from 'react'

function LeftNav() {
  return (
    <div className='row pb-2'>
      <div className='row'>
        <div className='col-md-6 mt-3' style={{lineHeight:0.1}}>
          <p className='text-small-c text-bold-c'>Nifty 50</p>
          <span className='text-small-c text-bold-c text-red-c'>18181.75</span>
          <span className='text-xsmall-c text-gray-c text-bold-c ms-1 text-muted'> -104.75(-0.57%)</span>
        </div>
        <div className='col-md-6 mt-3 ps-5 pe-0' style={{lineHeight:0.1}}>
          <p className='text-small-c text-bold-c'>Sensex</p>
          <span className='text-small-c text-bold-c text-red-c'>18181.75</span>
          <span className='text-xsmall-c text-gray-c text-bold-c ms-1 text-muted'> -104.75(-0.57%)</span>
        </div>
      </div>
    </div>
  )
}

export default LeftNav