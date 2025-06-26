import React from 'react'
import OrderStatus from './OrderStatus'
import Order from './Order'
import OrderTable from './OrderTable'

function OrderPage() {
  return (
    <div>
             <h1 className='fw-normal fs-4 p-4 border-bottom'>Open orders(6)</h1>
             {/* <table className='mt-5'>
              <thead className='text-secondary text-small-c ps-3 pe-3 border-bottom' style={{width:''}}>
                <td>Time</td>
                <td>type</td>
                <td>Instrument</td>
                <td>product</td>
                <td>Qty</td>
                <td>LTP</td>
                <td>price</td>
                <td>Status</td>
              </thead>
              <tbody>
                <Order />
              </tbody>
             </table> */}
             <OrderTable />
    </div>
  )
}

export default OrderPage