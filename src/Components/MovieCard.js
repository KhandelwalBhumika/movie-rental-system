// import { useHistory } from "react-router-dom";

import React, {useState} from 'react';
import images from '../images/movie.jpg';
import EditMovies from './EditMovies';
import RentMoviePopup from './RentMoviePopup';
import DeletePopUp from './DeletePopUp';



function MovieCard(props) {

    const [editModalShow, setEditModalShow] = useState(false)
    const [deleteModalShow, setDeleteModalShow] = useState(false)
    const [rentModalShow, setRentModalShow] = useState(false)

    const isAdmin = localStorage.getItem('role') === 'admin'





  const propsPageRefresh = () => props.pageRefresh()

    
  return (
    <>

         <div className="align-items-top col-4">
                     <img src={images} className="card-img-top" alt="..." />
                     <div className="card-body p-2" style={{backgroundColor: 'white'}}>
                        
                            <h5 className="card-text"><strong>Name:</strong> {props.name}</h5>
                            <p className="card-text"><strong>Release Date:</strong> {props.releaseDate}</p>
                            <p className="card-text"><strong>Genre: </strong>{props.genre} </p>
                            <p className="card-text"><strong>Description: </strong>{props.description} </p>
                            <p className="card-text"><strong>Quantity: </strong>{props.quantity} </p>
                            <p className="card-text"><strong>Price: </strong>{props.price} </p>
                        
                            { 
                        isAdmin && <button
                          className="btn btn-primary m-2"
                          type="button"
                          variant="info"
                          onClick={() => setEditModalShow(true)}
                        > Edit Movie
                        </button> }
                        <EditMovies
                          {...props}
                            show={editModalShow}
                            onHide={() => setEditModalShow(false)}
                            updatePage={propsPageRefresh}
                            />
                  
                        { 
                        isAdmin && <button
                        className="btn btn-primary m-2"
                        type="button"
                        variant="info"
                        onClick={() => setDeleteModalShow(true)}
                        // onClick = {DeletePopUp}
                        > Delete Movie
                        </button> }
                       <DeletePopUp
                       {...props}
                          show={deleteModalShow}
                          onHide={() => setDeleteModalShow(false)}
                          updatePage={propsPageRefresh}
                          />


                      { !isAdmin && 
                      <button
                        className="btn btn-primary"
                        type="button"
                        variant="info"
                        onClick={() => setRentModalShow(true)}
                      > Rent Movie
                      </button> 
                      }
                      <RentMoviePopup
                      {...props}
                        show={rentModalShow}
                        updatePage={propsPageRefresh}
                        onHide={() => setRentModalShow(false)}
                        />

                         
                  </div>
        </div>
        
        
          </>
  )
}

export default MovieCard;





