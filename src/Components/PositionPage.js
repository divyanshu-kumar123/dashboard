import React from 'react'
import PositionTable from './PositionTable'
import {positionsData} from '../Data'

function PositionPage() {
  return (
    <div className='container'>
        <h1 className="fw-normal fs-6 p-4 border-bottom">
        Positions({positionsData.length})
      </h1>
      <PositionTable />
    </div>
  )
}

export default PositionPage