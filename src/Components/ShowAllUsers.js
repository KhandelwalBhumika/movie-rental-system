import React from 'react';

function ShowAllUsers(props) {
  return (
      <>
        <tr>
            <td>{props.firstName + props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.contactNumber}</td>
        </tr>
      </>
  )
}

export default ShowAllUsers;