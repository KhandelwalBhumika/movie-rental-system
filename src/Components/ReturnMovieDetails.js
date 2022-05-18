import React from 'react';
import Swal2 from "sweetalert2";
import api from "../configApi/api";

function ReturnMovieDetails(props) {



  const propsPageRefresh = () => props.pageRefresh()


  const returnSelectedMovie = (e) =>{
    e.preventDefault()
    console.log(props)
    api.put('/users/return-movie', { rentId: props._id})
    .then((res) => {
      Swal2.fire({
        icon : res.data.status,
        title: res.data.message
    })
      props.pageRefresh()
    })
    .catch((error)=>{
      Swal2.fire({
          icon: "error",
          title : error.message
      })
  })
  }

  let showButton = props.returnStatus === true ? '' : <button className="btn btn-primary w-40" onClick={returnSelectedMovie} updatePage={propsPageRefresh}>Return</button>

  return (
      <>   

          <tr>
            <td>{props.movieId.name}</td>
            <td>{props.quantity}</td>
            <td>{showButton}</td>
          </tr>
    </>

  )
}

export default ReturnMovieDetails