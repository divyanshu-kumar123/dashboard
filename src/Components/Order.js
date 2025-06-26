import React from 'react'
import OrderStatus from './OrderStatus'

function Order() {
  return (
    <tr>
        <td>14:27:29</td>
        <td>Sell</td>
        <td>Pnb</td>
        <td>Product</td>
        <td>0 / 1</td>
        <td>586.50</td>
        <td>585.00/585.50 trg</td>
        <td><OrderStatus status={'open'} /></td>
    </tr>
  )
}

export default Order