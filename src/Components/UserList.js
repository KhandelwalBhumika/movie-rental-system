import React from 'react'

function UserList(props) {


  const userName = props.userId != null ? props.userId.firstName + props.userId.lastName : ''

  return (
    
          <tr>
            <td>{userName}</td>
            <td>{props.movieId.name}</td>
            <td>{props.quantity}</td>
            <td>{props.movieId.price}</td>
          </tr>
      
  )
}

export default UserList;