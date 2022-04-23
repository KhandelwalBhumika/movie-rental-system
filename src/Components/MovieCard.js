// import { useHistory } from "react-router-dom";

import React, {useState} from 'react';
import images from '../images/movie.jpg';
import api from '../ApiTracker/api';
import Swal2 from "sweetalert2";
import EditMovies from './EditMovies';
import RentMoviePopup from './RentMoviePopup';



function MovieCard(props) {

    const [editModalShow, setEditModalShow] = useState(false)
    const [rentModalShow, setRentModalShow] = useState(false)



const deleteMovie = (e) =>{
    e.preventDefault()
        api.delete(`movies/${props._id}/`)

        .then((res)=>{
            Swal2.fire({
                icon : "success",
                // title: res.data.message
                title: "Successfully deleted"
            })
        })
        .catch((error)=>{
            // this.errors = error.response.data.errors;
            Swal2.fire({
                // icon : "error",
                title : error.response.data.message,
                type: "error"
            })
        })
  }




    
  return (
    <>

         <div className="align-items-top col-4">
                     <img src={images} className="card-img-top" alt="..." />
                     <div className="card-body" style={{backgroundColor: 'white'}}>
                        
                            <h5 className="card-text"><strong>Name:</strong> {props.name}</h5>
                            <p className="card-text"><strong>Release Date:</strong> {props.releaseDate}</p>
                            <p className="card-text"><strong>Genre: </strong>{props.genre} </p>
                            <p className="card-text"><strong>Description: </strong>{props.description} </p>
                            <p className="card-text"><strong>Quantity: </strong>{props.quantity} </p>
                            <p className="card-text"><strong>Price: </strong>{props.price} </p>
                        
                <button
                        className="btn btn-primary"
                        type="button"
                        variant="info"
                        onClick={() => setEditModalShow(true)}
                      > Edit Movie
                      </button>
                      <EditMovies
                      {...props}
                        show={editModalShow}
                        onHide={() => setEditModalShow(false)}
                        /> 
                  <button type="button" className="btn btn-primary" onClick={deleteMovie}>Delete Movie</button>
                  <button
                        className="btn btn-primary"
                        type="button"
                        variant="info"
                        onClick={() => setRentModalShow(true)}
                      > Rent Movie
                      </button>
                      <RentMoviePopup
                      {...props}
                        show={rentModalShow}
                        onHide={() => setRentModalShow(false)}/>

                         
                  </div>
        </div>
        
        
          </>
  )
}

export default MovieCard;