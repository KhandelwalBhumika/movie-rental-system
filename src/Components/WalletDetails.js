import React from 'react'

function WalletDetails(props) {

  // const check = props.transactionType === "debit- movie rented" || "debit"

  return (
    
          <tr>
            <td>{props.createdAt}</td>
            <td>{props.transactionType}</td>
            <td>{props.balance}</td>
          </tr>
      
  )
}

export default WalletDetails;