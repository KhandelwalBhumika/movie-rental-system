import React from 'react'

function ReturnMovieDetails(props) {
  return (
      <>   

<tr>
            <td>{props.movieId.name}</td>
            <td>{props.quantity}</td>
          </tr>



    </>

  )
}

export default ReturnMovieDetails