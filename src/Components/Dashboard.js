import React from 'react'
import Equity from './Equity'
import Commodity from './Commodity'
import Holdings from './Holdings'

function Dashboard() {
  return (
    <div className='container'>
      <div className='row'>
      <h1 className='fw-normal fs-4 p-4 border-bottom'>Hi, Demo</h1>
        <div className='col-md-6'>
          <Equity />
        </div>
        <div className='col-md-6'>
          <Commodity />
        </div>
        <hr />
        <div className='col-md-8'>
          <Holdings />
        </div>
        <div className='col-md-4'>
          <img src='./Assets/refer.jpeg' style={{height:'15rem'}}/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard