import React from 'react';

function WalletDetails(props) {
  console.log('Wallet Details', props)
  let amount = 0, movieName = ''

  

    if (props.rentId) {
      amount = "-" + (props.rentId.quantity * props.rentId.price)
     }
     else{
       amount = "+" + ( props.balance - props.amountAdded ) 
     }


    movieName = props.rentId != null ? props.rentId.movieId.name: ''
  

  return (
    
          <tr>
            <td>{props.createdAt}</td>
            <td>{props.transactionType}</td>
            <td>{movieName}</td>
            <td style={{color: props.rentId ? "red" : "green"}}>{amount}</td>
            <td>{props.balance}</td>
          </tr>
  )
}

export default WalletDetails;