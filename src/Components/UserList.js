import React from 'react'

function UserList(props) {
  return (
    
          <tr>
            {/* <th scope="row">1</th> */}
            <td>{props.userId.firstName + props.userId.lastName}</td>
            <td>{props.movieId.name}</td>
            {/* <td>{props.movieId.quantity}</td> */}
            <td>{props.quantity}</td>
            <td>{props.movieId.price}</td>
            {/* <td>2016-05-25</td> */}
          </tr>
      
  )
}

export default UserList;