import React from 'react'
import OrderStatus from './OrderStatus'
import Order from './Order'
import OrderTable from './OrderTable'
import ExecutedOrderTable from './ExecutedOrderTable'

function OrderPage() {
  return (
    <div>
             <h1 className='fw-normal fs-4 p-4 border-bottom'>Open orders(6)</h1>
             <OrderTable />
             <h4 className='fw-normal fs-4 p-4 border-bottom text-xsmall-c text-gray-c'>Executed orders(6)</h4>
             <ExecutedOrderTable />
    </div>
  )
}

export default OrderPage