import React from 'react'

function OrderStatus({status}) {
  return (
    <div className={status==='open' ? 'bg-secondary text-center order-status pb-4' : 'bg-danger text-center order-status pb-4'}>
        <span>{status}</span>
    </div>
  )
}

export default OrderStatus